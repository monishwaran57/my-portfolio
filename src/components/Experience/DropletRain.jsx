// src/components/Experience/DropletRain.jsx
import { useEffect, useState } from "react";
import "./dropletWords.css"; // keep your css filename (case-sensitive)
import { dropletWords } from "./dropletWords";


export default function DropletRain() {
  const [droplets, setDroplets] = useState([]);

  useEffect(() => {
    // nothing to do if no words provided
    if (!dropletWords || !dropletWords.length) return;

    const createDroplets = () => {
      const batch = 6; // much smaller and safer than 25
      const newDrops = [];

      for (let i = 0; i < batch; i++) {
        const text = dropletWords[Math.floor(Math.random() * dropletWords.length)];
        const drop = {
          id: Math.random().toString(36).slice(2),
          text,
          left: Math.random() * 100, // percent across card
          top: Math.random() * 100,  // percent vertically inside card
          duration: 3 + Math.random() * 3, // 3-6s
          size: 12 + Math.random() * 20,   // px
          opacity: 0.15 + Math.random() * 0.7 // 0.15 - 0.85
        };
        newDrops.push(drop);
      }

      // append new drops
      setDroplets(prev => [...prev, ...newDrops]);

      // remove exactly those drops after a while
      setTimeout(() => {
        setDroplets(prev => prev.filter(p => !newDrops.find(nd => nd.id === p.id)));
      }, 8000); // keep slightly longer than max duration
    };

    // spawn every 400ms
    const interval = setInterval(createDroplets, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="droplet-container">
      {droplets.map(drop => (
        <span
          key={drop.id}
          className="droplet-text"
          style={{
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            fontSize: `${drop.size}px`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity
          }}
        >
          {drop.text}
        </span>
      ))}
    </div>
  );
}
