import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  gravity: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  exploded: boolean;
  particles: Particle[];
}

const colors = [
  '#FFD700', // Gold
  '#FFA500', // Orange
  '#FF6B6B', // Coral Red
  '#FF4757', // Red
  '#FFB6C1', // Light Pink
  '#FFEAA7', // Light Gold
  '#F8B500', // Deep Gold
  '#FF7675', // Salmon
];

export const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<Firework[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const targetY = Math.random() * (canvas.height * 0.5) + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];

      fireworksRef.current.push({
        x,
        y: canvas.height,
        targetY,
        speed: 8 + Math.random() * 4,
        color,
        exploded: false,
        particles: [],
      });
    };

    const createParticles = (firework: Firework) => {
      const particleCount = 80 + Math.floor(Math.random() * 40);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const velocity = 2 + Math.random() * 4;
        
        firework.particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          color: Math.random() > 0.3 ? firework.color : colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 2,
          decay: 0.015 + Math.random() * 0.01,
          gravity: 0.05,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 25, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fireworksRef.current.forEach((firework, index) => {
        if (!firework.exploded) {
          // Draw rising firework
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = firework.color;
          ctx.fill();

          // Trail
          ctx.beginPath();
          ctx.moveTo(firework.x, firework.y);
          ctx.lineTo(firework.x, firework.y + 20);
          ctx.strokeStyle = firework.color;
          ctx.lineWidth = 2;
          ctx.stroke();

          firework.y -= firework.speed;

          if (firework.y <= firework.targetY) {
            firework.exploded = true;
            createParticles(firework);
          }
        } else {
          // Update and draw particles
          firework.particles.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += particle.gravity;
            particle.alpha -= particle.decay;

            if (particle.alpha > 0) {
              ctx.save();
              ctx.globalAlpha = particle.alpha;
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
              ctx.fillStyle = particle.color;
              ctx.fill();
              
              // Glow effect
              ctx.shadowBlur = 10;
              ctx.shadowColor = particle.color;
              ctx.fill();
              ctx.restore();
            }
          });

          // Remove dead particles
          firework.particles = firework.particles.filter((p) => p.alpha > 0);

          // Remove firework if all particles are dead
          if (firework.particles.length === 0) {
            fireworksRef.current.splice(index, 1);
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Launch fireworks periodically
    const launchInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        createFirework();
      }
      if (Math.random() > 0.6) {
        createFirework();
      }
    }, 800);

    // Initial fireworks
    setTimeout(createFirework, 100);
    setTimeout(createFirework, 300);
    setTimeout(createFirework, 500);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(launchInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default Fireworks;