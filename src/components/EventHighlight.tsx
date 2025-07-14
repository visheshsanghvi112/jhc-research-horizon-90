
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const EventHighlight = () => {
  const scrollToRegistration = () => {
    const element = document.querySelector('#registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    "Paper Presentations",
    "Keynote Sessions", 
    "AI/ML Demos",
    "Student Research Panels",
    "Poster Exhibition"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/95 to-accent/90">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop&crop=center"
          alt="Research Conference Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/85 backdrop-blur-[2px]"></div>
      </div>

      {/* Left Sidebar - Event Highlights */}
      <div className="absolute left-0 top-0 h-full hidden lg:flex">
        <motion.div 
          className="bg-white/10 backdrop-blur-md border-r border-white/20 h-full flex flex-col justify-center px-6 py-12 min-w-[280px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="writing-mode-vertical text-2xl font-bold text-white mb-8 transform rotate-180">
            EVENT HIGHLIGHTS
          </div>
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="text-white/90 text-sm font-medium py-2 px-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                • {highlight}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-white font-bold leading-tight">
              <div className="text-4xl md:text-6xl lg:text-7xl mb-2">NATIONAL</div>
              <div className="text-4xl md:text-6xl lg:text-7xl mb-2">RESEARCH CONFERENCE</div>
              <div className="text-5xl md:text-7xl lg:text-8xl text-accent">2025</div>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-white/90 italic font-light max-w-3xl mx-auto leading-relaxed">
              "Empowering Innovation through Generative AI, Data Science, and Analytics"
            </p>
            <p className="text-lg md:text-xl text-white/80 mt-4 font-medium">
              Organized by the Department of Big Data Analytics, Jai Hind College
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button
              onClick={scrollToRegistration}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-red-600/25 transition-all duration-300 group"
              size="lg"
            >
              Explore Events
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-20 right-20 w-48 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transform rotate-3"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05, rotate: 6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
            alt="Research Setting"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-32 w-40 h-40 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transform -rotate-6"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -6 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ scale: 1.05, rotate: -9 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop"
            alt="Programming Code"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-36 h-24 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden transform rotate-12"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.05, rotate: 15 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
            alt="Conference Display"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Mobile Event Highlights */}
      <div className="absolute bottom-8 left-4 right-4 lg:hidden">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-white font-semibold text-sm mb-3">Event Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <span
                key={highlight}
                className="text-xs text-white/90 bg-white/10 px-2 py-1 rounded border border-white/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-8 bg-white/30"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventHighlight;
