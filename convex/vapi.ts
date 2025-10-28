import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const startVapiCall = mutation({
  args: {
    callId: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("vapiCalls", {
      callId: args.callId,
      status: "started",
      startedAt: Date.now(),
    });
    return id;
  },
});

export const endVapiCall = mutation({
  args: {
    callId: v.string(),
    duration: v.optional(v.number()),
    transcript: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Find the call record
    const call = await ctx.db
      .query("vapiCalls")
      .withIndex("by_callId", (q) => q.eq("callId", args.callId))
      .first();

    if (!call) {
      throw new Error("Call not found");
    }

    // Update the call record
    await ctx.db.patch(call._id, {
      status: "ended",
      endedAt: Date.now(),
      duration: args.duration,
      transcript: args.transcript,
    });

    return call._id;
  },
});

export const failVapiCall = mutation({
  args: {
    callId: v.string(),
  },
  handler: async (ctx, args) => {
    // Find the call record
    const call = await ctx.db
      .query("vapiCalls")
      .withIndex("by_callId", (q) => q.eq("callId", args.callId))
      .first();

    if (!call) {
      throw new Error("Call not found");
    }

    // Update the call status to failed
    await ctx.db.patch(call._id, {
      status: "failed",
    });

    return call._id;
  },
});
