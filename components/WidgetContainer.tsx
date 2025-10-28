"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import PhoneWidget from "./PhoneWidget";
import ChatWidget from "./ChatWidget";

export default function WidgetContainer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPhoneWidget, setShowPhoneWidget] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Don't show on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  // Close expanded state when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  const handleMainButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePhoneClick = () => {
    setShowPhoneWidget(true);
    setIsExpanded(false);
  };

  const handleChatClick = () => {
    setShowChatWidget(true);
    setIsExpanded(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        {/* Expanded Options */}
        {isExpanded && (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Phone Option */}
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-lg transition-all hover:scale-105 group"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">Call</span>
            </button>

            {/* Chat Option */}
            <button
              onClick={handleChatClick}
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-lg transition-all hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Chat</span>
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleMainButtonClick}
          className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-14 h-14 shadow-lg transition-all hover:scale-105 flex items-center justify-center ${
            isExpanded ? "rotate-45" : ""
          }`}
          aria-label="Contact options"
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Phone Widget Modal */}
      {showPhoneWidget && (
        <PhoneWidget onClose={() => setShowPhoneWidget(false)} />
      )}

      {/* Chat Widget Panel */}
      {showChatWidget && (
        <ChatWidget onClose={() => setShowChatWidget(false)} />
      )}
    </>
  );
}
