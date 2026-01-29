
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

interface BackgroundCellsProps {
  children?: React.ReactNode;
  className?: string;
}

export const BackgroundCells = ({ children, className }: BackgroundCellsProps) => {
  return (
    <div className={cn("relative min-h-[80vh] w-full flex justify-center overflow-hidden bg-[#020202]", className)}>
      <BackgroundCellCore />
      {children && (
        <div className="relative z-50 pointer-events-none select-none w-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  const size = 400; // Aumentado para um raio de destaque maior
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de fundo ajustado para não apagar tanto o efeito na parte inferior */}
        <div className="absolute h-full w-full pointer-events-none bottom-0 z-40 bg-gradient-to-b from-transparent via-[#020202]/20 to-[#020202]/80" />
        
        {/* Camada de destaque sob o mouse */}
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 2}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 2}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* Bordas mais visíveis no destaque (Alpha 0.4) */}
          <Pattern cellClassName="border-[#00FF88]/40 relative z-[100]" rippleColor="rgba(0, 255, 136, 0.4)" />
        </div>

        {/* Grade base com maior opacidade (de 0.3 para 0.6) */}
        <Pattern className="opacity-[0.6]" cellClassName="border-white/10" rippleColor="rgba(0, 209, 255, 0.2)" />
      </div>
    </div>
  );
};

interface PatternProps {
  className?: string;
  cellClassName?: string;
  rippleColor?: string;
}

const Pattern = ({ className, cellClassName, rippleColor = "rgba(0, 255, 136, 0.3)" }: PatternProps) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b border-white/10"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: Math.max(0.2, distance * 0.15) },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-white/10 h-12 w-12 md:h-16 md:w-16 cursor-pointer",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="h-full w-full"
                  style={{ backgroundColor: rippleColor }}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
