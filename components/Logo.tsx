export default function Logo({ id = 'g' }: { id?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" width="34" height="34">
      <circle cx="50" cy="22" r="12" fill="var(--magenta)" />
      <circle cx="24" cy="70" r="12" fill="var(--cyan)" />
      <circle cx="76" cy="70" r="12" fill="var(--amber)" />
      <circle cx="50" cy="54" r="17" stroke={`url(#${id})`} strokeWidth="6" strokeDasharray="20 8" />
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="var(--magenta)" />
          <stop offset=".5" stopColor="var(--violet)" />
          <stop offset="1" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
