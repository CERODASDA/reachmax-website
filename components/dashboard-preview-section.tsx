"use client"

import { Card } from "@/components/ui/card"
import { Phone, Target, Calendar, TrendingUp, Users, Clock, ArrowUp, ArrowDown, Volume2, CheckCircle, AlertCircle, Play, Zap } from "lucide-react"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

const performanceData = [
  { month: "Jan", leads: 8, appointments: 2, revenue: 0.3 },
  { month: "Feb", leads: 12, appointments: 3, revenue: 0.5 },
  { month: "Mar", leads: 18, appointments: 5, revenue: 0.8 },
  { month: "Apr", leads: 25, appointments: 7, revenue: 1.2 },
  { month: "Mai", leads: 32, appointments: 9, revenue: 1.6 },
  { month: "Jun", leads: 41, appointments: 12, revenue: 2.1 },
]

const stats = [
  {
    icon: Phone,
    value: "23",
    label: "Anrufe heute",
    trend: "+18%",
    isPositive: true,
    comparison: "vs. gestern",
    color: "#FFD700",
  },
  {
    icon: Target,
    value: "12",
    label: "Solar-Leads",
    trend: "+25%",
    isPositive: true,
    comparison: "vs. letzte Woche",
    color: "#10B981",
  },
  {
    icon: Calendar,
    value: "4",
    label: "Beratungstermine",
    trend: "+33%",
    isPositive: true,
    comparison: "vs. letzte Woche",
    color: "#3B82F6",
  },
  {
    icon: TrendingUp,
    value: "€1.2M",
    label: "Pipeline Wert",
    trend: "+40%",
    isPositive: true,
    comparison: "vs. letzter Monat",
    color: "#8B5CF6",
  },
]

const recentCalls = [
  {
    id: "lead_001",
    name: "Michael Schmidt",
    company: "Familie Schmidt",
    time: "14:30",
    duration: "4:15",
    status: "completed",
    score: 88,
    industry: "Solar-Interessent"
  },
  {
    id: "lead_002", 
    name: "Anna Müller",
    company: "Müller Haushalt",
    time: "15:45",
    duration: "3:42",
    status: "completed",
    score: 92,
    industry: "PV-Anlage Interessent"
  },
  {
    id: "lead_003",
    name: "Thomas Weber",
    company: "Weber Familie",
    time: "16:20",
    duration: "2:18",
    status: "no-answer",
    score: 65,
    industry: "Speicher-Interessent"
  }
]

