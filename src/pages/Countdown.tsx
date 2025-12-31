import { useEffect, useState } from 'react';
import { Heart, Sparkles, Star, PartyPopper } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Fireworks from '@/components/Fireworks';
import SparklesEffect from '@/components/Sparkles';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1);
      
      // If it's already 2025 or later
      if (now.getFullYear() >= 2026) {
        setIsNewYear(true);
        return;
      }

      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setIsNewYear(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const monthlyWishes = [
    { month: "January", wish: "May our love begin the year with warmth and tenderness." },
    { month: "February", wish: "May Valentine's bring us closer than ever before." },
    { month: "March", wish: "May spring blossom new adventures for us together." },
    { month: "April", wish: "May showers of blessings rain upon your beautiful soul." },
    { month: "May", wish: "May flowers of joy bloom in every corner of your life." },
    { month: "June", wish: "May summer bring endless sunny days filled with laughter." },
    { month: "July", wish: "May our love burn as bright as the midsummer sun." },
    { month: "August", wish: "May the stars align to fulfill your every dream." },
    { month: "September", wish: "May autumn colors paint our love in golden hues." },
    { month: "October", wish: "May cozy moments together warm our hearts." },
    { month: "November", wish: "May gratitude fill our hearts for each other." },
    { month: "December", wish: "May the year end with magic and new beginnings." },
  ];

  return (
    <div className="min-h-screen bg-night-gradient relative overflow-hidden">
      <Fireworks />
      <SparklesEffect count={50} />
      <Navigation />

      {/* Hero section */}
      <section className="relative z-20 pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          {isNewYear ? (
            <PartyPopper className="w-12 h-12 mx-auto text-gold animate-float mb-4" />
          ) : (
            <Sparkles className="w-12 h-12 mx-auto text-gold animate-float mb-4" />
          )}
          <h1 className="font-script text-5xl sm:text-6xl text-gold-gradient text-glow-gold mb-4">
            {isNewYear ? "Welcome 2025!" : "Counting Down"}
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-foreground mb-4">
            {isNewYear ? "A Year of Love Awaits" : "To Our Beautiful Year"}
          </p>
        </div>
      </section>

      {/* Countdown or Celebration */}
      <section className="relative z-20 py-8 px-4">
        <div className="container max-w-4xl mx-auto">
          {isNewYear ? (
            // Celebration message
            <div className="text-center bg-card/30 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 sm:p-12 mb-12">
              <div className="flex justify-center gap-4 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 text-gold animate-pulse" 
                    fill="currentColor"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
              <h2 className="font-script text-5xl sm:text-6xl text-gold text-glow-gold mb-6">
                Happy New Year, Meg!
              </h2>
              <p className="font-elegant text-xl sm:text-2xl text-foreground leading-relaxed mb-8">
                The new year has arrived, bringing with it a canvas of endless possibilities. 
                May 2025 be filled with love, laughter, and all the beautiful moments we'll share together.
              </p>
              <Heart className="w-16 h-16 mx-auto text-romantic-red animate-pulse" fill="currentColor" />
            </div>
          ) : (
            // Countdown timer
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-card/50 backdrop-blur-sm border border-gold/30 rounded-xl p-6 text-center glow-gold opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="font-display text-4xl sm:text-5xl md:text-6xl text-gold text-glow-gold mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="font-elegant text-lg text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Message */}
          <div className="text-center mb-16">
            <p className="font-elegant text-xl text-foreground/80 max-w-2xl mx-auto">
              {isNewYear 
                ? "Every second of this year is a gift, and I want to spend them all loving you."
                : "Every second brings us closer to a new chapter of our love story, Meg. I can't wait to welcome 2025 with you by my side."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Wishes */}
      <section className="relative z-20 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-script text-4xl text-gold text-center mb-12">
            Wishes for Every Month
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {monthlyWishes.map((item, index) => (
              <div 
                key={item.month}
                className="bg-card/30 backdrop-blur-sm border border-gold/20 rounded-lg p-4 hover:border-gold/40 hover:bg-card/50 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <h3 className="font-display text-lg text-gold mb-2">{item.month}</h3>
                <p className="font-elegant text-sm text-foreground/80">{item.wish}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final message */}
      <section className="relative z-20 py-16 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="bg-romantic-gradient rounded-2xl p-8 sm:p-12 border border-gold/30">
            <Heart className="w-12 h-12 mx-auto text-romantic-red mb-6 animate-pulse" fill="currentColor" />
            <h2 className="font-script text-4xl sm:text-5xl text-gold text-glow-gold mb-6">
              Here's to Us, Meg
            </h2>
            <p className="font-elegant text-xl text-foreground leading-relaxed mb-8">
              As the clock strikes midnight and a new year begins, know that my resolution 
              is the same as it has always been — to love you more with each passing day, 
              to be your rock, your confidant, and your greatest admirer.
            </p>
            <p className="font-elegant text-xl text-foreground leading-relaxed mb-8">
              May 2025 bring us closer together, fill our hearts with joy, and give us 
              countless beautiful memories to cherish forever.
            </p>
            <p className="font-script text-3xl text-gold">
              I Love You, Meg ♥
            </p>
            <p className="font-elegant text-lg text-muted-foreground mt-4">
              Forever and Always
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 py-8 px-4 border-t border-gold/20">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Star className="w-4 h-4 text-gold" />
            <span className="font-elegant">Made with love for the most special person</span>
            <Star className="w-4 h-4 text-gold" />
          </div>
          <p className="font-script text-2xl text-gold">
            Happy New Year 2026, My Dearest Meg ♥
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Countdown;
