import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center px-4" data-id="nia9onzgi" data-path="src/pages/NotFound.tsx">
      <div className="text-center max-w-2xl mx-auto" data-id="lifplr6ec" data-path="src/pages/NotFound.tsx">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8" data-id="80sk54zy1" data-path="src/pages/NotFound.tsx">

          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent leading-none" data-id="z450aoxaw" data-path="src/pages/NotFound.tsx">
            404
          </h1>
        </motion.div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }} data-id="007fnhjw3" data-path="src/pages/NotFound.tsx">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="qoutkb6nr" data-path="src/pages/NotFound.tsx">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto leading-relaxed" data-id="bblvzwvk4" data-path="src/pages/NotFound.tsx">
            The page you're looking for seems to have gone on an adventure. 
            Let's get you back on track!
          </p>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-id="jmzyx5tg4" data-path="src/pages/NotFound.tsx">

          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-id="im4bt3mcy" data-path="src/pages/NotFound.tsx">

            <Home className="mr-2 w-5 h-5" data-id="ozgzqdasw" data-path="src/pages/NotFound.tsx" />
            Go Home
          </Button>
          
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" data-id="n5x39yu0v" data-path="src/pages/NotFound.tsx">

            <ArrowLeft className="mr-2 w-5 h-5" data-id="37zxczdke" data-path="src/pages/NotFound.tsx" />
            Go Back
          </Button>
        </motion.div>

        {/* Animated Search Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg" data-id="nz1ajjp69" data-path="src/pages/NotFound.tsx">

          <div className="flex items-center justify-center space-x-3 mb-3" data-id="yk6zqbt3q" data-path="src/pages/NotFound.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" data-id="001tqynf3" data-path="src/pages/NotFound.tsx">
              <Search className="w-4 h-4 text-white" data-id="u0dkn5r6l" data-path="src/pages/NotFound.tsx" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800" data-id="xsxtv42zm" data-path="src/pages/NotFound.tsx">Lost something?</h3>
          </div>
          <p className="text-gray-600 text-sm" data-id="1dnz16uoy" data-path="src/pages/NotFound.tsx">
            Try searching from our homepage or check out our portal for all available features.
          </p>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 bg-purple-300 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="2seec9h5h" data-path="src/pages/NotFound.tsx" />

        <motion.div
          className="absolute bottom-20 right-10 w-4 h-4 bg-pink-300 rounded-full opacity-20"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} data-id="00zyoi5kp" data-path="src/pages/NotFound.tsx" />

        <motion.div
          className="absolute top-1/2 right-20 w-3 h-3 bg-indigo-300 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }} data-id="wbr8hkplg" data-path="src/pages/NotFound.tsx" />

      </div>
    </div>);

};

export default NotFound;