import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'text-purple-600'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center" data-id="njdhuqaf6" data-path="src/components/LoadingSpinner.tsx">
      <motion.div
        className={`${sizeClasses[size]} ${color} rounded-full border-2 border-current border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }} data-id="71earyq1h" data-path="src/components/LoadingSpinner.tsx" />

    </div>);

};

export default LoadingSpinner;