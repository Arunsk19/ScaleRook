import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes definition
    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        radius: Math.random() * 2 + 1,
        isGold: i % 3 === 0,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Dark Chessboard Perspective Floor (Right side / Hero bottom)
      ctx.save();
      const horizonY = height * 0.45;
      const rx = width * 0.72; // Rook center X on desktop
      const isMobile = width < 1024;
      const rookCenterX = isMobile ? width * 0.5 : rx;
      const rookCenterY = isMobile ? height * 0.55 : height * 0.5;

      // Volumetric Purple Fog Glow behind the Rook
      const auraGrad = ctx.createRadialGradient(
        rookCenterX,
        rookCenterY - 40,
        20,
        rookCenterX,
        rookCenterY,
        width * 0.38
      );
      auraGrad.addColorStop(0, 'rgba(123, 0, 255, 0.35)');
      auraGrad.addColorStop(0.5, 'rgba(161, 0, 255, 0.15)');
      auraGrad.addColorStop(0.8, 'rgba(215, 166, 42, 0.08)');
      auraGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // Chessboard Floor Perspective Lines
      ctx.strokeStyle = 'rgba(215, 166, 42, 0.18)';
      ctx.lineWidth = 1;
      const floorStart = height * 0.55;
      const floorEnd = height;
      const colCount = 14;

      for (let i = -7; i <= colCount; i++) {
        const xBottom = rookCenterX + (i - colCount / 2) * 80;
        ctx.beginPath();
        ctx.moveTo(rookCenterX, horizonY + 80);
        ctx.lineTo(xBottom, floorEnd);
        ctx.stroke();
      }

      for (let j = 1; j <= 8; j++) {
        const progress = Math.pow(j / 8, 2);
        const y = horizonY + 80 + progress * (floorEnd - (horizonY + 80));
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = `rgba(123, 0, 255, ${progress * 0.25})`;
        ctx.stroke();
      }
      ctx.restore();

      // 2. Draw Cinematic 3D Metallic Chess Rook Visual
      ctx.save();
      const scale = isMobile ? 0.75 : 1.1;
      const hoverOffsetY = Math.sin(time * 1.5) * 8;
      const cx = rookCenterX;
      const cy = rookCenterY + hoverOffsetY;

      // Shadow on floor
      const shadowGrad = ctx.createRadialGradient(cx, cy + 180 * scale, 10, cx, cy + 180 * scale, 120 * scale);
      shadowGrad.addColorStop(0, 'rgba(5, 5, 5, 0.95)');
      shadowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 180 * scale, 120 * scale, 30 * scale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Base pedestal
      ctx.fillStyle = '#08070A';
      ctx.strokeStyle = '#D7A62A';
      ctx.lineWidth = 2 * scale;

      // Base ring
      ctx.beginPath();
      ctx.ellipse(cx, cy + 160 * scale, 85 * scale, 22 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#0F0E14';
      ctx.fill();
      ctx.stroke();

      // Lower pillar shaft
      ctx.beginPath();
      ctx.moveTo(cx - 75 * scale, cy + 155 * scale);
      ctx.lineTo(cx - 45 * scale, cy + 40 * scale);
      ctx.lineTo(cx + 45 * scale, cy + 40 * scale);
      ctx.lineTo(cx + 75 * scale, cy + 155 * scale);
      ctx.closePath();

      const shaftGrad = ctx.createLinearGradient(cx - 75 * scale, cy, cx + 75 * scale, cy);
      shaftGrad.addColorStop(0, '#0A090E');
      shaftGrad.addColorStop(0.3, '#1A1724');
      shaftGrad.addColorStop(0.5, '#2D283E');
      shaftGrad.addColorStop(0.7, '#15131D');
      shaftGrad.addColorStop(1, '#08070A');
      ctx.fillStyle = shaftGrad;
      ctx.fill();
      ctx.strokeStyle = 'rgba(215, 166, 42, 0.45)';
      ctx.stroke();

      // Purple Energy Ring across mid section
      ctx.beginPath();
      ctx.ellipse(cx, cy + 90 * scale, 55 * scale, 14 * scale, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#7B00FF';
      ctx.shadowColor = '#A100FF';
      ctx.shadowBlur = 15;
      ctx.lineWidth = 3 * scale;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Upper Rook Crown / Battlements
      ctx.beginPath();
      ctx.ellipse(cx, cy + 35 * scale, 65 * scale, 18 * scale, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#15131D';
      ctx.fill();
      ctx.strokeStyle = '#D7A62A';
      ctx.lineWidth = 2 * scale;
      ctx.stroke();

      // Battlement Pillars
      const bW = 125 * scale;
      const bH = 55 * scale;
      const bTopY = cy - 35 * scale;

      ctx.beginPath();
      ctx.moveTo(cx - bW / 2, cy + 35 * scale);
      ctx.lineTo(cx - bW / 2 - 5 * scale, bTopY);
      ctx.lineTo(cx + bW / 2 + 5 * scale, bTopY);
      ctx.lineTo(cx + bW / 2, cy + 35 * scale);
      ctx.closePath();

      const crownGrad = ctx.createLinearGradient(cx - bW / 2, bTopY, cx + bW / 2, bTopY);
      crownGrad.addColorStop(0, '#0F0E14');
      crownGrad.addColorStop(0.4, '#2A2438');
      crownGrad.addColorStop(0.6, '#3A324E');
      crownGrad.addColorStop(1, '#0A090E');
      ctx.fillStyle = crownGrad;
      ctx.fill();
      ctx.strokeStyle = '#E5B93F';
      ctx.stroke();

      // Cutout battlement notches
      ctx.fillStyle = '#050505';
      ctx.fillRect(cx - 45 * scale, bTopY - 2, 18 * scale, 22 * scale);
      ctx.fillRect(cx - 9 * scale, bTopY - 2, 18 * scale, 22 * scale);
      ctx.fillRect(cx + 27 * scale, bTopY - 2, 18 * scale, 22 * scale);

      // Gold Rim Highlight Line
      ctx.beginPath();
      ctx.moveTo(cx - bW / 2 - 4 * scale, bTopY);
      ctx.lineTo(cx - bW / 2 + 10 * scale, bTopY);
      ctx.strokeStyle = '#E5B93F';
      ctx.shadowColor = '#E5B93F';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 3 * scale;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Glowing Center Orb inside Rook Top
      ctx.beginPath();
      ctx.arc(cx, bTopY + 15 * scale, 12 * scale, 0, Math.PI * 2);
      ctx.fillStyle = '#7B00FF';
      ctx.shadowColor = '#A100FF';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      // 3. Floating Particles & Energy Streams
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold ? `rgba(215, 166, 42, ${p.alpha})` : `rgba(123, 0, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
