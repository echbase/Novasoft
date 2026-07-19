'use client';

import { useEffect, useRef } from 'react';

/*
 * Signature 2 — "l'IA qui conçoit en direct".
 * Les 3 layouts et tous les timings proviennent du fichier de référence :
 * frappe 34 ms/caractère, apparition 240 + i×260 ms, dissolution i×90 ms.
 */

type Block = [number, number, number, number, string];

const LAYOUTS: { prompt: string; blocks: Block[] }[] = [
  {
    prompt: 'Conçois une landing page SaaS moderne…',
    blocks: [
      [1, 6, 1, 1, 'blk--hl'],
      [1, 3, 2, 1, ''],
      [1, 2, 3, 1, 'blk--pill blk--cy'],
      [4, 3, 2, 2, 'blk--cy'],
      [1, 3, 4, 1, ''],
      [4, 3, 4, 1, 'blk--am'],
    ],
  },
  {
    prompt: 'Génère un dashboard analytics temps réel…',
    blocks: [
      [1, 2, 1, 1, 'blk--cy'],
      [3, 2, 1, 1, 'blk--hl'],
      [5, 2, 1, 1, 'blk--am'],
      [1, 4, 2, 2, ''],
      [5, 2, 2, 2, 'blk--cy'],
      [1, 6, 4, 1, 'blk--pill blk--hl'],
    ],
  },
  {
    prompt: 'Crée une expérience e-commerce immersive…',
    blocks: [
      [1, 3, 1, 2, 'blk--am'],
      [4, 3, 1, 1, ''],
      [4, 3, 2, 1, 'blk--hl'],
      [1, 2, 3, 2, 'blk--cy'],
      [3, 2, 3, 2, ''],
      [5, 2, 3, 2, 'blk--hl'],
    ],
  },
];

export default function AIGenPanel() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    const text = textRef.current;
    if (!body || !text) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stopped = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(() => {
        if (!stopped) fn();
      }, ms));
    };

    const renderBlocks = (layout: (typeof LAYOUTS)[number]) => {
      body.innerHTML = '';
      return layout.blocks.map((b) => {
        const d = document.createElement('div');
        d.className = `blk ${b[4]}`.trim();
        d.style.gridColumn = `${b[0]} / span ${b[1]}`;
        d.style.gridRow = `${b[2]} / span ${b[3]}`;
        body.appendChild(d);
        return d;
      });
    };

    const typeText = (str: string, done: () => void) => {
      let i = 0;
      text.textContent = '';
      const step = () => {
        if (stopped) return;
        if (i <= str.length) {
          text.textContent = str.slice(0, i);
          i++;
          later(step, 34);
        } else {
          later(done, 300);
        }
      };
      step();
    };

    const build = (layout: (typeof LAYOUTS)[number], done: () => void) => {
      const els = renderBlocks(layout);
      els.forEach((el, i) => later(() => el.classList.add('on'), 240 + i * 260));
      later(done, 240 + els.length * 260 + 2600);
    };

    const dissolve = (done: () => void) => {
      const els = body.querySelectorAll('.blk');
      els.forEach((el, i) => later(() => el.classList.remove('on'), i * 90));
      later(done, els.length * 90 + 550);
    };

    let li = 0;
    const cycle = () => {
      const L = LAYOUTS[li % LAYOUTS.length];
      li++;
      typeText(L.prompt, () => build(L, () => dissolve(cycle)));
    };

    if (reduced) {
      /* Version statique */
      text.textContent = LAYOUTS[0].prompt;
      renderBlocks(LAYOUTS[0]).forEach((el) => el.classList.add('on'));
    } else {
      cycle();
    }

    return () => {
      stopped = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="genwrap">
      <div className="genpanel" aria-label="Démonstration : une interface générée par intelligence artificielle">
        <div className="gp-head">
          <div className="dot dot--r" />
          <div className="dot dot--y" />
          <div className="dot dot--g" />
          <span>
            <i className="pulse" /> IA · Génération en cours
          </span>
        </div>
        <div className="gp-body" ref={bodyRef} />
        <div className="gp-prompt">
          <div className="spark">✦</div>
          <code ref={textRef} />
          <span className="caret" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
