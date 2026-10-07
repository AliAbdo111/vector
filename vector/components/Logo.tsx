type LogoProps = { className?: string };

/** VECTOR wordmark with a directional chevron mark. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden className="h-7 w-7" fill="none">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="32" x2="32" y2="0">
            <stop offset="0" stopColor="#5B6CFF" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="31" height="31" rx="9" fill="#0E1017" stroke="rgba(255,255,255,.12)" />
        <path d="M8 10.5 16 23l4.4-6.9" stroke="url(#logo-g)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.6 9.2h5.2v5.2M23.8 9.2l-6.2 6.2" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[15px] font-semibold tracking-[0.18em] text-white">VECTOR</span>
    </span>
  );
}
