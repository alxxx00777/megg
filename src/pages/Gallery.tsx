import { Heart, Quote } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Fireworks from '@/components/Fireworks';
import SparklesEffect from '@/components/Sparkles';
import GoldenFrame from '@/components/GoldenFrame';
import megPhoto from '@/assets/meg-photo.jpg';

const quotes = [
  {
    text: "In your eyes, I found my home. In your heart, I found my love. In you, I found everything.",
    author: "With all my love"
  },
  {
    text: "Every love story is beautiful, but ours is my favorite.",
    author: "Anonymous"
  },
  {
    text: "I have found the one whom my soul loves.",
    author: "Song of Solomon 3:4"
  },
  {
    text: "You are my today and all of my tomorrows.",
    author: "Leo Christopher"
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-night-gradient relative overflow-hidden">
      <Fireworks />
      <SparklesEffect count={30} />
      <Navigation />

      {/* Hero section */}
      <section className="relative z-20 pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Heart className="w-10 h-10 mx-auto text-romantic-red animate-pulse mb-4" fill="currentColor" />
          <h1 className="font-script text-5xl sm:text-6xl text-gold-gradient text-glow-gold mb-4">
            Cherished Moments
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-foreground mb-4">
            A Celebration of Beauty
          </p>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            Every photograph captures a moment, but you, Meg, capture my heart in every moment of every day.
          </p>
        </div>
      </section>

      {/* Main photo showcase */}
      <section className="relative z-20 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <GoldenFrame className="max-w-md mx-auto">
                <img 
                  src={megPhoto} 
                  alt="My beautiful Meg" 
                  className="w-full h-auto rounded-md"
                />
              </GoldenFrame>
            </div>

            {/* Description */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="font-script text-4xl text-gold mb-6">
                To The One I Adore
              </h2>
              <p className="font-elegant text-lg text-foreground/90 leading-relaxed mb-6">
                Meg, this photograph is just a glimpse of your radiant beauty, 
                but no camera could ever truly capture the warmth of your smile, 
                the depth of your eyes, or the way you make my heart skip a beat.
              </p>
              <p className="font-elegant text-lg text-foreground/90 leading-relaxed mb-6">
                You are a masterpiece crafted by the heavens, and I am the luckiest 
                person in the world to call you mine. Every day with you is a gift, 
                and I treasure each moment we share.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gold">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span className="font-script text-2xl">With endless love</span>
                <Heart className="w-5 h-5" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes section */}
      <section className="relative z-20 py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-script text-4xl text-gold text-center mb-12">
            Words of Love
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <Quote className="w-8 h-8 text-gold/50 mb-4" />
                <p className="font-elegant text-lg text-foreground italic leading-relaxed mb-4">
                  "{quote.text}"
                </p>
                <p className="font-display text-sm text-muted-foreground">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetic section */}
      <section className="relative z-20 py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="bg-romantic-gradient rounded-2xl p-8 sm:p-12 border border-gold/20">
            <h2 className="font-script text-4xl text-gold mb-8">
              A Poem For You
            </h2>
            <div className="font-elegant text-lg sm:text-xl text-foreground leading-loose space-y-4">
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                In the garden of my heart, you bloom so bright,
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                A rose of purest love, a radiant light.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                With every beat, your name I softly say,
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                Meg, my love, you take my breath away.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <br />
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                As stars above in endless skies do gleam,
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>
                You are my wish, my hope, my sweetest dream.
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                In 2025 and years beyond this night,
              </p>
              <p className="opacity-0 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                I'll love you, Meg, with all my heart and might.
              </p>
            </div>
            <div className="mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <Heart className="w-8 h-8 mx-auto text-romantic-red animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;