"use client";

import { useState, useEffect, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, X, Mic, MicOff } from "lucide-react";
import Vapi from "@vapi-ai/web";

interface PhoneWidgetProps {
  onClose: () => void;
}

export default function PhoneWidget({ onClose }: PhoneWidgetProps) {
  const [callState, setCallState] = useState<"idle" | "calling" | "ended">("idle");
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState("");
  const [callId, setCallId] = useState<string | null>(null);

  const vapiRef = useRef<Vapi | null>(null);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startVapiCall = useMutation(api.vapi.startVapiCall);
  const endVapiCall = useMutation(api.vapi.endVapiCall);
  const failVapiCall = useMutation(api.vapi.failVapiCall);

  useEffect(() => {
    // Initialize VAPI client
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    if (publicKey) {
      try {
        vapiRef.current = new Vapi(publicKey);

        // Set up VAPI event listeners
        vapiRef.current.on("call-start", handleCallStart);
        vapiRef.current.on("call-end", handleCallEnd);
        vapiRef.current.on("error", handleError);
      } catch (err) {
        console.error("Failed to initialize VAPI:", err);
        setError("Voice call unavailable");
      }
    } else {
      setError("Voice call not configured");
    }

    return () => {
      // Cleanup
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const handleCallStart = async (call: any) => {
    const id = call.id || `call_${Date.now()}`;
    setCallId(id);
    setCallState("calling");

    // Start duration timer
    durationIntervalRef.current = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);

    // Save to Convex
    try {
      await startVapiCall({ callId: id });
    } catch (err) {
      console.error("Failed to save call start:", err);
    }
  };

  const handleCallEnd = async (call: any) => {
    setCallState("ended");

    // Stop duration timer
    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
    }

    // Save to Convex
    if (callId) {
      try {
        await endVapiCall({
          callId,
          duration,
          transcript: call.transcript,
        });
      } catch (err) {
        console.error("Failed to save call end:", err);
      }
    }

    // Auto-close after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleError = async (error: any) => {
    console.error("VAPI error:", error);
    setError("Call failed. Please try again.");
    setCallState("idle");

    if (callId) {
      try {
        await failVapiCall({ callId });
      } catch (err) {
        console.error("Failed to save call failure:", err);
      }
    }
  };

  const handleStartCall = async () => {
    if (!vapiRef.current) {
      setError("Voice call not initialized");
      return;
    }

    try {
      setError("");
      const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
      if (!assistantId) {
        setError("Assistant not configured");
        return;
      }

      await vapiRef.current.start(assistantId);
    } catch (err) {
      console.error("Failed to start call:", err);
      setError("Failed to start call");
    }
  };

  const handleEndCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  const handleToggleMute = () => {
    if (vapiRef.current) {
      if (isMuted) {
        vapiRef.current.setMuted(false);
      } else {
        vapiRef.current.setMuted(true);
      }
      setIsMuted(!isMuted);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Voice Call</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
              {error}
            </div>
          )}

          {callState === "idle" && (
            <div className="py-8">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-12 h-12 text-primary" />
              </div>
              <Button onClick={handleStartCall} size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                Start Voice Call
              </Button>
            </div>
          )}

          {callState === "calling" && (
            <div className="py-8">
              <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Phone className="w-12 h-12 text-green-500" />
              </div>
              <div className="text-3xl font-bold mb-6 font-mono">
                {formatDuration(duration)}
              </div>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleToggleMute}
                  className="flex-1"
                >
                  {isMuted ? (
                    <>
                      <MicOff className="w-5 h-5 mr-2" />
                      Unmute
                    </>
                  ) : (
                    <>
                      <Mic className="w-5 h-5 mr-2" />
                      Mute
                    </>
                  )}
                </Button>
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={handleEndCall}
                  className="flex-1"
                >
                  <PhoneOff className="w-5 h-5 mr-2" />
                  End Call
                </Button>
              </div>
            </div>
          )}

          {callState === "ended" && (
            <div className="py-8">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneOff className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold">Call Ended</p>
              <p className="text-sm text-muted-foreground mt-2">
                Duration: {formatDuration(duration)}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
