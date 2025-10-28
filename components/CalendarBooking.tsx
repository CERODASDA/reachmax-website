"use client";

import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addDays, isWeekend, format } from "date-fns";
import { Check, Calendar as CalendarIcon } from "lucide-react";

interface CalendarBookingProps {
  trigger: React.ReactNode;
}

export default function CalendarBooking({ trigger }: CalendarBookingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [businessDays, setBusinessDays] = useState<Date[]>([]);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const bookAppointment = useMutation(api.calendar.bookAppointment);

  // Generate business days (next 14 business days)
  useEffect(() => {
    const days: Date[] = [];
    let currentDate = addDays(new Date(), 1); // Start from tomorrow
    let count = 0;

    while (count < 14) {
      if (!isWeekend(currentDate)) {
        days.push(new Date(currentDate));
        count++;
      }
      currentDate = addDays(currentDate, 1);
    }

    setBusinessDays(days);
  }, []);

  // Generate time slots (9:00 - 17:00 in 30-minute intervals)
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`);
    if (hour < 17) {
      timeSlots.push(`${hour.toString().padStart(2, "0")}:30`);
    }
  }

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
    }

    if (!phone || phone.trim().length === 0) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedDate || !selectedTime) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Format date as ISO string (YYYY-MM-DD)
      const appointmentDate = format(selectedDate, "yyyy-MM-dd");

      // Book appointment in Convex
      const appointmentId = await bookAppointment({
        name,
        email,
        phone,
        company: company || undefined,
        appointmentDate,
        appointmentTime: selectedTime,
      });

      // Send webhook to N8N (fire and forget)
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_APPOINTMENT_WEBHOOK_URL;
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            appointmentId,
            name,
            email,
            phone,
            company: company || null,
            appointmentDate,
            appointmentTime: selectedTime,
            bookedAt: Date.now(),
          }),
        }).catch((err) => console.error("Webhook error:", err));
      }

      // Show success state
      setIsSuccess(true);

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        // Reset form after closing
        setTimeout(() => {
          resetForm();
        }, 300);
      }, 3000);
    } catch (error) {
      console.error("Booking error:", error);
      setErrors({ submit: "Failed to book appointment. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Termin buchen</DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Appointment Booked!</h3>
            <p className="text-muted-foreground">
              We'll send you a confirmation email shortly.
            </p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="space-y-6">
                {/* Date Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {businessDays.map((day, index) => {
                      const isSelected =
                        selectedDate &&
                        format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");

                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(day)}
                          className={`p-3 rounded-lg border text-sm transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-foreground border-primary"
                              : "hover:bg-accent hover:border-accent-foreground"
                          }`}
                        >
                          <div className="font-medium">{format(day, "dd")}</div>
                          <div className="text-xs">{format(day, "MMM")}</div>
                        </button>
                      );
                    })}
                  </div>
                  {selectedDate && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected: {format(selectedDate, "MMMM dd, yyyy")}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      const isDisabled = !selectedDate;

                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          disabled={isDisabled}
                          className={`p-3 rounded-lg border text-sm transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                            isSelected
                              ? "bg-primary text-primary-foreground border-primary"
                              : "hover:bg-accent hover:border-accent-foreground"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="flex justify-end pt-4">
                    <Button onClick={handleContinue} size="lg">
                      Continue
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                {/* Summary */}
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Selected:</p>
                      <p className="font-semibold">
                        {selectedDate && format(selectedDate, "MMMM dd, yyyy")} at{" "}
                        {selectedTime}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleBack}>
                      Edit
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@company.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium block mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+49 123 456789"
                      required
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-medium block mb-2">
                      Company (optional)
                    </label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company"
                    />
                  </div>

                  {errors.submit && (
                    <div className="text-sm text-red-500 text-center">
                      {errors.submit}
                    </div>
                  )}

                  <div className="flex gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Booking..." : "Book Appointment"}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
