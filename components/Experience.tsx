const HIGHLIGHTS = [
  "Designed and built responsive web applications in React and modern JavaScript.",
  "Built RESTful APIs with Node.js, Express.js, and Flask.",
  "Worked across MongoDB, MySQL, PostgreSQL, and DynamoDB for application data.",
  "Built secure authentication with JWT and role-based authorization.",
  "Integrated third-party AI, payment, analytics, and communication APIs.",
  "Partnered with UI/UX and product teams to ship educational platforms, and tuned performance across desktop and mobile.",
];

export default function Experience() {
  return (
    <section className="py-24" id="experience">
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">
          Experience
        </p>
        <div className="rounded-xl border border-line bg-gradient-to-b from-surface to-ink p-8 md:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-4.5">
            <div>
              <h3 className="font-display text-xl">Trimplin Group</h3>
              <div className="text-[0.98rem] text-muted">
                Technical Developer — EdTech, digital learning platforms
              </div>
            </div>
            <time className="font-mono text-[0.82rem] text-muted">
              Feb 2024 – Feb 2026 · Kolkata, India
            </time>
          </div>
          <ul className="ml-5 mt-5 list-disc space-y-2.5 text-[#D9D2EE]">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
