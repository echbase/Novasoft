export default function Contact() {
  return (
    <section id="contact" className="px-[6vw] py-[110px]">
      <div className="contact reveal">
        <span className="badge">
          <i aria-hidden="true" /> Disponible pour de nouveaux projets
        </span>
        <h2 className="mx-auto mt-6 max-w-[20ch] font-display font-bold leading-[1.1] tracking-[-.015em] text-[clamp(28px,4.4vw,52px)]">
          Prêt à construire votre <span className="grad">prochaine expérience digitale</span> ?
        </h2>
        <p className="mx-auto mt-5 mb-9 max-w-[48ch] text-muted">
          Racontez-nous votre idée. Nous revenons vers vous sous 48 h avec une première lecture
          stratégique et technique. Projets menés depuis Maurice, pour des clients locaux et
          internationaux.
        </p>
        <a className="btn btn--primary" href="mailto:support@novasoft.mu" data-magnetic>
          support@novasoft.mu
        </a>
      </div>
    </section>
  );
}
