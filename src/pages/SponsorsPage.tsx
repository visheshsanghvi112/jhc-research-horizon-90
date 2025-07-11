import { motion } from 'framer-motion';
import { Clock, Star, Sparkles, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SponsorsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  };

  const floatingTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  const sponsorTiers = [
    {
      name: "Platinum Sponsors",
      icon: Star,
      color: "text-yellow-400",
      description: "Premier partnership opportunities"
    },
    {
      name: "Gold Sponsors", 
      icon: Building2,
      color: "text-yellow-500",
      description: "Strategic conference partners"
    },
    {
      name: "Silver Sponsors",
      icon: Sparkles,
      color: "text-gray-400", 
      description: "Supporting academic excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <motion.div
                animate={floatingAnimation}
                transition={floatingTransition}
                className="inline-block"
              >
                <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 sm:mb-6">
                Coming Soon
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-4">
                We're preparing an amazing lineup of sponsors for JHC 2025
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8">
                <motion.div
                  className="flex items-center justify-center space-x-2 text-accent"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="h-5 w-5" />
                  <span className="text-lg font-medium">Sponsorship opportunities will be announced soon!</span>
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              </div>

              <motion.p 
                className="text-lg text-foreground/80 leading-relaxed"
                variants={itemVariants}
              >
                Join us as a sponsor and be part of India's premier research conference on 
                <span className="text-primary font-semibold"> Generative AI, Data Science, and Analytics</span>. 
                Connect with leading researchers, students, and industry professionals.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
            >
              {sponsorTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <tier.icon className={`h-8 w-8 ${tier.color}`} />
                      </div>
                      <CardTitle className="text-xl text-foreground">{tier.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">{tier.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 mx-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 text-center">Interested in Sponsoring?</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Get early access to sponsorship packages and partnership opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                >
                  Contact Us for Partnership
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorsPage;