"use client";

import { useEffect, useRef } from "react";

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Gradient colors that shift like ChatGPT
    const colors = [
      { r: 99, g: 102, b: 241 },   // Indigo
      { r: 168, g: 85, b: 247 },   // Purple
      { r: 236, g: 72, b: 153 },   // Pink
      { r: 34, g: 197, b: 94 },    // Green
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 245, g: 158, b: 11 },   // Amber
    ];

    let time = 0;
    const spheres: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: typeof colors[0];
      opacity: number;
    }> = [];

    // Create spheres
    for (let i = 0; i < 8; i++) {
      spheres.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.05 + 0.02,
      });
    }

    const animate = () => {
      time += 0.005;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create dynamic gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Shift colors over time
      const color1 = colors[Math.floor(time * 0.5) % colors.length];
      const color2 = colors[(Math.floor(time * 0.5) + 1) % colors.length];
      const color3 = colors[(Math.floor(time * 0.5) + 2) % colors.length];

      gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, 0.08)`);
      gradient.addColorStop(0.5, `rgba(${color2.r}, ${color2.g}, ${color2.b}, 0.05)`);
      gradient.addColorStop(1, `rgba(${color3.r}, ${color3.g}, ${color3.b}, 0.08)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw spheres
      spheres.forEach((sphere, index) => {
        // Update position
        sphere.x += sphere.vx;
        sphere.y += sphere.vy;

        // Bounce off edges
        if (sphere.x - sphere.radius < 0 || sphere.x + sphere.radius > canvas.width) {
          sphere.vx *= -1;
        }
        if (sphere.y - sphere.radius < 0 || sphere.y + sphere.radius > canvas.height) {
          sphere.vy *= -1;
        }

        // Create radial gradient for sphere
        const sphereGradient = ctx.createRadialGradient(
          sphere.x, sphere.y, 0,
          sphere.x, sphere.y, sphere.radius
        );

        sphereGradient.addColorStop(0, `rgba(${sphere.color.r}, ${sphere.color.g}, ${sphere.color.b}, ${sphere.opacity})`);
        sphereGradient.addColorStop(0.7, `rgba(${sphere.color.r}, ${sphere.color.g}, ${sphere.color.b}, ${sphere.opacity * 0.3})`);
        sphereGradient.addColorStop(1, `rgba(${sphere.color.r}, ${sphere.color.g}, ${sphere.color.b}, 0)`);

        ctx.fillStyle = sphereGradient;
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, sphere.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowColor = `rgba(${sphere.color.r}, ${sphere.color.g}, ${sphere.color.b}, 0.3)`;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas for dynamic background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Liquid glass overlay - enhanced for more prominence */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Primary glass layer */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-br from-white/30 via-white/10 to-white/20"></div>

        {/* Secondary depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-white/12"></div>

        {/* Liquid glass orbs for enhanced effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-cyan-100/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-100/18 to-teal-100/12 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100/16 to-pink-100/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5"></div>
      </div>
    </>
  );
};

export default DynamicBackground;