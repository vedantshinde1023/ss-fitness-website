import { useEffect, useRef } from 'react';

interface ConfettiPiece {
  x: number;
  y: number;
  z: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
  rotation: number;
  rotationSpeed: number;
  baseSize: number;
  opacity: number;
  shape: 'rectangle' | 'circle' | 'star' | 'diamond';
  color: string;
  floatPhase: number;
  swayAmplitude: number;
  bobAmplitude: number;
  fadeStart: number;
  isFading: boolean;
}

export default function ConfettiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const confettiRef = useRef<ConfettiPiece[]>([]);

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

    // Subtle white/gold colors for confetti
    const colors = [
      'rgba(255, 255, 255, 0.6)',
      'rgba(248, 250, 252, 0.5)',
      'rgba(255, 223, 0, 0.4)',
      'rgba(226, 232, 240, 0.5)',
      'rgba(255, 223, 0, 0.35)',
    ];

    const initConfetti = () => {
      confettiRef.current = [];
      for (let i = 0; i < 80; i++) {
        confettiRef.current.push({
          x: -canvas.width * 0.2 + Math.random() * canvas.width * 1.4,
          y: -Math.random() * canvas.height * 0.3,
          z: Math.random() * 1500 + 800,
          velocityX: (Math.random() - 0.5) * 0.3,
          velocityY: Math.random() * 0.15 + 0.05,
          velocityZ: -(Math.random() * 0.3 + 0.15),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          baseSize: Math.random() * 8 + 3,
          opacity: 1,
          shape: ['rectangle', 'circle'][Math.floor(Math.random() * 2)] as 'rectangle' | 'circle',
          color: colors[Math.floor(Math.random() * colors.length)],
          floatPhase: Math.random() * Math.PI * 2,
          swayAmplitude: Math.random() * 0.3 + 0.1,
          bobAmplitude: Math.random() * 0.2 + 0.05,
          fadeStart: 0,
          isFading: false,
        });
      }
    };

    const drawConfetti = (piece: ConfettiPiece) => {
      const perspective = 800;
      const scale = perspective / (perspective + piece.z);
      const projectedX = piece.x + (piece.x - canvas.width / 2) * (1 - scale);
      const projectedY = piece.y + (piece.y - canvas.height / 2) * (1 - scale);

      if (scale <= 0.01 || scale > 2) return;

      const size = piece.baseSize * scale;
      const opacity = Math.min(piece.opacity * scale * 1.2, 0.6);

      ctx.save();
      ctx.translate(projectedX, projectedY);
      ctx.rotate(piece.rotation);
      ctx.globalAlpha = opacity;

      ctx.fillStyle = piece.color;

      if (piece.shape === 'rectangle') {
        const width = size * 1.5;
        const height = size * 0.8;
        ctx.fillRect(-width / 2, -height / 2, width, height);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const updateConfetti = () => {
      confettiRef.current.forEach((piece) => {
        piece.floatPhase += 0.015;

        const swayX = Math.sin(piece.floatPhase) * piece.swayAmplitude * 0.2;
        const bobY = Math.cos(piece.floatPhase * 0.7) * piece.bobAmplitude * 0.15;

        piece.x += piece.velocityX + swayX;
        piece.y += piece.velocityY + bobY;
        piece.z += piece.velocityZ;
        piece.rotation += piece.rotationSpeed;

        const turbulence = Math.max(0, 1 - piece.z / 1500) * 0.04;
        piece.velocityX += (Math.random() - 0.5) * turbulence * 0.3;
        piece.velocityY += (Math.random() - 0.5) * turbulence * 0.3;

        piece.velocityX += (Math.random() - 0.5) * 0.003;
        piece.velocityY += (Math.random() - 0.5) * 0.003;

        piece.velocityX *= 0.999;
        piece.velocityY *= 0.999;

        piece.velocityY += 0.0003;
        piece.velocityZ *= 1.0003;

        if (!piece.isFading && (piece.z <= 200 || piece.x < -150 || piece.x > canvas.width + 150 || piece.y > canvas.height + 150)) {
          piece.isFading = true;
          piece.fadeStart = piece.opacity;
        }

        if (piece.isFading) {
          piece.opacity -= 0.015;
        }

        if (piece.opacity <= 0) {
          piece.x = -canvas.width * 0.2 + Math.random() * canvas.width * 1.4;
          piece.y = -Math.random() * canvas.height * 0.3;
          piece.z = Math.random() * 800 + 1200;
          piece.velocityX = (Math.random() - 0.5) * 0.3;
          piece.velocityY = Math.random() * 0.15 + 0.05;
          piece.velocityZ = -(Math.random() * 0.3 + 0.15);
          piece.floatPhase = Math.random() * Math.PI * 2;
          piece.opacity = 1;
          piece.isFading = false;
          piece.fadeStart = 0;
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateConfetti();
      confettiRef.current.forEach(drawConfetti);
      animationRef.current = requestAnimationFrame(animate);
    };

    initConfetti();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: 'transparent',
      }}
    />
  );
}
