import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";

const http = httpRouter();

// POST /webhooks/vapi - Receive VAPI call webhook data
http.route({
  path: "/webhooks/vapi",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { callId, status, startedAt, endedAt, duration, transcript, metadata } = body;

      // Validate callId
      if (!callId) {
        return new Response(JSON.stringify({ error: "callId is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Check if call already exists
      const existingCall = await ctx.runQuery(api.vapi.getCallByCallId, { callId });

      let id;
      if (existingCall) {
        // Update existing call
        await ctx.runMutation(api.vapi.updateVapiCall, {
          callId,
          status,
          startedAt,
          endedAt,
          duration,
          transcript,
          metadata,
        });
        id = existingCall._id;
      } else {
        // Insert new call
        id = await ctx.runMutation(api.vapi.createVapiCall, {
          callId,
          status,
          startedAt,
          endedAt,
          duration,
          transcript,
          metadata,
        });
      }

      return new Response(JSON.stringify({ success: true, id: id.toString() }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }),
});

// POST /webhooks/appointment-confirmed - Receive appointment confirmation
http.route({
  path: "/webhooks/appointment-confirmed",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { appointmentId, status } = body;

      // Validate required fields
      if (!appointmentId) {
        return new Response(JSON.stringify({ error: "appointmentId is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      if (!status) {
        return new Response(JSON.stringify({ error: "status is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Validate status value
      const validStatuses = ["pending", "confirmed", "cancelled", "completed"];
      if (!validStatuses.includes(status)) {
        return new Response(JSON.stringify({ error: "Invalid status value" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Update appointment status
      await ctx.runMutation(api.admin.updateAppointmentStatus, {
        appointmentId,
        status,
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }),
});

// POST /webhooks/lead - Receive lead data from external sources
http.route({
  path: "/webhooks/lead",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const { name, email, phone, company, message, source } = body;

      // Validate required fields
      if (!name || !email || !source) {
        return new Response(
          JSON.stringify({ error: "name, email, and source are required" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }

      // Insert lead
      const id = await ctx.runMutation(api.admin.createLead, {
        name,
        email,
        phone,
        company,
        message,
        source,
      });

      return new Response(JSON.stringify({ success: true, id: id.toString() }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }),
});

export default http;
