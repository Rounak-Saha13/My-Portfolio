export default function PulseDivider({
  animated = false,
}: {
  animated?: boolean;
}) {
  return (
    <div className="w-full">
      <svg viewBox="0 0 1000 46" preserveAspectRatio="none" className="block h-[46px] w-full">
        <defs>
          <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="55%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <path
          d="M0,23 L260,23 L285,6 L305,40 L325,23 L400,23 L420,10 L440,36 L460,23 L560,23 L585,6 L605,40 L625,23 L700,23 L720,10 L740,36 L760,23 L1000,23"
          fill="none"
          stroke="url(#pulseGrad)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animated ? "pulse-path" : ""}
        />
      </svg>
    </div>
  );
}
