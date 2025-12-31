import { Heart, Star, Sparkles, Sun, Moon, Gift, Flower2, Crown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Fireworks from '@/components/Fireworks';
import WishCard from '@/components/WishCard';

const wishes = [
  {
    title: "Eternal Love",
    message: "In 2025, may our love grow deeper with each passing day. Every sunrise brings new reasons to cherish you, and every sunset reminds me how blessed I am to have you, Meg.",
    icon: <Heart className="text-romantic-red" fill="currentColor" />,
  },
  {
    title: "Radiant Happiness",
    message: "May this year fill your heart with boundless joy and laughter. Your smile lights up my world, and I wish for countless moments that make your beautiful eyes sparkle.",
    icon: <Star className="text-gold" fill="currentColor" />,
  },
  {
    title: "Dreams Come True",
    message: "May all your dreams and aspirations bloom like flowers in spring. Whatever your heart desires, I hope 2025 brings you closer to making each dream a beautiful reality.",
    icon: <Sparkles className="text-gold-light" />,
  },
  {
    title: "Warmth & Comfort",
    message: "May you always feel wrapped in warmth and love. Like the gentle rays of the sun, may happiness embrace you and comfort find you in every moment.",
    icon: <Sun className="text-accent" />,
  },
  {
    title: "Peaceful Nights",
    message: "May your nights be filled with peaceful dreams and your mornings with renewed hope. Rest easy knowing you are deeply loved and treasured beyond measure.",
    icon: <Moon className="text-muted-foreground" />,
  },
  {
    title: "Abundant Blessings",
    message: "May 2025 shower you with unexpected gifts of joy, success, and wonderful surprises. You deserve all the beautiful things life has to offer, my love.",
    icon: <Gift className="text-romantic-red-light" />,
  },
  {
    title: "Blossoming Beauty",
    message: "Like the most exquisite flower in a garden, may you continue to bloom and inspire everyone around you. Your grace and beauty illuminate every room you enter.",
    icon: <Flower2 className="text-rose" />,
  },
  {
    title: "Royal Treatment",
    message: "You are my queen, Meg. In 2025 and beyond, may you be treated with the love, respect, and adoration you so rightfully deserve. You are royalty to me.",
    icon: <Crown className="text-gold" fill="currentColor" />,
  },
];

const Wishes = () => {
  return (
    <div className="min-h-screen bg-night-gradient relative">
      <Fireworks />
      <Navigation />

      {/* Hero section */}
      <section className="relative z-20 pt-24 pb-12 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Sparkles className="w-10 h-10 mx-auto text-gold animate-float mb-4" />
          <h1 className="font-script text-5xl sm:text-6xl text-gold-gradient text-glow-gold mb-4">
            Heartfelt Wishes
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-foreground mb-4">
            To My Dearest Meg
          </p>
          <p className="font-elegant text-lg text-muted-foreground max-w-2xl mx-auto">
            As we welcome 2025, here are my wishes from the deepest chambers of my heart, 
            each one wrapped in love and tied with golden ribbons of hope.
          </p>
        </div>
      </section>

      {/* Wishes grid */}
      <section className="relative z-20 pb-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
              <WishCard
                key={index}
                title={wish.title}
                message={wish.message}
                icon={wish.icon}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom romantic message */}
      <section className="relative z-20 pb-20 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 sm:p-12">
            <Heart className="w-12 h-12 mx-auto text-romantic-red mb-6 animate-pulse" fill="currentColor" />
            <blockquote className="font-elegant text-xl sm:text-2xl text-foreground italic leading-relaxed mb-6">
              "Meg, you are not just my love, but my entire universe. Every wish I make is for your happiness, 
              every prayer I whisper is for your wellbeing. In 2025 and every year that follows, 
              know that my heart beats only for you."
            </blockquote>
            <p className="font-script text-3xl text-gold">
              Forever Yours ♥
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishes;