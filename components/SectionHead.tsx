export default function SectionHead({
  eyebrow,
  index,
  children,
  sub,
}: {
  eyebrow: string;
  index?: string;
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="sec-head relative mb-16 max-w-[820px]">
      {index && (
        <span className="sec-index" aria-hidden="true">
          {index}
        </span>
      )}
      <span className="eyebrow reveal">{eyebrow}</span>
      <h2 className="reveal d1 mt-3.5 font-display font-bold leading-[1.1] tracking-[-.015em] text-[clamp(28px,4.4vw,52px)]">
        {children}
      </h2>
      {sub && <p className="reveal d2 mt-[18px] text-muted text-[17px]">{sub}</p>}
    </div>
  );
}
