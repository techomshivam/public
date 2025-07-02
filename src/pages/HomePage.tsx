import React from 'react';
import ModernNavigation from '@/components/ModernNavigation';
import AnimatedHero from '@/components/AnimatedHero';
import FeatureShowcase from '@/components/FeatureShowcase';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white" data-id="chqmy13h2" data-path="src/pages/HomePage.tsx">
      <ModernNavigation data-id="fqlzzv69g" data-path="src/pages/HomePage.tsx" />
      
      {/* Hero Section */}
      <AnimatedHero data-id="1ye9cgdhw" data-path="src/pages/HomePage.tsx" />
      
      {/* Features Section */}
      <FeatureShowcase data-id="2ozzvj629" data-path="src/pages/HomePage.tsx" />
      
      {/* Stats Section */}
      <StatsSection data-id="odrsek8su" data-path="src/pages/HomePage.tsx" />
      
      {/* Testimonials Section */}
      <TestimonialsSection data-id="kpvvx18cg" data-path="src/pages/HomePage.tsx" />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" data-id="9gqerae1m" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="spi7brawp" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} data-id="rre9ax8m0" data-path="src/pages/HomePage.tsx">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="5b7kbydfm" data-path="src/pages/HomePage.tsx">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" data-id="q8y4bs80e" data-path="src/pages/HomePage.tsx">
              Join thousands of users who have already discovered the power of our platform. 
              Start your journey today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="t7298bwfc" data-path="src/pages/HomePage.tsx">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-id="z8a16vuhx" data-path="src/pages/HomePage.tsx">

                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/portal')}
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full" data-id="4ez27k191" data-path="src/pages/HomePage.tsx">

                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" data-id="dmidhw0cq" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-id="fmqf6dmy2" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="ukwhl68bb" data-path="src/pages/HomePage.tsx">
            {/* Logo and Description */}
            <div className="md:col-span-2" data-id="ij4jzzlbz" data-path="src/pages/HomePage.tsx">
              <div className="flex items-center space-x-3 mb-4" data-id="0jft31ki8" data-path="src/pages/HomePage.tsx">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center" data-id="9h99ktimr" data-path="src/pages/HomePage.tsx">
                  <Search className="w-6 h-6 text-white" data-id="kql0gukrk" data-path="src/pages/HomePage.tsx" />
                </div>
                <h3 className="text-2xl font-bold" data-id="0ie895ix1" data-path="src/pages/HomePage.tsx">FindIt</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md" data-id="y1qeyt9fo" data-path="src/pages/HomePage.tsx">
                The ultimate platform for connecting, discovering, and managing your digital experience. 
                Built with modern technology for the future.
              </p>
              <div className="flex space-x-4" data-id="84hdvxv1u" data-path="src/pages/HomePage.tsx">
                {/* Social Media Links */}
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer" data-id="v7463van1" data-path="src/pages/HomePage.tsx">
                  <span className="text-sm font-semibold" data-id="67cv8sfxq" data-path="src/pages/HomePage.tsx">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer" data-id="xvdhlfq4h" data-path="src/pages/HomePage.tsx">
                  <span className="text-sm font-semibold" data-id="w3yqju21a" data-path="src/pages/HomePage.tsx">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer" data-id="3l8nq39qh" data-path="src/pages/HomePage.tsx">
                  <span className="text-sm font-semibold" data-id="3wnwzqpkm" data-path="src/pages/HomePage.tsx">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div data-id="psbk3eqxv" data-path="src/pages/HomePage.tsx">
              <h4 className="text-lg font-semibold mb-4" data-id="b8x29awly" data-path="src/pages/HomePage.tsx">Quick Links</h4>
              <ul className="space-y-2" data-id="l6z85iqsv" data-path="src/pages/HomePage.tsx">
                {['Home', 'Portal', 'Report', 'Chat'].map((link) =>
                <li key={link} data-id="6wxhnefrk" data-path="src/pages/HomePage.tsx">
                    <button
                    onClick={() => navigate(link === 'Home' ? '/' : `/${link.toLowerCase()}`)}
                    className="text-gray-400 hover:text-white transition-colors" data-id="6e7lm4kvq" data-path="src/pages/HomePage.tsx">

                      {link}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Support */}
            <div data-id="yps60xb6r" data-path="src/pages/HomePage.tsx">
              <h4 className="text-lg font-semibold mb-4" data-id="34au43y1x" data-path="src/pages/HomePage.tsx">Support</h4>
              <ul className="space-y-2" data-id="get4pv23v" data-path="src/pages/HomePage.tsx">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link) =>
                <li key={link} data-id="y12on3a5x" data-path="src/pages/HomePage.tsx">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors" data-id="pzoik58y0" data-path="src/pages/HomePage.tsx">
                      {link}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center" data-id="y5s2r15t1" data-path="src/pages/HomePage.tsx">
            <p className="text-gray-400" data-id="u3tns0jan" data-path="src/pages/HomePage.tsx">
              © {new Date().getFullYear()} FindIt. All rights reserved. Built with ❤️ for the community.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} data-id="uyxx9rsua" data-path="src/pages/HomePage.tsx">

        <ArrowUp className="w-6 h-6" data-id="0xvkjvy86" data-path="src/pages/HomePage.tsx" />
      </motion.button>
    </div>);

};

export default HomePage;