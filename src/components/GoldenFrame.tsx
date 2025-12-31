import { cn } from '@/lib/utils';

interface GoldenFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const GoldenFrame = ({ children, className }: GoldenFrameProps) => {
  return (
    <div className={cn(
      "relative p-1 rounded-lg animate-pulse-glow",
      className
    )}>
      {/* Golden gradient border */}
      <div className="absolute inset-0 rounded-lg bg-gold-gradient opacity-80" />
      
      {/* Inner decorative corners */}
      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-gold-light rounded-tl-sm" />
      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-gold-light rounded-tr-sm" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-gold-light rounded-bl-sm" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-gold-light rounded-br-sm" />
      
      {/* Content container */}
      <div className="relative bg-background rounded-md p-4 z-10">
        {children}
      </div>
    </div>
  );
};

export default GoldenFrame;