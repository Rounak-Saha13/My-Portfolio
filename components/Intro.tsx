export default function Intro() {
  const terminalLines = [
    "> const developer = {",
    "    name: 'Rounak Saha',",
    "    role: 'Full-Stack Developer',",
    "    stack: ['React', 'Node.js', 'MongoDB'],",
    "  };",
  ];

  return (
    <section
      id="intro"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-7 py-24 text-center"
      style={{ background: "#0e0b1a" }}
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(124,58,237,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[680px] flex-col items-center">
        {/* Photo */}
        <div
          className="mb-8 aspect-square h-36 w-36 shrink-0 overflow-hidden rounded-full"
          style={{
            border: "2px solid rgba(245,241,255,0.15)",
            boxShadow: "0 0 40px rgba(124,58,237,0.3)",
          }}
        >
          <img
            src="/profile.jpg"
            alt="Rounak Saha"
            className="block h-full w-full object-cover object-[12%_center]"
          />
        </div>

        <p
          className="mb-3 text-[0.82rem] tracking-wide"
          style={{
            fontFamily: "var(--font-mono)",
            color: "#22d3ee",
          }}
        >
          Hello, I'm
        </p>

        {/* Rising headline */}
        <h1
          className="mb-4 text-[clamp(2.4rem,7vw,3.8rem)] font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="rise-line">
            <span className="gradient-text" style={{ animationDelay: "0.1s" }}>
              Rounak Saha
            </span>
          </span>
        </h1>

        <p
          className="mb-6 max-w-[42ch]"
          style={{
            fontFamily: "var(--font-body)",
            color: "#c9c2e0",
            fontSize: "1.05rem",
          }}
        >
          Full-Stack Developer building{" "}
          <span className="cyan-text font-medium">AI-powered</span> web apps
          with React, Node.js &amp; MongoDB
        </p>

        {/* Pulse divider */}
        <svg
          viewBox="0 0 240 24"
          className="mb-8 h-5 w-56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pulse-path"
            d="M0,12 L70,12 L82,2 L96,22 L110,12 L240,12"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Terminal card */}
        <div
          className="mb-9 w-full max-w-[420px] rounded-xl px-5 py-4 text-left"
          style={{
            background: "rgba(245,241,255,0.04)",
            border: "1px solid rgba(245,241,255,0.1)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
          }}
        >
          {terminalLines.map((line, i) => (
            <div
              key={i}
              className="term-line"
              style={{
                animationDelay: `${0.6 + i * 0.15}s`,
                color: i === 0 || i === terminalLines.length - 1
                  ? "#8b83a8"
                  : "#e8e3f7",
                whiteSpace: "pre",
              }}
            >
              {line}
              {i === terminalLines.length - 1 && (
                <span className="caret ml-1" />
              )}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="/portfolio"
            className="rounded-full px-6 py-2.5 text-[0.85rem] font-semibold transition-all hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(245,241,255,0.15)",
              background: "rgba(245,241,255,0.04)",
              color: "#f5f1ff",
              fontFamily: "var(--font-mono)",
            }}
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
