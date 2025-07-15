
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EnhancedCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const conferenceDate = new Date('2025-11-21T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Hours', value: timeLeft.hours, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'text-red-600', bg: 'bg-red-50' }
  ];

  const conferenceDetails = [
    { icon: Calendar, label: 'Conference Dates', value: '21st-22nd November 2025' },
    { icon: Clock, label: 'Duration', value: '2 Days' },
    { icon: MapPin, label: 'Venue', value: 'Jai Hind College, Mumbai' },
    { icon: Users, label: 'Expected Participants', value: '500+ Attendees' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            ⏰ Conference Countdown
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Time Until JHC 2025</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss out on the most significant research conference of the year
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`text-center ${unit.bg} border-0 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <motion.div
                    className={`text-5xl font-bold ${unit.color} mb-2`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {unit.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Conference Details */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {conferenceDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{detail.label}</h3>
                  <p className="text-sm text-muted-foreground">{detail.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCountdown;
