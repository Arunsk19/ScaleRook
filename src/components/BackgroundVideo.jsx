import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const SECTION_THEMES = {
  'hero': {
    name: 'Strategic Digital Universe',
    badge: 'Strategy → Scale',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-circuit-board-lines-and-dots-in-blue-motion-42845-large.mp4',
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(126, 34, 206, ', // Electric Purple
    secondaryAccent: 'rgba(217, 119, 6, ', // Royal Gold
    mode: 'hero-cinematic'
  },
  'build': {
    name: '01 — ScaleRook Build',
    badge: 'Digital Foundation',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-blue-glowing-lines-on-a-dark-background-42843-large.mp4',
    poster: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(99, 102, 241, ', // Electric Indigo/Blue
    secondaryAccent: 'rgba(168, 85, 247, ', // Purple
    mode: 'blueprint'
  },
  'creative': {
    name: '02 — ScaleRook Creative',
    badge: 'Brand & Identity',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-animation-of-glowing-gold-particles-42861-large.mp4',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(192, 132, 252, ', // Soft Violet
    secondaryAccent: 'rgba(245, 158, 11, ', // Soft Gold
    mode: 'fluid-ribbons'
  },
  'grow': {
    name: '03 — ScaleRook Grow',
    badge: 'Acquisition & Reach',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-42777-large.mp4',
    poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(147, 51, 234, ', // Purple
    secondaryAccent: 'rgba(234, 179, 8, ', // Bright Gold
    mode: 'signal-waves'
  },
  'sell': {
    name: '04 — ScaleRook Sell',
    badge: 'Sales Pipeline',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-in-motion-42851-large.mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(126, 34, 206, ', // Purple
    secondaryAccent: 'rgba(255, 255, 255, ', // White Sparks
    mode: 'funnel-stream'
  },
  'talent': {
    name: '05 — ScaleRook Talent',
    badge: 'Remote Staffing',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-network-of-glowing-dots-and-lines-42855-large.mp4',
    poster: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(139, 92, 246, ', // Purple
    secondaryAccent: 'rgba(56, 189, 248, ', // Electric Cyan
    mode: 'cluster-constellation'
  },
  'operate': {
    name: '06 — ScaleRook Operate',
    badge: 'Systems & Operations',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-circular-glowing-lines-42865-large.mp4',
    poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(126, 34, 206, ', // Deep Purple
    secondaryAccent: 'rgba(217, 119, 6, ', // Gold
    mode: 'process-rings'
  },
  'scale': {
    name: '07 — ScaleRook Scale',
    badge: 'Expansion & Scale',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-loop-28784-large.mp4',
    poster: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(147, 51, 234, ', // Purple
    secondaryAccent: 'rgba(234, 179, 8, ', // Premium Gold
    mode: 'massive-expansion'
  },
  'partner': {
    name: 'Business Partner Core',
    badge: '1 Partner • 7 Capabilities',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-glowing-lines-in-a-dark-space-42849-large.mp4',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    accentColor: 'rgba(217, 119, 6, ', // Royal Gold
    secondaryAccent: 'rgba(126, 34, 206, ', // Deep Purple
    mode: 'partner-ecosystem'
  }
};

const ROUTE_SECTION_MAP = {
  '/': 'hero',
  '/services': 'build',
  '/business-partner': 'partner',
  '/about': 'scale',
  '/contact': 'grow'
};

export default function BackgroundVideo({
  isVideoEnabled = true,
  overlayDarkness = 0.45, // Reduced from 0.75 for bold visibility!
  overrideThemeKey = null,
  activeSectionId = null
}) {
  const location = useLocation();
  const [currentThemeKey, setCurrentThemeKey] = useState('hero');
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Update theme based on section scroll, override, or route
  useEffect(() => {
    if (overrideThemeKey && SECTION_THEMES[overrideThemeKey]) {
      setCurrentThemeKey(overrideThemeKey);
    } else if (activeSectionId && SECTION_THEMES[activeSectionId]) {
      setCurrentThemeKey(activeSectionId);
    } else {
      const defaultKey = ROUTE_SECTION_MAP[location.pathname] || 'hero';
      setCurrentThemeKey(defaultKey);
    }
  }, [location.pathname, activeSectionId, overrideThemeKey]);

  // Track window scroll & mouse parallax
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || 0;
    };

    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetX = (e.clientX - cx) / cx;
      mouseRef.current.targetY = (e.clientY - cy) / cy;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const activeTheme = SECTION_THEMES[currentThemeKey] || SECTION_THEMES['hero'];

  // Handle Video element play / source update
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setVideoLoaded(false);
    setVideoError(false);

    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setVideoLoaded(true))
        .catch(() => setVideoError(true));
    }
  }, [currentThemeKey, isVideoEnabled]);

  // 60FPS High-Impact Bespoke Canvas Graphics Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();

    // Node network definition (Right Hero & Global)
    const nodeCount = 38;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      x: (width * 0.45) + Math.random() * (width * 0.52),
      y: (height * 0.1) + Math.random() * (height * 0.8),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 3 + 2.5,
      energy: Math.random(),
      isGold: i % 4 === 0
    }));

    // Data pulses traveling along network links
    const pulses = Array.from({ length: 14 }, () => ({
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount),
      progress: Math.random(),
      speed: Math.random() * 0.008 + 0.004,
      isGold: Math.random() > 0.6
    }));

    // Particles array
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.6 - 0.2, // upward drift
      radius: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.5 + 0.3,
      isGold: Math.random() > 0.7
    }));

    // Partner Core Orbiting Module Labels
    const partnerModules = ['BUILD', 'CREATIVE', 'GROW', 'SELL', 'TALENT', 'OPERATE', 'SCALE'];

    const render = (now) => {
      const elapsed = (now - startTime) / 1000;
      const scrollOffset = scrollYRef.current * 0.15;

      // Mouse position smoothing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
      const mx = mouseRef.current.x * 25;
      const my = mouseRef.current.y * 25;

      ctx.clearRect(0, 0, width, height);

      // Deep Obsidian base background
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + mx * 0.5,
        height * 0.4 + my * 0.5 - scrollOffset * 0.2,
        60,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      bgGrad.addColorStop(0, '#121020');
      bgGrad.addColorStop(0.5, '#0E0D18');
      bgGrad.addColorStop(1, '#0B0B12');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const purple = activeTheme.accentColor;
      const gold = activeTheme.secondaryAccent;

      // ----------------------------------------------------
      // CENTER BACKGROUND: LARGE ATMOSPHERIC RADIAL ENERGY BLOOM
      // ----------------------------------------------------
      const auraGrad = ctx.createRadialGradient(
        width * 0.5 + mx,
        height * 0.38 + my - scrollOffset * 0.1,
        20,
        width * 0.5 + mx,
        height * 0.38 + my - scrollOffset * 0.1,
        width * 0.45
      );
      const pulseFactor = Math.sin(elapsed * 1.5) * 0.08 + 0.35;
      auraGrad.addColorStop(0, `${purple}${pulseFactor})`);
      auraGrad.addColorStop(0.5, `rgba(91, 19, 185, ${pulseFactor * 0.4})`);
      auraGrad.addColorStop(0.8, `${gold}${pulseFactor * 0.25})`);
      auraGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // ----------------------------------------------------
      // MODE 1: HERO FULL-SCREEN CINEMATIC UNIVERSE
      // ----------------------------------------------------
      if (activeTheme.mode === 'hero-cinematic') {
        // 1. LEFT BACKGROUND: HUGE 3D PERSPECTIVE STRATEGY GRID
        ctx.save();
        ctx.strokeStyle = `${purple}0.30)`;
        ctx.lineWidth = 1.2;

        const gridHorizon = height * 0.35 - scrollOffset * 0.1;
        const gridBottom = height * 1.1;
        const perspectiveCenterX = width * 0.25 + mx * 0.8;
        const lineCount = 18;

        // Perspective lines originating from horizon
        for (let i = 0; i <= lineCount; i++) {
          const targetX = (width * -0.2) + (i / lineCount) * (width * 0.85);
          ctx.beginPath();
          ctx.moveTo(perspectiveCenterX, gridHorizon);
          ctx.lineTo(targetX, gridBottom);
          ctx.stroke();
        }

        // Horizontal perspective bars
        const horizBars = 12;
        for (let j = 1; j <= horizBars; j++) {
          const progress = Math.pow(j / horizBars, 2);
          const y = gridHorizon + progress * (gridBottom - gridHorizon);
          const alpha = progress * 0.35;

          ctx.strokeStyle = j % 3 === 0 ? `${gold}${alpha * 1.2})` : `${purple}${alpha})`;
          ctx.beginPath();
          ctx.moveTo(width * -0.2, y);
          ctx.lineTo(width * 0.65, y);
          ctx.stroke();
        }
        ctx.restore();

        // 2. RIGHT BACKGROUND: LARGE INTERCONNECTED NODE NETWORK
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < width * 0.4) n.vx *= -1;
          if (n.x > width * 0.95) n.vx *= -1;
          if (n.y < height * 0.05) n.vy *= -1;
          if (n.y > height * 0.9) n.vy *= -1;

          const nX = n.x + mx * 0.6;
          const nY = n.y + my * 0.6 - scrollOffset * 0.1;

          // Glowing Node Circle
          ctx.beginPath();
          ctx.arc(nX, nY, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.isGold ? `${gold}0.9)` : `${purple}0.85)`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(nX, nY, n.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = n.isGold ? `${gold}0.2)` : `${purple}0.2)`;
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const n2X = n2.x + mx * 0.6;
            const n2Y = n2.y + my * 0.6 - scrollOffset * 0.1;

            const dx = nX - n2X;
            const dy = nY - n2Y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 170) {
              const lineAlpha = (1 - dist / 170) * 0.42; // Bold visibility ~ 40%!
              ctx.beginPath();
              ctx.moveTo(nX, nY);
              ctx.lineTo(n2X, n2Y);
              ctx.strokeStyle = n.isGold || n2.isGold ? `${gold}${lineAlpha * 1.2})` : `${purple}${lineAlpha})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }

        // 3. MOVING LIGHT PULSES TRAVERSING PATHWAYS
        pulses.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.from = Math.floor(Math.random() * nodeCount);
            p.to = Math.floor(Math.random() * nodeCount);
            p.progress = 0;
          }

          const n1 = nodes[p.from];
          const n2 = nodes[p.to];
          if (n1 && n2) {
            const px = n1.x + (n2.x - n1.x) * p.progress + mx * 0.6;
            const py = n1.y + (n2.y - n1.y) * p.progress + my * 0.6 - scrollOffset * 0.1;

            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fillStyle = p.isGold ? '#F59E0B' : '#C084FC';
            ctx.shadowColor = p.isGold ? '#F59E0B' : '#A855F7';
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // 4. BOTTOM RIGHT: WARM ROYAL GOLD GROWTH SIGNAL VECTOR
        const goldVectorX = width * 0.85 + mx * 0.4;
        const goldVectorY = height * 0.85 + my * 0.4 - scrollOffset * 0.15;
        const vectorRadius = 180 + Math.sin(elapsed * 2) * 20;

        ctx.beginPath();
        ctx.arc(goldVectorX, goldVectorY, vectorRadius, Math.PI * 1.1, Math.PI * 1.8);
        ctx.strokeStyle = `${gold}0.45)`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // ----------------------------------------------------
      // MODE 2: 01 BUILD — Architectural Blueprint Grid & Assemblies
      // ----------------------------------------------------
      else if (activeTheme.mode === 'blueprint') {
        const boxSize = 110;
        ctx.strokeStyle = `${purple}0.35)`;
        ctx.lineWidth = 1.2;

        for (let x = (mx % boxSize); x < width; x += boxSize) {
          for (let y = (scrollOffset % boxSize); y < height; y += boxSize) {
            ctx.strokeRect(x, y, boxSize * 0.82, boxSize * 0.82);

            // Assembly node markers
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `${gold}0.65)`;
            ctx.fill();
          }
        }
      }

      // ----------------------------------------------------
      // MODE 3: 02 CREATIVE — Flowing Fluid Ribbons & Morphing Geometry
      // ----------------------------------------------------
      else if (activeTheme.mode === 'fluid-ribbons') {
        const ribbonCount = 4;
        for (let r = 0; r < ribbonCount; r++) {
          ctx.beginPath();
          const startY = height * (0.2 + r * 0.2) + Math.sin(elapsed + r) * 40;
          ctx.moveTo(0, startY);

          for (let x = 0; x <= width; x += 60) {
            const y = startY + Math.sin(x * 0.003 + elapsed * 1.2 + r) * 60;
            ctx.lineTo(x, y);
          }

          ctx.strokeStyle = r % 2 === 0 ? `${purple}0.38)` : `${gold}0.35)`;
          ctx.lineWidth = 3 + r * 1.5;
          ctx.stroke();
        }
      }

      // ----------------------------------------------------
      // MODE 4: 03 GROW — Expanding Signal Waves & Upward Streams
      // ----------------------------------------------------
      else if (activeTheme.mode === 'signal-waves') {
        const cx = width * 0.5 + mx;
        const cy = height * 0.45 + my;
        const ringCount = 6;

        for (let i = 0; i < ringCount; i++) {
          const r = ((elapsed * 55 + i * 110) % (width * 0.55));
          const alpha = (1 - r / (width * 0.55)) * 0.45;

          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = i % 2 === 0 ? `${gold}${alpha})` : `${purple}${alpha})`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }
      }

      // ----------------------------------------------------
      // MODE 5: 04 SELL — Directional Funnel Stream & Converging Signals
      // ----------------------------------------------------
      else if (activeTheme.mode === 'funnel-stream') {
        const cx = width * 0.5 + mx;
        const cy = height * 0.7;

        for (let i = 0; i < 20; i++) {
          const startX = (width * 0.1) + (i / 20) * (width * 0.8);
          const startY = height * 0.1;

          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(startX, height * 0.4, cx, height * 0.5, cx, cy);
          ctx.strokeStyle = i % 3 === 0 ? `${gold}0.38)` : `${purple}0.32)`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
      }

      // ----------------------------------------------------
      // MODE 6: 05 TALENT — Constellation Human Network & Node Clusters
      // ----------------------------------------------------
      else if (activeTheme.mode === 'cluster-constellation') {
        const clusterCenters = [
          { x: width * 0.25 + mx, y: height * 0.3 },
          { x: width * 0.75 + mx, y: height * 0.4 },
          { x: width * 0.5 + mx, y: height * 0.7 }
        ];

        clusterCenters.forEach((c) => {
          ctx.beginPath();
          ctx.arc(c.x, c.y, 70 + Math.sin(elapsed * 2) * 15, 0, Math.PI * 2);
          ctx.strokeStyle = `${purple}0.35)`;
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }

      // ----------------------------------------------------
      // MODE 7: 06 OPERATE — Rotating Process Rings & Workflow Loops
      // ----------------------------------------------------
      else if (activeTheme.mode === 'process-rings') {
        const cx = width * 0.5 + mx;
        const cy = height * 0.45 + my;
        const ringRadii = [120, 200, 290];

        ringRadii.forEach((r, idx) => {
          const rotation = elapsed * (idx % 2 === 0 ? 0.3 : -0.3);
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(rotation);

          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 1.7);
          ctx.strokeStyle = idx % 2 === 0 ? `${purple}0.42)` : `${gold}0.38)`;
          ctx.lineWidth = 2.5;
          ctx.stroke();
          ctx.restore();
        });
      }

      // ----------------------------------------------------
      // MODE 8: 07 SCALE — Massive Expanding Networks & Rising Light Trails
      // ----------------------------------------------------
      else if (activeTheme.mode === 'massive-expansion') {
        ctx.strokeStyle = `${gold}0.40)`;
        ctx.lineWidth = 2;

        const maxR = width * 0.65;
        for (let r = 50; r < maxR; r += 110) {
          ctx.beginPath();
          ctx.arc(width * 0.5 + mx, height * 0.4 + my, r, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // ----------------------------------------------------
      // MODE 9: BUSINESS PARTNER ECOSYSTEM — Central Core & 7 Capability Modules
      // ----------------------------------------------------
      else if (activeTheme.mode === 'partner-ecosystem') {
        const cx = width * 0.5 + mx;
        const cy = height * 0.45 + my - scrollOffset * 0.1;
        const radius = Math.min(width * 0.32, 260);

        // Central Core Hub
        ctx.beginPath();
        ctx.arc(cx, cy, 38, 0, Math.PI * 2);
        ctx.fillStyle = `${gold}0.9)`;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 25;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(cx, cy, 60 + Math.sin(elapsed * 3) * 10, 0, Math.PI * 2);
        ctx.strokeStyle = `${gold}0.5)`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // 7 Capability Modules orbiting
        partnerModules.forEach((name, idx) => {
          const angle = (idx / 7) * Math.PI * 2 + elapsed * 0.12;
          const mxNode = cx + Math.cos(angle) * radius;
          const myNode = cy + Math.sin(angle) * radius;

          // Connection Line
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(mxNode, myNode);
          ctx.strokeStyle = `${purple}0.45)`;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Traveling Energy Pulse
          const pulseProgress = ((elapsed * 0.6 + idx * 0.28) % 1);
          const px = cx + (mxNode - cx) * pulseProgress;
          const py = cy + (myNode - cy) * pulseProgress;

          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fillStyle = `${gold}1)`;
          ctx.fill();

          // Module Node Circle
          ctx.beginPath();
          ctx.arc(mxNode, myNode, 18, 0, Math.PI * 2);
          ctx.fillStyle = `${purple}0.85)`;
          ctx.fill();

          // Label
          ctx.font = 'bold 11px monospace';
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(name, mxNode, myNode);
        });
      }

      // GLOBAL PARTICLES (Visible drifting energy dots)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x + mx * 0.3, p.y + my * 0.3 - scrollOffset * 0.1, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold ? `${gold}${p.alpha * 0.75})` : `${purple}${p.alpha * 0.75})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [currentThemeKey, activeTheme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden bg-[#0B0B12]">
      {/* 60FPS High-Impact Canvas Motion Engine */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100"
      />

      {/* High Definition Background Video */}
      {isVideoEnabled && (
        <video
          ref={videoRef}
          key={activeTheme.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          poster={activeTheme.poster}
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 mix-blend-screen ${
            videoLoaded && !videoError ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <source src={activeTheme.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Balanced Dark Overlay Mask (45% darkness) for Bold Visibility & Crisp Text */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          backgroundColor: `rgba(11, 11, 18, ${overlayDarkness})`,
          backgroundImage: `
            radial-gradient(circle at 50% 35%, transparent 35%, rgba(11, 11, 18, 0.75) 95%),
            linear-gradient(to bottom, rgba(11, 11, 18, 0.4) 0%, transparent 40%, rgba(11, 11, 18, 0.85) 100%)
          `
        }}
      />
    </div>
  );
}
