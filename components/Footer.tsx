'use client';

import { useEffect, useState } from 'react';

/* Horloge locale de l'Île Maurice — détail studio, rendu après montage
   pour éviter tout mismatch d'hydratation. */
function MauritiusClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('fr-FR', {
      timeZone: 'Indian/Mauritius',
      hour: '2-digit',
      minute: '2-digit',
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span className="font-display tracking-[.08em]" suppressHydrationWarning>
      Port-Louis · {time} GMT+4
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-[3] flex flex-wrap items-center justify-between gap-4 border-t border-line px-[6vw] py-10 text-muted text-[13px] bg-[rgb(var(--bg-rgb)/.6)]">
      <div>© 2026 NovaSoft Ltd — Île Maurice</div>
      <MauritiusClock />
      <div>Digital Xperience · Stratégie · IA · Code · Sécurité</div>
    </footer>
  );
}
