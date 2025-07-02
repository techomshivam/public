import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ModernNavigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portal', path: '/portal' },
  { name: 'Report', path: '/report' },
  { name: 'Chat', path: '/chat' }];


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' :
      'bg-transparent'}`
      } data-id="6vowz8bj4" data-path="src/components/ModernNavigation.tsx">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-id="remil4ipz" data-path="src/components/ModernNavigation.tsx">
        <div className="flex justify-between items-center h-16" data-id="swh5qs3kv" data-path="src/components/ModernNavigation.tsx">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')} data-id="k8bm3z3do" data-path="src/components/ModernNavigation.tsx">

            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg" data-id="s9exoxj6k" data-path="src/components/ModernNavigation.tsx">
              <Search className="w-6 h-6 text-white" data-id="cw63ifeme" data-path="src/components/ModernNavigation.tsx" />
            </div>
            <h1 className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-gray-900' : 'text-white'}`
            } data-id="c7njepwyx" data-path="src/components/ModernNavigation.tsx">
              FindIt
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" data-id="9gaav7uzo" data-path="src/components/ModernNavigation.tsx">
            {navItems.map((item, index) =>
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(item.path)}
              className={`font-medium transition-colors hover:text-purple-600 ${
              isScrolled ? 'text-gray-700' : 'text-white'}`
              } data-id="dc8x1tfd9" data-path="src/components/ModernNavigation.tsx">

                {item.name}
              </motion.button>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4" data-id="xrqpvcdib" data-path="src/components/ModernNavigation.tsx">
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className={`border-purple-600 text-purple-600 hover:bg-purple-50 transition-all ${
              isScrolled ? '' : 'border-white text-white hover:bg-white/10'}`
              } data-id="aweykz6qs" data-path="src/components/ModernNavigation.tsx">

              Login
            </Button>
            <Button
              onClick={() => navigate('/register')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all" data-id="31ttvcp8z" data-path="src/components/ModernNavigation.tsx">

              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-id="q5fdvy7zg" data-path="src/components/ModernNavigation.tsx">

            {isMobileMenuOpen ?
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} data-id="dfuluj2y2" data-path="src/components/ModernNavigation.tsx" /> :

            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} data-id="sod49sfuy" data-path="src/components/ModernNavigation.tsx" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg" data-id="er9tdg91j" data-path="src/components/ModernNavigation.tsx">

          <div className="py-4 space-y-2" data-id="kcfqgpy9o" data-path="src/components/ModernNavigation.tsx">
            {navItems.map((item) =>
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors" data-id="cyodvtq8p" data-path="src/components/ModernNavigation.tsx">

                {item.name}
              </button>
            )}
            <div className="border-t border-gray-200 pt-2 mt-2 space-y-2" data-id="9zi9eslpo" data-path="src/components/ModernNavigation.tsx">
              <Button
                variant="outline"
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mx-4 border-purple-600 text-purple-600 hover:bg-purple-50" data-id="sutu1wd7y" data-path="src/components/ModernNavigation.tsx">

                Login
              </Button>
              <Button
                onClick={() => {
                  navigate('/register');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mx-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white" data-id="fyz7npcvm" data-path="src/components/ModernNavigation.tsx">

                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>);

};

export default ModernNavigation;