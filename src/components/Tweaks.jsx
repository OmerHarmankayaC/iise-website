import React from 'react';

// Colorway Definitions
export const COLORS = [
  { id: "classic",  blue:"#1a3a8f", blueDeep:"#0d2563", red:"#c8102e", redWarm:"#d93f3a" },
  { id: "ocean",    blue:"#0f4c81", blueDeep:"#083251", red:"#e63946", redWarm:"#f76c6c" },
  { id: "ink",      blue:"#142850", blueDeep:"#0a1a3a", red:"#b33030", redWarm:"#cc4444" },
  { id: "royal",    blue:"#273c75", blueDeep:"#192a5a", red:"#c23616", redWarm:"#e0552f" },
  { id: "cobalt",   blue:"#0a2463", blueDeep:"#061845", red:"#d8315b", redWarm:"#e85178" },
];

export const TWEAK_DEFAULTS = {
  "bgTexture":"grid",
  "motion":"on",
  "colorway":"classic"
};

export default function Tweaks({ tweaks, set, visible, onClose }) {
  return (
    <div className={`tweaks ${visible ? "show" : ""}`}>
      <h3>TWEAKS <button onClick={onClose}>×</button></h3>
      <div className="tweak-row">
        <span className="lbl">Background</span>
        <div className="seg">
          {[["grid","Grid"],["dots","Dots"],["plain","Plain"]].map(([v,l])=> (
            <button key={v} aria-pressed={tweaks.bgTexture === v} onClick={()=>set("bgTexture", v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span className="lbl">Motion</span>
        <div className="seg">
          {[["on","On"],["off","Off"]].map(([v,l])=> (
            <button key={v} aria-pressed={tweaks.motion === v} onClick={()=>set("motion", v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <span className="lbl">Colorway</span>
        <div className="swatches">
          {COLORS.map(c => (
            <button key={c.id} aria-pressed={tweaks.colorway === c.id}
              onClick={()=>set("colorway", c.id)}
              title={c.id}
              style={{ background: `linear-gradient(135deg, ${c.blue} 0 60%, ${c.red} 60% 100%)` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
