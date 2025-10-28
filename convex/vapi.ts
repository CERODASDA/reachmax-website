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

// Helper query to get call by callId (used by HTTP endpoints)
export const getCallByCallId = query({
  args: {
    callId: v.string(),
  },
  handler: async (ctx, args) => {
    const call = await ctx.db
      .query("vapiCalls")
      .withIndex("by_callId", (q) => q.eq("callId", args.callId))
      .first();
    return call;
  },
});

// Helper mutation to create VAPI call (used by HTTP endpoints)
export const createVapiCall = mutation({
  args: {
    callId: v.string(),
    status: v.string(),
    startedAt: v.optional(v.number()),
    endedAt: v.optional(v.number()),
    duration: v.optional(v.number()),
    transcript: v.optional(v.string()),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("vapiCalls", {
      callId: args.callId,
      status: args.status,
      startedAt: args.startedAt,
      endedAt: args.endedAt,
      duration: args.duration,
      transcript: args.transcript,
      metadata: args.metadata,
    });
    return id;
  },
});

// Helper mutation to update VAPI call (used by HTTP endpoints)
export const updateVapiCall = mutation({
  args: {
    callId: v.string(),
    status: v.optional(v.string()),
    startedAt: v.optional(v.number()),
    endedAt: v.optional(v.number()),
    duration: v.optional(v.number()),
    transcript: v.optional(v.string()),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const call = await ctx.db
      .query("vapiCalls")
      .withIndex("by_callId", (q) => q.eq("callId", args.callId))
      .first();

    if (!call) {
      throw new Error("Call not found");
    }

    const updates: any = {};
    if (args.status !== undefined) updates.status = args.status;
    if (args.startedAt !== undefined) updates.startedAt = args.startedAt;
    if (args.endedAt !== undefined) updates.endedAt = args.endedAt;
    if (args.duration !== undefined) updates.duration = args.duration;
    if (args.transcript !== undefined) updates.transcript = args.transcript;
    if (args.metadata !== undefined) updates.metadata = args.metadata;

    await ctx.db.patch(call._id, updates);
    return call._id;
  },
});
