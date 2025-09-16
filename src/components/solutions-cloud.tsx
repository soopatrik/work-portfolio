import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export type SolutionItem = {
  name: string;
  icon: string; // emoji or small icon string
  achievement: string; // short achievement text without numbers
};

interface SolutionsCloudProps {
  items: SolutionItem[];
}

// Approximate footprint for each item (avatar + labels)
const ITEM_W = 148; // px
const ITEM_H = 120; // px
const GAP = 12; // extra spacing between items
const MAX_ATTEMPTS = 1200;

const SolutionsCloud: React.FC<SolutionsCloudProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  const layout = () => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const positionsLocal: { top: number; left: number }[] = [];
    const maxLeft = Math.max(0, cw - ITEM_W);
    const maxTop = Math.max(0, ch - ITEM_H);

    items.forEach((_item, idx) => {
      let attempts = 0;
      let placed = false;
      while (attempts < MAX_ATTEMPTS && !placed) {
        const left = Math.floor(Math.random() * (maxLeft + 1));
        const top = Math.floor(Math.random() * (maxTop + 1));

        const noOverlap = positionsLocal.every((p) => {
          const sepX = !(left < p.left + ITEM_W + GAP && left + ITEM_W + GAP > p.left);
          const sepY = !(top < p.top + ITEM_H + GAP && top + ITEM_H + GAP > p.top);
          // no overlap if separated either horizontally or vertically
          return sepX || sepY;
        });

        if (noOverlap) {
          positionsLocal.push({ left, top });
          placed = true;
        }
        attempts++;
      }

      if (!placed) {
        // Fallback to a coarse grid to guarantee placement without overlap
        const cols = Math.max(1, Math.floor(cw / (ITEM_W + GAP)));
        const row = Math.floor(idx / cols);
        const col = idx % cols;
        const left = Math.min(maxLeft, col * (ITEM_W + GAP));
        const top = Math.min(maxTop, row * (ITEM_H + GAP));
        positionsLocal.push({ left, top });
      }
    });

    setPositions(positionsLocal);
  };

  useEffect(() => {
    layout();
    const ro = new ResizeObserver(() => layout());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
    // We intentionally exclude layout from deps to avoid infinite loops
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative w-full h-[560px] md:h-[680px]">
      {items.map((solution, index) => {
        const pos = positions[index] ?? { top: 0, left: 0 };
        return (
          <motion.div
            key={solution.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.08 * index }}
            viewport={{ once: true }}
            className="absolute flex flex-col items-center"
            style={{ top: pos.top, left: pos.left, width: ITEM_W }}
          >
            <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center text-2xl shadow-sm hover-scale">
              {solution.icon}
            </div>
            <div className="text-center mt-2">
              <div className="text-xs font-medium">{solution.name}</div>
              <div className="bg-muted/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-muted-foreground whitespace-nowrap mt-1">
                {solution.achievement}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SolutionsCloud;
