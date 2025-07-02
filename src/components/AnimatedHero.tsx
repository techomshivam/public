import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnimatedHero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50" data-id="0tdkckvw0" data-path="src/components/AnimatedHero.tsx">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" data-id="jctiwigzk" data-path="src/components/AnimatedHero.tsx">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 text-purple-400"
          variants={sparkleVariants}
          animate="animate" data-id="f7nm3kvwk" data-path="src/components/AnimatedHero.tsx">

          <Sparkles data-id="ooh6645pq" data-path="src/components/AnimatedHero.tsx" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 text-indigo-400"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '0.5s' }} data-id="5t75di5bu" data-path="src/components/AnimatedHero.tsx">

          <Star data-id="qdm0pzyr1" data-path="src/components/AnimatedHero.tsx" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-5 h-5 text-pink-400"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '1s' }} data-id="pmhmghn3x" data-path="src/components/AnimatedHero.tsx">

          <Sparkles data-id="p8bth7wcw" data-path="src/components/AnimatedHero.tsx" />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-10 w-4 h-4 text-blue-400"
          variants={sparkleVariants}
          animate="animate"
          style={{ animationDelay: '1.5s' }} data-id="2i35wekli" data-path="src/components/AnimatedHero.tsx">

          <Star data-id="7o372z1xz" data-path="src/components/AnimatedHero.tsx" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-id="5rmtprk3c" data-path="src/components/AnimatedHero.tsx">
        <div className="text-center max-w-4xl mx-auto" data-id="7umay0544" data-path="src/components/AnimatedHero.tsx">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8" data-id="2tz9ob0dk" data-path="src/components/AnimatedHero.tsx">

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight" data-id="5er0vkigd" data-path="src/components/AnimatedHero.tsx">
              Beautiful
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight" data-id="wri9hn8jn" data-path="src/components/AnimatedHero.tsx">
              Website
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" data-id="p9nfcyoyg" data-path="src/components/AnimatedHero.tsx">

            Experience the perfect blend of modern design, stunning visuals, and seamless functionality. 
            Built with cutting-edge technology for the future.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-id="7l8kvx5rz" data-path="src/components/AnimatedHero.tsx">

            <Button
              size="lg"
              onClick={() => navigate('/portal')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-id="c5tpqsutr" data-path="src/components/AnimatedHero.tsx">

              Explore Portal
              <ArrowRight className="ml-2 w-5 h-5" data-id="s80hgwh5h" data-path="src/components/AnimatedHero.tsx" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/register')}
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-id="go3br4m3d" data-path="src/components/AnimatedHero.tsx">

              Get Started
            </Button>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" data-id="rv36c3xwd" data-path="src/components/AnimatedHero.tsx">

            {[
            { title: "Modern Design", desc: "Beautiful, clean interfaces", color: "from-blue-400 to-blue-600" },
            { title: "Fast Performance", desc: "Lightning-fast loading", color: "from-purple-400 to-purple-600" },
            { title: "Responsive", desc: "Perfect on all devices", color: "from-pink-400 to-pink-600" }].
            map((feature, index) =>
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/20" data-id="f650a0r92" data-path="src/components/AnimatedHero.tsx">

                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-4 mx-auto`} data-id="tu4fkkop9" data-path="src/components/AnimatedHero.tsx"></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="lvsvs4nbk" data-path="src/components/AnimatedHero.tsx">{feature.title}</h3>
                <p className="text-gray-600" data-id="nzl9ppo89" data-path="src/components/AnimatedHero.tsx">{feature.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="m0l732bn0" data-path="src/components/AnimatedHero.tsx" />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} data-id="5o7i4cpw2" data-path="src/components/AnimatedHero.tsx" />

    </section>);

};

export default AnimatedHero;