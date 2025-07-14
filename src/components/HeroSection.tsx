
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-accent/15 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Research Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300"
          >
            <Database className="mr-2 h-4 w-4" />
            MSc Big Data Analytics Research Project 2025
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Big Data Analytics
            <br />
            <span className="bg-gradient-to-r from-accent via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Research Showcase
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive MSc research project exploring data-driven insights, predictive analytics, 
            and advanced statistical methodologies at <strong>Jai Hind College</strong>
          </motion.p>

          {/* Research Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <BarChart3 className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Data Visualization</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <TrendingUp className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Predictive Analytics</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
              <Brain className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Machine Learning</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('about')}
            >
              Explore Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Researcher
            </Button>
          </motion.div>

          {/* Student Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 text-sm"
          >
            <p className="mb-2">Research conducted by</p>
            <p className="font-semibold text-lg">Vishesh Sanghvi</p>
            <p className="text-white/70">MSc Big Data Analytics Student</p>
            <p className="text-white/70">Jai Hind College (Empowered Autonomous)</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
