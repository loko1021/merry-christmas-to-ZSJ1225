import React, { useState, useEffect } from 'react';
import { KaomojiRow } from '../types';

const KaomojiTree: React.FC = () => {
  const [lightsOn, setLightsOn] = useState(true);

  // Toggle lights effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLightsOn((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const treeRows: KaomojiRow[] = [
    { id: 0, content: "★", color: "text-yellow-400", type: 'star' },
    { id: 1, content: "(^・ω・^ )", color: "text-emerald-700", type: 'leaves' },
    { id: 2, content: "｡*:☆(・ω・)☆:*｡", color: "text-emerald-600", type: 'leaves' },
    { id: 3, content: "(*・ω・)人(・ω・*)", color: "text-emerald-700", type: 'leaves' },
    { id: 4, content: "o( =^･ω･^= )o*｡:ﾟ+", color: "text-emerald-600", type: 'leaves' },
    { id: 5, content: ".:*~*:._.(^・x・^)._.:*~*:.", color: "text-emerald-700", type: 'leaves' },
    { id: 6, content: "(ﾉ^ヮ^)ﾉ*:・ﾟ✧ (ﾉ^ヮ^)ﾉ*:・ﾟ✧", color: "text-emerald-600", type: 'leaves' },
    { id: 7, content: "(=^･ｪ･^=) (=^･ｪ･^=) (=^･ｪ･^=)", color: "text-emerald-700", type: 'leaves' },
    { id: 8, content: "|__|", color: "text-yellow-900", type: 'trunk' },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-1 select-none transform hover:scale-105 transition-transform duration-500 cursor-default">
      {treeRows.map((row) => (
        <div
          key={row.id}
          className={`
            font-bold text-center whitespace-nowrap transition-all duration-1000
            ${row.type === 'star' ? 'text-4xl animate-pulse mb-2 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]' : ''}
            ${row.type === 'leaves' ? 'text-lg md:text-xl lg:text-2xl drop-shadow-sm' : ''}
            ${row.type === 'trunk' ? 'text-xl md:text-2xl mt-2' : ''}
            ${row.color}
          `}
        >
          {/* Custom rendering to inject colored "ornaments" if needed, 
              or just render the text directly for pure ASCII/Kaomoji feel.
              We wrap it to add sparkle effects.
          */}
          <span className={lightsOn && row.type === 'leaves' ? 'drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]' : ''}>
            {row.content}
          </span>
        </div>
      ))}
      
      {/* Decorative presents at the bottom */}
      <div className="flex gap-4 mt-6 text-2xl animate-bounce" style={{ animationDuration: '2s' }}>
        <span>🎁</span>
        <span>🐟</span>
        <span>🧶</span>
      </div>
    </div>
  );
};

export default KaomojiTree;
