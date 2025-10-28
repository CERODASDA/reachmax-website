import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getLeads = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    const leads = await ctx.db
      .query("leads")
      .order("desc")
      .take(limit);
    return leads;
  },
});

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    // Count all leads
    const allLeads = await ctx.db.query("leads").collect();
    const totalLeads = allLeads.length;

    // Count all appointments
    const allAppointments = await ctx.db.query("appointments").collect();
    const totalAppointments = allAppointments.length;

    // Count pending appointments
    const pendingAppointments = allAppointments.filter(
      (apt) => apt.status === "pending"
    ).length;

    // Count all VAPI calls
    const allVapiCalls = await ctx.db.query("vapiCalls").collect();
    const totalVapiCalls = allVapiCalls.length;

    // Count unique chat sessions
    const allChatMessages = await ctx.db.query("chatMessages").collect();
    const uniqueSessionIds = new Set(allChatMessages.map((msg) => msg.sessionId));
    const totalChatSessions = uniqueSessionIds.size;

    return {
      totalLeads,
      totalAppointments,
      pendingAppointments,
      totalVapiCalls,
      totalChatSessions,
    };
  },
});

export const getRecentActivity = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 20;

    // Get recent leads
    const recentLeads = await ctx.db
      .query("leads")
      .order("desc")
      .take(limit);

    // Get recent appointments
    const recentAppointments = await ctx.db
      .query("appointments")
      .order("desc")
      .take(limit);

    // Get recent VAPI calls
    const recentVapiCalls = await ctx.db.query("vapiCalls").collect();

    // Combine and format all activity
    const activity: Array<{
      type: string;
      data: any;
      timestamp: number;
    }> = [];

    recentLeads.forEach((lead) => {
      activity.push({
        type: "lead",
        data: lead,
        timestamp: lead.createdAt,
      });
    });

    recentAppointments.forEach((apt) => {
      activity.push({
        type: "appointment",
        data: apt,
        timestamp: apt.createdAt,
      });
    });

    recentVapiCalls.forEach((call) => {
      activity.push({
        type: "vapi_call",
        data: call,
        timestamp: call.startedAt ?? 0,
      });
    });

    // Sort by timestamp descending and limit
    activity.sort((a, b) => b.timestamp - a.timestamp);
    return activity.slice(0, limit);
  },
});

export const getAppointments = query({
  args: {
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let appointments = await ctx.db.query("appointments").collect();

    // Filter by status if provided
    if (args.status) {
      appointments = appointments.filter((apt) => apt.status === args.status);
    }

    // Sort by appointmentDate ascending
    appointments.sort((a, b) => {
      if (a.appointmentDate < b.appointmentDate) return -1;
      if (a.appointmentDate > b.appointmentDate) return 1;
      return 0;
    });

    return appointments;
  },
});

export const getVapiCalls = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    const calls = await ctx.db.query("vapiCalls").collect();

    // Sort by startedAt descending
    calls.sort((a, b) => {
      const aTime = a.startedAt ?? 0;
      const bTime = b.startedAt ?? 0;
      return bTime - aTime;
    });

    return calls.slice(0, limit);
  },
});
