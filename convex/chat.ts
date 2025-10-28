import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    sessionId: v.string(),
    message: v.string(),
    sender: v.string(), // "user" or "bot"
  },
  handler: async (ctx, args) => {
    // Validate message not empty
    if (!args.message || args.message.trim().length === 0) {
      throw new Error("Message cannot be empty");
    }

    // Validate sender
    if (args.sender !== "user" && args.sender !== "bot") {
      throw new Error("Sender must be 'user' or 'bot'");
    }

    // Insert message
    const messageId = await ctx.db.insert("chatMessages", {
      sessionId: args.sessionId,
      message: args.message,
      sender: args.sender,
      timestamp: Date.now(),
    });

    return messageId;
  },
});

export const getMessages = query({
  args: {
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("chatMessages")
      .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
      .collect();

    // Sort by timestamp ascending
    messages.sort((a, b) => a.timestamp - b.timestamp);

    return messages;
  },
});
