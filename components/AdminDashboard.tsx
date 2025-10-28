"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Users,
  Calendar,
  Phone,
  MessageCircle,
  Clock,
  LogOut,
} from "lucide-react";
import { format } from "date-fns";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [appointmentFilter, setAppointmentFilter] = useState<string | undefined>();

  // Fetch data using Convex queries
  const stats = useQuery(api.admin.getDashboardStats);
  const leads = useQuery(api.admin.getLeads, { limit: 50 });
  const appointments = useQuery(api.admin.getAppointments, {
    status: appointmentFilter,
  });
  const vapiCalls = useQuery(api.admin.getVapiCalls, { limit: 50 });
  const recentActivity = useQuery(api.admin.getRecentActivity, { limit: 50 });

  const formatTimestamp = (timestamp: number) => {
    return format(new Date(timestamp), "MMM dd, yyyy HH:mm");
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return "N/A";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      confirmed: "bg-green-500/10 text-green-500 border-green-500/20",
      cancelled: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      completed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      started: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      ended: "bg-green-500/10 text-green-500 border-green-500/20",
      failed: "bg-red-500/10 text-red-500 border-red-500/20",
    };

    return (
      <Badge className={variants[status] || ""} variant="outline">
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">ReachMax Admin Dashboard</h1>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="vapi">VAPI Calls</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {!stats ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i} className="p-6">
                    <Skeleton className="h-12 w-full" />
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Leads</p>
                      <p className="text-3xl font-bold mt-2">{stats.totalLeads}</p>
                    </div>
                    <Users className="w-10 h-10 text-blue-500" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Appointments
                      </p>
                      <p className="text-3xl font-bold mt-2">
                        {stats.totalAppointments}
                      </p>
                    </div>
                    <Calendar className="w-10 h-10 text-green-500" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Pending Appointments
                      </p>
                      <p className="text-3xl font-bold mt-2">
                        {stats.pendingAppointments}
                      </p>
                    </div>
                    <Clock className="w-10 h-10 text-yellow-500" />
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total VAPI Calls
                      </p>
                      <p className="text-3xl font-bold mt-2">
                        {stats.totalVapiCalls}
                      </p>
                    </div>
                    <Phone className="w-10 h-10 text-purple-500" />
                  </div>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Leads Tab */}
          <TabsContent value="leads">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">All Leads</h2>
                {!leads ? (
                  <Skeleton className="h-64 w-full" />
                ) : leads.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No leads yet
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Created At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leads.map((lead) => (
                        <TableRow key={lead._id}>
                          <TableCell className="font-medium">{lead.name}</TableCell>
                          <TableCell>{lead.email}</TableCell>
                          <TableCell>{lead.phone || "N/A"}</TableCell>
                          <TableCell>{lead.company || "N/A"}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{lead.source}</Badge>
                          </TableCell>
                          <TableCell>{formatTimestamp(lead.createdAt)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* VAPI Calls Tab */}
          <TabsContent value="vapi">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">VAPI Call Logs</h2>
                {!vapiCalls ? (
                  <Skeleton className="h-64 w-full" />
                ) : vapiCalls.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No VAPI calls yet
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Call ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Started At</TableHead>
                        <TableHead>Ended At</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Transcript</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vapiCalls.map((call) => (
                        <TableRow key={call._id}>
                          <TableCell className="font-mono text-sm">
                            {call.callId.substring(0, 8)}...
                          </TableCell>
                          <TableCell>{getStatusBadge(call.status)}</TableCell>
                          <TableCell>
                            {call.startedAt
                              ? formatTimestamp(call.startedAt)
                              : "N/A"}
                          </TableCell>
                          <TableCell>
                            {call.endedAt ? formatTimestamp(call.endedAt) : "N/A"}
                          </TableCell>
                          <TableCell>{formatDuration(call.duration)}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {call.transcript
                              ? call.transcript.substring(0, 50) + "..."
                              : "N/A"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Appointments</h2>
                  <div className="flex gap-2">
                    <Button
                      variant={!appointmentFilter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAppointmentFilter(undefined)}
                    >
                      All
                    </Button>
                    <Button
                      variant={appointmentFilter === "pending" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setAppointmentFilter("pending")}
                    >
                      Pending
                    </Button>
                    <Button
                      variant={
                        appointmentFilter === "confirmed" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setAppointmentFilter("confirmed")}
                    >
                      Confirmed
                    </Button>
                    <Button
                      variant={
                        appointmentFilter === "cancelled" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setAppointmentFilter("cancelled")}
                    >
                      Cancelled
                    </Button>
                    <Button
                      variant={
                        appointmentFilter === "completed" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setAppointmentFilter("completed")}
                    >
                      Completed
                    </Button>
                  </div>
                </div>

                {!appointments ? (
                  <Skeleton className="h-64 w-full" />
                ) : appointments.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No appointments yet
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.map((apt) => (
                        <TableRow key={apt._id}>
                          <TableCell className="font-medium">{apt.name}</TableCell>
                          <TableCell>{apt.email}</TableCell>
                          <TableCell>{apt.phone}</TableCell>
                          <TableCell>{apt.company || "N/A"}</TableCell>
                          <TableCell>{apt.appointmentDate}</TableCell>
                          <TableCell>{apt.appointmentTime}</TableCell>
                          <TableCell>{getStatusBadge(apt.status)}</TableCell>
                          <TableCell>{formatTimestamp(apt.createdAt)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </div>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                {!recentActivity ? (
                  <Skeleton className="h-64 w-full" />
                ) : recentActivity.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No recent activity
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentActivity.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                      >
                        <div className="mt-1">
                          {item.type === "lead" && (
                            <Users className="w-5 h-5 text-blue-500" />
                          )}
                          {item.type === "appointment" && (
                            <Calendar className="w-5 h-5 text-green-500" />
                          )}
                          {item.type === "vapi_call" && (
                            <Phone className="w-5 h-5 text-purple-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">
                              {item.type === "lead" &&
                                `New lead from ${item.data.name}`}
                              {item.type === "appointment" &&
                                `Appointment booked by ${item.data.name}`}
                              {item.type === "vapi_call" &&
                                `VAPI call ${item.data.status}`}
                            </p>
                            <span className="text-sm text-muted-foreground">
                              {formatTimestamp(item.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.type === "lead" && item.data.email}
                            {item.type === "appointment" &&
                              `${item.data.appointmentDate} at ${item.data.appointmentTime}`}
                            {item.type === "vapi_call" && `Call ID: ${item.data.callId}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
