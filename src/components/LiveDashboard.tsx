
import { motion } from 'framer-motion';
import { Users, FileText, Calendar, Trophy, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

const LiveDashboard = () => {
  const [stats, setStats] = useState({
    registrations: 247,
    abstracts: 89,
    speakers: 12,
    countries: 8,
    papers: 156,
    workshops: 6
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        registrations: prev.registrations + Math.floor(Math.random() * 3),
        abstracts: prev.abstracts + Math.floor(Math.random() * 2),
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const dashboardStats = [
    {
      title: "Total Registrations",
      value: stats.registrations,
      target: 500,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+12%"
    },
    {
      title: "Abstract Submissions",
      value: stats.abstracts,
      target: 200,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+8%"
    },
    {
      title: "Confirmed Speakers",
      value: stats.speakers,
      target: 15,
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "+2"
    },
    {
      title: "Participating Countries",
      value: stats.countries,
      target: 12,
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      change: "+1"
    },
    {
      title: "Research Papers",
      value: stats.papers,
      target: 250,
      icon: Trophy,
      color: "text-red-600",
      bgColor: "bg-red-50",
      change: "+15%"
    },
    {
      title: "Workshop Sessions",
      value: stats.workshops,
      target: 8,
      icon: TrendingUp,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      change: "+1"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📊 Live Conference Dashboard
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Real-Time Conference Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track live participation, submissions, and engagement as we build towards JHC 2025
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-3xl font-bold text-primary">
                        {stat.value}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{stat.value}/{stat.target}</span>
                      </div>
                      <Progress 
                        value={(stat.value / stat.target) * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Live Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Live Activity Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">New registration from Mumbai, India</span>
                  </div>
                  <span className="text-xs text-muted-foreground">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Abstract submitted: "AI in Healthcare Applications"</span>
                  </div>
                  <span className="text-xs text-muted-foreground">5 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">International participant joined from Singapore</span>
                  </div>
                  <span className="text-xs text-muted-foreground">8 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDashboard;
