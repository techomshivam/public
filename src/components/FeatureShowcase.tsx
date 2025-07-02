import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Smartphone,
  Zap,
  Shield,
  Heart,
  Palette,
  Code,
  Users,
  Globe } from
'lucide-react';

const FeatureShowcase = () => {
  const features = [
  {
    icon: <Smartphone className="w-8 h-8" data-id="n5bf3gkok" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Mobile First",
    description: "Optimized for mobile devices with responsive design that looks great on any screen size.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="w-8 h-8" data-id="4mm02ow2k" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Lightning Fast",
    description: "Built with performance in mind. Experience blazing fast load times and smooth interactions.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Shield className="w-8 h-8" data-id="um90nwq2x" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Secure & Safe",
    description: "Advanced security measures to protect your data and ensure a safe browsing experience.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Heart className="w-8 h-8" data-id="bt93c7kl9" data-path="src/components/FeatureShowcase.tsx" />,
    title: "User Friendly",
    description: "Intuitive interface designed with user experience as the top priority.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <Palette className="w-8 h-8" data-id="r8ldmd5sq" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Beautiful Design",
    description: "Stunning visual design with modern aesthetics and smooth animations.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: <Code className="w-8 h-8" data-id="l7ikge4qm" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Clean Code",
    description: "Built with clean, maintainable code following industry best practices.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Users className="w-8 h-8" data-id="jylmyxjmt" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Community Driven",
    description: "Join a vibrant community of users and contributors making a difference.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Globe className="w-8 h-8" data-id="oi698nakg" data-path="src/components/FeatureShowcase.tsx" />,
    title: "Global Reach",
    description: "Accessible worldwide with support for multiple languages and regions.",
    color: "from-emerald-500 to-green-500"
  }];


  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" data-id="8tdojnqp4" data-path="src/components/FeatureShowcase.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-id="8u5ezhcp8" data-path="src/components/FeatureShowcase.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="i9rqkzlqv" data-path="src/components/FeatureShowcase.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-id="xbachxd2j" data-path="src/components/FeatureShowcase.tsx">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="0jhjddi08" data-path="src/components/FeatureShowcase.tsx">
            Discover the features that make our platform stand out from the rest. 
            Built with modern technology and designed for the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="1hgiis004" data-path="src/components/FeatureShowcase.tsx">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }} data-id="fsc81w8h6" data-path="src/components/FeatureShowcase.tsx">

              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm" data-id="9an8eky1q" data-path="src/components/FeatureShowcase.tsx">
                <CardContent className="p-6 text-center" data-id="nwyu7x46m" data-path="src/components/FeatureShowcase.tsx">
                  <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg`} data-id="knv60xbrg" data-path="src/components/FeatureShowcase.tsx">

                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors" data-id="09i9xx5xs" data-path="src/components/FeatureShowcase.tsx">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed" data-id="oeuehb7bx" data-path="src/components/FeatureShowcase.tsx">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default FeatureShowcase;