import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Fireworks from '@/components/Fireworks';
import SparklesEffect from '@/components/Sparkles';
import GoldenFrame from '@/components/GoldenFrame';
import megPhoto from '@/assets/meg-photo.jpg';

const Welcome = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-night-gradient relative overflow-hidden">
      <Fireworks />
      <SparklesEffect count={40} />
      <Navigation />

      {/* Background photo with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${megPhoto})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="container max-w-4xl mx-auto text-center">
          {/* Decorative sparkle */}
          <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <Sparkles className="w-12 h-12 mx-auto text-gold animate-float mb-6" />
          </div>

          {/* Main title */}
          <h1 
            className={`font-script text-5xl sm:text-7xl md:text-8xl text-gold-gradient text-glow-gold mb-4 transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Happy New Year
          </h1>
          
          <h2 
            className={`font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-8 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            2026
          </h2>

          {/* Photo frame */}
          <div 
            className={`max-w-xs sm:max-w-sm mx-auto mb-10 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <GoldenFrame>
              <img 
                src={megPhoto} 
                alt="My dearest Meg" 
                className="w-full h-auto rounded-md"
              />
            </GoldenFrame>
          </div>

          {/* Dedication */}
          <div 
            className={`mb-10 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="font-elegant text-xl sm:text-2xl text-muted-foreground mb-2">
              A special celebration dedicated to
            </p>
            <p className="font-script text-4xl sm:text-5xl text-gold text-glow-gold">
              My Dearest Meg
            </p>
          </div>

          {/* Romantic quote */}
          <blockquote 
            className={`font-elegant text-lg sm:text-xl text-foreground/80 italic max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-[1200ms] ${showContent ? 'opacity-100' : 'opacity-0'}`}
          >
            "Every moment with you is a treasure, and as we step into this new year together, 
            my heart overflows with love and gratitude for having you in my life."
          </blockquote>

          {/* CTA Button */}
          <div 
            className={`transition-all duration-1000 delay-[1400ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Link to="/wishes">
              <Button 
                size="lg"
                className="group bg-gold hover:bg-gold-light text-primary-foreground font-display text-lg px-8 py-6 rounded-full glow-gold hover:shadow-[0_0_40px_hsl(45_90%_55%_/_0.5)] transition-all duration-300"
              >
                <Heart className="mr-2 animate-pulse" fill="currentColor" />
                Enter My Heart
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1600ms] ${showContent ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="font-elegant text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
