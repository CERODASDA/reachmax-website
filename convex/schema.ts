import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    message: v.optional(v.string()),
    source: v.string(), // "contact_form", "calendar", "chat", "phone"
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),

  appointments: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    appointmentDate: v.string(), // ISO date string
    appointmentTime: v.string(), // "HH:MM" format
    status: v.string(), // "pending", "confirmed", "cancelled", "completed"
    createdAt: v.number(),
  })
    .index("by_appointmentDate", ["appointmentDate"])
    .index("by_createdAt", ["createdAt"]),

  vapiCalls: defineTable({
    callId: v.string(),
    startedAt: v.optional(v.number()),
    endedAt: v.optional(v.number()),
    duration: v.optional(v.number()), // seconds
    status: v.string(), // "started", "ended", "failed"
    transcript: v.optional(v.string()),
    metadata: v.optional(v.any()),
  }).index("by_callId", ["callId"]),

  chatMessages: defineTable({
    sessionId: v.string(),
    message: v.string(),
    sender: v.string(), // "user", "bot"
    timestamp: v.number(),
  }).index("by_sessionId", ["sessionId"]),
});
