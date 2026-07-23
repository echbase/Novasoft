import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/*
 * Expérience scroll desktop : Lenis (smooth scroll) + effets ScrollTrigger.
 * Ce module est chargé dynamiquement APRÈS `load`, en temps idle, et
 * uniquement sur desktop (voir ScrollExperience.tsx) — zéro impact sur le
 * chemin critique mobile. Règles ui-ux-pro-max respectées : 1 seule section
 * pinée, parallax décoratif only, 2 CTA magnétiques max.
 */
export function init(): () => void {
  gsap.registerPlugin(ScrollTrigger);

  /* ── Smooth scroll ── */
  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  /* Ancres internes via Lenis (offset = hauteur nav) */
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
    if (!a) return;
    const target = document.querySelector(a.getAttribute('href') || '');
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target as HTMLElement, { offset: -80 });
  };
  document.addEventListener('click', onClick);

  /* ── Effets scroll ── */
  const mm = gsap.matchMedia();
  mm.add('(min-width: 961px) and (pointer: fine)', () => {
    /* Méthode : section pinée, les 4 étapes s'allument au scrub */
    const steps = gsap.utils.toArray<HTMLElement>('#methode .step');
    if (steps.length) {
      gsap.set(steps, { autoAlpha: 0.18, y: 26 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#methode',
            start: 'top top+=70',
            end: '+=120%',
            scrub: 0.8,
            pin: true,
          },
        })
        .to(steps, { autoAlpha: 1, y: 0, stagger: 0.22, ease: 'none' });
    }

    /* Parallax léger sur les index éditoriaux (décoratif uniquement) */
    gsap.utils.toArray<HTMLElement>('.sec-index').forEach((el) => {
      gsap.to(el, {
        yPercent: -32,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, scrub: true },
      });
    });

    /* CTA magnétiques (2 éléments focaux max) */
    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'elastic.out(1,0.4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'elastic.out(1,0.4)' });
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.3);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  });

  /* Positions recalculées maintenant que fonts/images sont chargées */
  ScrollTrigger.refresh();

  return () => {
    document.removeEventListener('click', onClick);
    mm.revert();
    gsap.ticker.remove(tick);
    lenis.destroy();
  };
}
