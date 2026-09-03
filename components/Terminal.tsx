const LINES = [
  {
    prompt: "whoami",
    out: "Rounak Saha — full-stack developer\nbased in Kolkata, India",
  },
  { prompt: "stack --primary", out: "React · Node.js · Express · MongoDB" },
  { prompt: "status", out: "Technical Developer @ Trimplin Group" },
];

const GREETINGS = [
  "Hey — thanks for stopping by. Hope today's treating you well.",
  "Hello there! Wishing you a good one, whoever's reading this.",
  "Hi! Glad you made it this far — good things ahead for you.",
];

export default function Terminal({ helloCount = 0 }: { helloCount?: number }) {
  const greeting = GREETINGS[(helloCount - 1) % GREETINGS.length];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_60px_-30px_rgba(124,58,237,0.35)]">
      <div className="flex gap-2 border-b border-line bg-surface2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-orange" />
        <span className="h-2.5 w-2.5 rounded-full bg-magenta" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
      </div>
      <div className="min-h-[210px] px-5 py-6 font-mono text-[0.86rem] text-[#D9D2EE]">
        {LINES.map((l, i) => (
          <div
            key={l.prompt}
            className="term-line"
            style={{ animationDelay: `${0.3 + i * 0.7}s` }}
          >
            <div>
              <span className="text-teal">$</span> {l.prompt}
            </div>
            <div
              className="mb-3.5 mt-0.5 text-muted"
              dangerouslySetInnerHTML={{
                __html: l.out.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ))}

        {helloCount > 0 && (
          <div key={helloCount} className="term-line">
            <div>
              <span className="text-magenta">$</span> say-hello
            </div>
            <div className="mb-3.5 mt-0.5 text-muted">{greeting}</div>
          </div>
        )}

        <span
          key={`caret-${helloCount}`}
          className="term-line inline-block"
          style={{
            animationDelay:
              helloCount > 0 ? "0.1s" : `${0.3 + LINES.length * 0.7}s`,
          }}
        >
          <span className="caret" />
        </span>
      </div>
    </div>
  );
}