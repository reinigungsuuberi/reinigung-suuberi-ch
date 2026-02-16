"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type AnimatedIllustrationProps = {
  svgPath?: string;
  pngFallback: string;
  alt: string;
  className?: string;
};

const AnimatedIllustration = ({ 
  svgPath = "/img/ill.png", 
  pngFallback = "/img/ill.png",
  alt,
  className = ""
}: AnimatedIllustrationProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to fetch the SVG
    fetch(svgPath)
      .then((res) => {
        if (!res.ok) throw new Error("SVG not found");
        return res.text();
      })
      .then((svg) => {
        // Inject gradient definitions and animation classes
        const enhancedSvg = injectGradientAnimation(svg);
        setSvgContent(enhancedSvg);
      })
      .catch(() => {
        setUseFallback(true);
      });
  }, [svgPath]);

  // Inject gradient definitions and animation into SVG
  const injectGradientAnimation = (svg: string): string => {
    // Add gradient definitions
    const gradientDefs = `
      <defs>
        <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#06b6d4">
            <animate attributeName="stop-color" values="#06b6d4; #8b5cf6; #ec4899; #06b6d4" dur="4s" repeatCount="indefinite"/>
          </stop>
          <stop offset="50%" stop-color="#8b5cf6">
            <animate attributeName="stop-color" values="#8b5cf6; #ec4899; #06b6d4; #8b5cf6" dur="4s" repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" stop-color="#ec4899">
            <animate attributeName="stop-color" values="#ec4899; #06b6d4; #8b5cf6; #ec4899" dur="4s" repeatCount="indefinite"/>
          </stop>
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    `;

    // Find SVG opening tag and inject after it, also ensure responsive sizing
    let enhanced = svg.replace(/<svg([^>]*)>/, (match, attrs) => {
      // Add class for animation
      const hasClass = attrs.includes('class=');
      let newAttrs = hasClass 
        ? attrs.replace(/class="([^"]*)"/, 'class="$1 svg-line-glow"')
        : attrs + ' class="svg-line-glow"';
      
      // Remove any fixed width/height and add responsive sizing
      newAttrs = newAttrs.replace(/\s*width="[^"]*"/g, '');
      newAttrs = newAttrs.replace(/\s*height="[^"]*"/g, '');
      newAttrs += ' width="100%" height="100%" style="max-width: 100%; max-height: 100%;"';
      
      return `<svg${newAttrs}>${gradientDefs}`;
    });

    // Apply gradient stroke to path elements
    enhanced = enhanced.replace(/<(path|line|polyline|circle|ellipse|rect)([^>]*)\/?>/g, (match, tag, attrs) => {
      // Check if already has stroke
      if (attrs.includes('stroke=')) {
        attrs = attrs.replace(/stroke="[^"]*"/, 'stroke="url(#animatedGradient)"');
      } else {
        attrs += ' stroke="url(#animatedGradient)"';
      }
      // Add filter
      if (!attrs.includes('filter=')) {
        attrs += ' filter="url(#glow)"';
      }
      // Ensure stroke-width exists
      if (!attrs.includes('stroke-width')) {
        attrs += ' stroke-width="2"';
      }
      return `<${tag}${attrs}/>`;
    });

    return enhanced;
  };

  if (useFallback) {
    return (
      <div className={`svg-line-glow ${className}`}>
        <Image
          src={pngFallback}
          alt={alt}
          width={1200}
          height={1200}
          priority
          className="w-full h-auto drop-shadow-xl"
        />
      </div>
    );
  }

  if (!svgContent) {
    // Loading state
    return (
      <div className={`animate-pulse bg-gray-200/30 rounded-3xl ${className}`} 
           style={{ aspectRatio: "1/1" }} 
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ maxWidth: '100%', maxHeight: '100%' }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default AnimatedIllustration;
