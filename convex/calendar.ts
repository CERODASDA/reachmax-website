import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const bookAppointment = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    company: v.optional(v.string()),
    appointmentDate: v.string(),
    appointmentTime: v.string(),
  },
  handler: async (ctx, args) => {
    // Validation
    if (!args.name || args.name.trim().length === 0) {
      throw new Error("Name is required");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!args.email || !emailRegex.test(args.email)) {
      throw new Error("Valid email is required");
    }

    if (!args.phone || args.phone.trim().length === 0) {
      throw new Error("Phone number is required");
    }

    // Validate ISO date string
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!args.appointmentDate || !dateRegex.test(args.appointmentDate)) {
      throw new Error("Valid appointment date (YYYY-MM-DD) is required");
    }

    // Validate HH:MM time format
    const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    if (!args.appointmentTime || !timeRegex.test(args.appointmentTime)) {
      throw new Error("Valid appointment time (HH:MM) is required");
    }

    // Insert appointment record
    const appointmentId = await ctx.db.insert("appointments", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      company: args.company,
      appointmentDate: args.appointmentDate,
      appointmentTime: args.appointmentTime,
      status: "pending",
      createdAt: Date.now(),
    });

    return appointmentId;
  },
});
