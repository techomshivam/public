import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface GradientCardProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
  animate?: boolean;
}

const GradientCard: React.FC<GradientCardProps> = ({
  children,
  gradient = 'from-purple-500 to-pink-500',
  className = '',
  animate = true
}) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={animate ? cardVariants : {}}
      whileHover={animate ? "hover" : {}}
      className={className} data-id="6q9p2swoe" data-path="src/components/GradientCard.tsx">

      <Card className="relative overflow-hidden group" data-id="tany70dhz" data-path="src/components/GradientCard.tsx">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} data-id="enkhhbm89" data-path="src/components/GradientCard.tsx" />
        
        {/* Animated Border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300`} data-id="37igl1xd8" data-path="src/components/GradientCard.tsx" />
        
        <CardContent className="relative z-10 p-6" data-id="c23k62fnp" data-path="src/components/GradientCard.tsx">
          {children}
        </CardContent>
      </Card>
    </motion.div>);

};

export default GradientCard;