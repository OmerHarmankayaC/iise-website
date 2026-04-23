import React from 'react';

// Parse inline markers in strings: [em]...[/em] → italic colored, [hl]...[/hl] → highlighted
export function rich(str) {
  if (!str) return null;
  const parts = [];
  const re = /\[(em|hl)\]([\s\S]*?)\[\/\1\]/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(str)) !== null) {
    if (m.index > last) parts.push(str.slice(last, m.index));
    if (m[1] === "em") parts.push(<em key={i++}>{m[2]}</em>);
    else parts.push(<span key={i++} className="highlight">{m[2]}</span>);
    last = m.index + m[0].length;
  }
  if (last < str.length) parts.push(str.slice(last));
  return parts;
}

export const T = () => window.__I18N__;
