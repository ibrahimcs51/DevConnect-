import React from 'react';
import { Code2, Zap, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', animated = false, showText = true }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center space-x-3 ${sizeClasses[size]} font-bold`}>
      <div className={`relative ${animated ? 'animate-bounce-gentle' : ''}`}>
        <div className="relative">
          <Code2 className={`${iconSizes[size]} text-primary-600 dark:text-primary-400 ${animated ? 'animate-pulse-slow' : ''}`} />
          <Zap className={`${iconSizes[size]} text-accent-500 absolute -top-1 -right-1 ${animated ? 'animate-glow' : ''}`} />
          {animated && (
            <Sparkles className={`${iconSizes[size]} text-secondary-500 absolute -bottom-1 -left-1 animate-pulse`} />
          )}
        </div>
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-full blur-xl animate-pulse-slow"></div>
        )}
      </div>
      {showText && (
        <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 font-extrabold tracking-tight">
          DevConnect
        </span>
      )}
    </div>
  );
};

export default Logo;