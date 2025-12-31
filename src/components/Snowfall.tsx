import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

export const Snowfall = ({ count = 100 }: { count?: number }) => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 10,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }
    setSnowflakes(flakes);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white animate-snowfall"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            boxShadow: `0 0 ${flake.size}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
      
      {/* CSS for snowfall animation */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        .animate-snowfall {
          animation: snowfall linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Snowfall;