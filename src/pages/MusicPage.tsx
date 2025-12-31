import { Heart, Music, Play, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Snowfall from '@/components/Snowfall';
import Clouds from '@/components/Clouds';
import megPhoto from '@/assets/meg-photo.jpg';

const MusicPage = () => {
  // Spotify embed URL for Ed Sheeran's "Perfect"
  const spotifyEmbedUrl = "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v?utm_source=generator&theme=0";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${megPhoto})` }}
      />
      
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-night-sky/80 via-night-sky/70 to-night-sky/90 z-5" />
      
      {/* Clouds */}
      <Clouds />
      
      {/* Snowfall */}
      <Snowfall count={120} />
      
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="container max-w-3xl mx-auto text-center">
          {/* Music icon */}
          <div className="mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
            <Music className="w-16 h-16 mx-auto text-gold animate-float" />
          </div>

          {/* Title */}
          <h1 
            className="font-script text-5xl sm:text-6xl md:text-7xl text-gold-gradient text-glow-gold mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Our Song
          </h1>
          
          <p 
            className="font-display text-2xl sm:text-3xl text-foreground mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            For My Perfect Meg
          </p>

          {/* Romantic message */}
          <div 
            className="bg-card/40 backdrop-blur-md border border-gold/30 rounded-2xl p-6 sm:p-8 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <Heart className="w-10 h-10 mx-auto text-romantic-red mb-4 animate-pulse" fill="currentColor" />
            <p className="font-elegant text-xl sm:text-2xl text-foreground leading-relaxed mb-4">
              Meg, every time I hear this song, I think of you. 
              The melody speaks what words cannot express — 
              you are my everything, my perfect love.
            </p>
            <p className="font-script text-2xl text-gold">
              Dancing with you in my heart forever ♥
            </p>
          </div>

          {/* Spotify Embed */}
          <div 
            className="bg-card/30 backdrop-blur-sm border border-gold/20 rounded-2xl p-4 sm:p-6 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Play className="w-5 h-5 text-gold" />
              <span className="font-display text-lg text-gold">Ed Sheeran - Perfect</span>
            </div>
            
            {/* Spotify embed iframe */}
            <div className="rounded-xl overflow-hidden">
              <iframe
                src={spotifyEmbedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
                title="Ed Sheeran - Perfect on Spotify"
              />
            </div>
            
            <p className="font-elegant text-sm text-muted-foreground mt-4">
              Click play to listen to our song together
            </p>
          </div>

          {/* Alternative link */}
          <div 
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <a 
              href="https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-elegant"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Spotify
            </a>
          </div>

          {/* Romantic verse */}
          <div 
            className="mt-12 max-w-xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <blockquote className="font-elegant text-lg sm:text-xl text-foreground/80 italic leading-relaxed">
              "In your arms, I found my home. In your eyes, I see my future. 
              In your heart, I found my forever love. You are my perfect, Meg."
            </blockquote>
          </div>

          {/* Floating hearts decoration */}
          <div className="mt-8 flex justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-6 h-6 text-romantic-red animate-float opacity-0 animate-fade-in"
                fill="currentColor"
                style={{ 
                  animationDelay: `${1.4 + i * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MusicPage;