import { OFFER } from '@/lib/site-offers';

const NEEDS = ['Moderniser un site ou une boutique', 'Automatiser une tâche répétitive', 'Connecter plusieurs outils'];

export default function Contact() {
  return (
    <section id="contact" className="px-[6vw] py-[110px]">
      <div className="contact reveal">
        <span className="badge"><i aria-hidden="true" /> Parlons de votre besoin</span>
        <h2 className="mx-auto mt-6 max-w-[22ch] font-display font-bold leading-[1.08] tracking-[-.015em] text-[clamp(30px,4.6vw,54px)]">Quel résultat voulez-vous <span className="grad">obtenir maintenant</span> ?</h2>
        <p className="mx-auto mt-5 max-w-[56ch] text-muted">Pas besoin de préparer un cahier des charges. Expliquez-nous simplement ce que vous voulez améliorer ; nous vous dirons quelle approche paraît la plus adaptée.</p>
        <ul className="mx-auto mt-7 mb-9 grid max-w-[760px] gap-2 md:grid-cols-3">
          {NEEDS.map((need) => <li key={need} className="rounded-[14px] border border-line bg-panel px-4 py-3 text-[13px] text-muted">{need}</li>)}
        </ul>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="btn btn--primary" href="mailto:support@novasoft.mu?subject=Mon%20projet%20NovaSoft" data-magnetic>Écrire à NovaSoft</a>
          <a className="btn btn--ghost" href={OFFER.path}>Voir l&apos;offre sites & maintenance</a>
        </div>
        <p className="mt-5 text-[12px] text-muted">support@novasoft.mu · Maurice & international</p>
      </div>
    </section>
  );
}
