import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hover = false,
  glow = false,
  gradient = false
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${gradient 
          ? 'bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800' 
          : 'bg-white/80 dark:bg-gray-800/80'
        }
        backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50
        ${hover ? 'hover:shadow-2xl hover:scale-105 cursor-pointer hover:-translate-y-1' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${glow ? 'hover:shadow-glow-lg' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;