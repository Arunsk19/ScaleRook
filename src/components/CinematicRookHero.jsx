import React, { useEffect, useRef, useState } from 'react';

/**
 * CinematicRookHero
 * 
 * High-impact, dark metallic 3D chess rook hero element.
 * Features:
 * - Layered 3D dark metallic rook with purple/gold rim lighting
 * - Subtle chess strategy tactical grid & perspective vectors
 * - Floating atmospheric micro-particles
 * - Responsive desktop parallax reaction to mouse movement
 * - Intelligent headline contrast masking
 * - Accessible: respects prefers-reduced-motion
 */
export default function CinematicRookHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Mouse movement tracker for desktop parallax
    const handleMouseMove = (e) => {
      if (mediaQuery.matches || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Atmospheric micro-particles & subtle tactical grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let w = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let h = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth || window.innerWidth;
      h = canvas.height = canvas.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Keep the atmospheric layer lighter on smaller devices.
    const particleCount = w < 640 ? 10 : w < 1024 ? 18 : 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -0.15 - Math.random() * 0.35, // gentle upward strategic drift
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.4 + 0.15,
      isGold: Math.random() > 0.45,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, w, h);

      const isMobile = w < 768;
      const isTablet = w < 1024;
      const rookCenterX = isMobile ? w * 0.5 : isTablet ? w * 0.62 : w * 0.68;
      const rookCenterY = isMobile ? h * 0.38 : h * 0.48;

      // 1. Subtle tactical chess grid floor lines (perspective convergence)
      ctx.save();
      const horizonY = h * 0.62;
      ctx.lineWidth = 1;
      
      const gridCols = 12;
      for (let i = -gridCols / 2; i <= gridCols / 2; i++) {
        const bottomX = rookCenterX + i * (w * 0.12);
        ctx.beginPath();
        ctx.moveTo(rookCenterX, horizonY - h * 0.05);
        ctx.lineTo(bottomX, h);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(215, 166, 42, 0.06)' : 'rgba(123, 0, 255, 0.05)';
        ctx.stroke();
      }

      // Horizontal perspective grid rings
      for (let j = 1; j <= 5; j++) {
        const factor = Math.pow(j / 5, 2.2);
        const y = horizonY + factor * (h - horizonY);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(215, 166, 42, ${factor * 0.08})`;
        ctx.stroke();
      }
      ctx.restore();

      // 2. Faint tactical strategy circle around rook center
      ctx.save();
      ctx.beginPath();
      ctx.arc(rookCenterX, rookCenterY, Math.min(w, h) * 0.32, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(215, 166, 42, 0.05)';
      ctx.setLineDash([4, 12]);
      ctx.stroke();
      ctx.restore();

      // 3. Floating tactical atmospheric particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(215, 166, 42, ${p.alpha * (0.8 + Math.sin(time + p.x) * 0.2)})`
          : `rgba(168, 85, 247, ${p.alpha * (0.8 + Math.cos(time + p.y) * 0.2)})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Parallax transform calculation
  const parallaxX = reducedMotion ? 0 : mousePos.x * 18;
  const parallaxY = reducedMotion ? 0 : mousePos.y * 12;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* Layer 3: Canvas with tactical chessboard grid lines & floating particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-[1] opacity-70"
      />

      {/* Layer 4: Volumetric Purple Atmospheric Haze Bloom */}
      <div className="absolute top-1/4 right-[10%] md:right-[18%] w-[48rem] h-[48rem] rounded-full bg-[radial-gradient(circle,_rgba(123,0,255,0.32)_0%,_rgba(123,0,255,0.08)_50%,_transparent_75%)] filter blur-3xl z-[2] pointer-events-none animate-pulse-slow" />

      {/* Layer 5: Volumetric Royal Gold Atmospheric Haze Bloom */}
      <div className="absolute top-1/3 right-[5%] md:right-[12%] w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle,_rgba(215,166,42,0.22)_0%,_rgba(215,166,42,0.05)_55%,_transparent_75%)] filter blur-3xl z-[2] pointer-events-none" />

      {/* Layer 6: MASSIVE Cinematic 3D Dark Metallic Chess Rook (Central Visual Dominance) */}
      <div
        className="rook-stage absolute z-[3] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(${parallaxX}px, calc(-50% + ${parallaxY}px), 0)`,
        }}
      >
        <div
          className={`rook-shell relative group ${
            reducedMotion ? '' : 'rook-cinematic-float'
          }`}
        >
          {/* Floor contact shadow */}
          <div className="rook-contact-shadow absolute -bottom-16 left-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Dynamic rim glow underlay */}
          <div className="rook-environment-glow absolute inset-0 pointer-events-none" />

          {/* Monumental High-definition 3D Rook Piece Image: 700px-940px on Desktop */}
          <img
            src="/cinematic-rook.jpg"
            alt=""
            loading="eager"
            className="rook-image h-auto max-w-none object-contain object-center transition-opacity duration-1000"
            style={{
              // Mask the image edges smoothly into the obsidian dark background
              maskImage: 'radial-gradient(ellipse 52% 74% at 50% 47%, black 34%, rgba(0,0,0,0.88) 56%, transparent 92%)',
              WebkitMaskImage: 'radial-gradient(ellipse 52% 74% at 50% 47%, black 34%, rgba(0,0,0,0.88) 56%, transparent 92%)',
            }}
          />

          <div className="rook-atmosphere absolute inset-0 pointer-events-none" />

          {/* Strategic Chess Coordinate HUD Markers */}
          <div className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 flex-col gap-10 text-[11px] font-mono text-[#D7A62A]/40 tracking-widest uppercase">
            <span>// ROOK-COMMAND</span>
            <span>RANK 08 • FILE E</span>
            <span>STATUS: DOMINANT</span>
          </div>
        </div>
      </div>

      {/* Layer 7: Intelligent Headline Contrast Mask (Vignette focused on text zone only) */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 46% 50%, rgba(5, 5, 5, 0.62) 0%, rgba(5, 5, 5, 0.28) 55%, transparent 85%)',
        }}
      />
    </div>
  );
}
