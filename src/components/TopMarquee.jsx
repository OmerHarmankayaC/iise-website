import React from 'react';
import { T } from '../utils';

export default function TopMarquee({ lang }) {
  const t = T()[lang].marquee;
  const items = Array(6).fill(t);
  return (
    <div className="topbar">
      <div className="topbar-track">
        {items.map((x, i) => <span key={i}>{x}</span>)}
      </div>
    </div>
  );
}