export function DashboardPreviewSection() {
  const [isLive, setIsLive] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    calls: 0,
    leads: 0,
    appointments: 0,
    revenue: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start count-up animation
          animateNumbers()
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('dashboard')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const animateNumbers = () => {
    const targets = {
      calls: 23,
      leads: 12,
      appointments: 4,
      revenue: 1.2
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      
      setAnimatedStats({
        calls: Math.floor(targets.calls * progress),
        leads: Math.floor(targets.leads * progress),
        appointments: Math.floor(targets.appointments * progress),
        revenue: Math.round(targets.revenue * progress * 10) / 10
      })

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedStats(targets)
      }
    }, stepDuration)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'no-answer': return 'bg-yellow-500'
      case 'failed': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Erfolgreich'
      case 'no-answer': return 'Keine Antwort'
      case 'failed': return 'Fehlgeschlagen'
      default: return 'Unbekannt'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500'
    if (score >= 60) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <section id="dashboard" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-sm font-medium text-muted-foreground">
                {isLive ? 'Live Dashboard' : 'Demo Modus'}
              </span>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <Zap className="w-3 h-3" />
              VAPI AI Powered
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">Personalisiertes Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behalten Sie den Überblick über alle Ihre Leads, Termine und den Erfolg Ihres AI Voice Agents
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                 <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/30 hover:border-[#FFD700]/50 hover:shadow-2xl hover:shadow-[#FFD700]/10 transition-all duration-300 group hover:scale-105">
                   <div className="flex items-center justify-between mb-4">
                     <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                       <Phone className="w-7 h-7 text-[#FFD700]" />
                     </div>
                     <div className="flex items-center gap-1 text-sm bg-green-500/10 px-2 py-1 rounded-full">
                       <ArrowUp className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-green-500">+23%</span>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-4xl font-black text-foreground group-hover:text-[#FFD700] transition-colors duration-300">{animatedStats.calls}</p>
                     <p className="text-sm font-semibold text-muted-foreground">Anrufe heute</p>
                     <p className="text-xs text-muted-foreground/70">vs. gestern</p>
                   </div>
                 </Card>

                 <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/30 hover:border-[#FFD700]/50 hover:shadow-2xl hover:shadow-[#FFD700]/10 transition-all duration-300 group hover:scale-105">
                   <div className="flex items-center justify-between mb-4">
                     <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                       <Target className="w-7 h-7 text-[#FFD700]" />
                     </div>
                     <div className="flex items-center gap-1 text-sm bg-green-500/10 px-2 py-1 rounded-full">
                       <ArrowUp className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-green-500">+25%</span>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-4xl font-black text-foreground group-hover:text-[#FFD700] transition-colors duration-300">{animatedStats.leads}</p>
                     <p className="text-sm font-semibold text-muted-foreground">Solar-Leads</p>
                     <p className="text-xs text-muted-foreground/70">vs. letzte Woche</p>
                   </div>
                 </Card>

                 <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/30 hover:border-[#FFD700]/50 hover:shadow-2xl hover:shadow-[#FFD700]/10 transition-all duration-300 group hover:scale-105">
                   <div className="flex items-center justify-between mb-4">
                     <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                       <Calendar className="w-7 h-7 text-[#FFD700]" />
                     </div>
                     <div className="flex items-center gap-1 text-sm bg-green-500/10 px-2 py-1 rounded-full">
                       <ArrowUp className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-green-500">+33%</span>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-4xl font-black text-foreground group-hover:text-[#FFD700] transition-colors duration-300">{animatedStats.appointments}</p>
                     <p className="text-sm font-semibold text-muted-foreground">Beratungstermine</p>
                     <p className="text-xs text-muted-foreground/70">vs. letzte Woche</p>
                   </div>
                 </Card>

                 <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-border/30 hover:border-[#FFD700]/50 hover:shadow-2xl hover:shadow-[#FFD700]/10 transition-all duration-300 group hover:scale-105">
                   <div className="flex items-center justify-between mb-4">
                     <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                       <TrendingUp className="w-7 h-7 text-[#FFD700]" />
                     </div>
                     <div className="flex items-center gap-1 text-sm bg-green-500/10 px-2 py-1 rounded-full">
                       <ArrowUp className="w-4 h-4 text-green-500" />
                       <span className="font-bold text-green-500">+40%</span>
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-4xl font-black text-foreground group-hover:text-[#FFD700] transition-colors duration-300">€{animatedStats.revenue}M</p>
                     <p className="text-sm font-semibold text-muted-foreground">Pipeline Wert</p>
                     <p className="text-xs text-muted-foreground/70">vs. letzter Monat</p>
                   </div>
                 </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professional Growth Chart */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-2 border-slate-200 dark:border-slate-700">
                     <div className="flex items-center justify-between mb-8">
                       <div>
                         <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Solar-Unternehmen Erfolg</h3>
                         <p className="text-slate-600 dark:text-slate-400 mt-1">€2.1M Pipeline durch ReachMax in 6 Monaten</p>
                       </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-700 dark:text-green-400">Live</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {currentTime.toLocaleTimeString('de-DE')}
                    </p>
                  </div>
                </div>
              </div>
              
                     <ChartContainer
                       config={{
                         leads: {
                           label: "Solar-Leads",
                           color: "#FFD700",
                         },
                         appointments: {
                           label: "Beratungstermine", 
                           color: "#10B981",
                         },
                         revenue: {
                           label: "Pipeline Wert (Mio €)",
                           color: "#3B82F6",
                         },
                       }}
                       className="h-[400px] w-full"
                     >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="leadsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FFD700" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="appointmentsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.5} />
                    <XAxis 
                      dataKey="month" 
                      stroke="#64748B"
                      fontSize={14}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#64748B"
                      fontSize={14}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stackId="1"
                      stroke="#FFD700"
                      strokeWidth={3}
                      fill="url(#leadsGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="appointments"
                      stackId="1"
                      stroke="#10B981"
                      strokeWidth={3}
                      fill="url(#appointmentsGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      fill="url(#revenueGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>

              {/* Growth Stats */}
               <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                 <div className="text-center">
                   <div className="text-2xl font-bold text-[#FFD700]">+413%</div>
                   <div className="text-sm text-slate-600 dark:text-slate-400">Solar-Leads Wachstum</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-bold text-[#10B981]">+500%</div>
                   <div className="text-sm text-slate-600 dark:text-slate-400">Beratungstermine Wachstum</div>
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-bold text-[#3B82F6]">+600%</div>
                   <div className="text-sm text-slate-600 dark:text-slate-400">Pipeline Wachstum</div>
                 </div>
               </div>
            </Card>
          </div>

          {/* Recent Calls */}
          <div>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-border/50 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Neueste Leads</h3>
              <Badge variant="outline" className="flex items-center gap-1">
                <Play className="w-3 h-3" />
                Demo
              </Badge>
            </div>
              
              <div className="space-y-4">
                {recentCalls.map((call) => (
                  <div key={call.id} className="p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(call.status)}`} />
                        <span className="text-sm font-medium text-foreground">{call.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{call.time}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{call.company}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {call.industry}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{call.duration}</span>
                          <span className={`text-xs font-semibold ${getScoreColor(call.score)}`}>
                            {call.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Ihr Dashboard wird automatisch aktualisiert
                  </p>
                  <Badge variant="outline" className="text-xs">
                    AI Voice Agent aktiv
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}