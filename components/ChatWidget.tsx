"use client";

import { useState, useEffect, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send } from "lucide-react";
import { format } from "date-fns";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
}

interface ChatWidgetProps {
  onClose: () => void;
}

export default function ChatWidget({ onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId] = useState(() => crypto.randomUUID());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = useMutation(api.chat.sendMessage);

  // Add welcome message on mount
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        text: "Hi! How can we help you today?",
        sender: "bot",
        timestamp: Date.now(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const trimmedMessage = inputValue.trim();

    if (!trimmedMessage || trimmedMessage.length > 500) {
      return;
    }

    // Add message to local state (optimistic update)
    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      text: trimmedMessage,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Save to Convex
    try {
      await sendMessage({
        sessionId,
        message: trimmedMessage,
        sender: "user",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:w-96">
      <Card className="flex flex-col h-[500px] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-muted/30">
          <h3 className="font-semibold">Chat with us</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {format(new Date(message.timestamp), "HH:mm")}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              maxLength={500}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {inputValue.length}/500 characters
          </p>
        </div>
      </Card>
    </div>
  );
}
