import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface WishCardProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const WishCard = ({ 
  title, 
  message, 
  icon = <Heart className="text-romantic-red" fill="currentColor" />, 
  className,
  delay = 0 
}: WishCardProps) => {
  return (
    <div 
      className={cn(
        "relative bg-card/50 backdrop-blur-sm border border-gold/30 rounded-xl p-6",
        "hover:border-gold/60 hover:bg-card/70 transition-all duration-500",
        "hover:shadow-[0_0_30px_hsl(45_90%_55%_/_0.2)]",
        "opacity-0 animate-fade-in",
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-gold/40 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gold/40 rounded-br-xl" />
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-xl text-gold mb-2">{title}</h3>
          <p className="font-elegant text-lg text-foreground/90 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default WishCard;