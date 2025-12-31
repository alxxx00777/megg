import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const AnimatedText = ({ 
  text, 
  className, 
  delay = 0, 
  staggerDelay = 0.05 
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <span className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in opacity-0"
          style={{
            animationDelay: `${index * staggerDelay}s`,
            animationFillMode: 'forwards',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;