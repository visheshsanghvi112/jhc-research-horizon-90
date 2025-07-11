
import { motion } from 'framer-motion';

const LogoLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary to-accent flex items-center justify-center z-50">
      <div className="relative">
        {/* Main logo with pulse animation */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1, 0.9, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/lovable-uploads/72b76a7a-0668-4558-8e4b-58623c4cf83d.png" 
            alt="Jai Hind College Logo" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </motion.div>

        {/* Rotating ring around logo */}
        <motion.div
          className="absolute inset-0 border-4 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/3 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-2">JHC 2025</h2>
        <motion.div
          className="flex items-center justify-center space-x-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm md:text-base">Loading</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoLoader;
