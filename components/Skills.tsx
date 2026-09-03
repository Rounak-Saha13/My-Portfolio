const GROUPS = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Router",
      "Material UI",
      "Bootstrap",
      "Styled Components",
      "HTML5 / CSS3",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT", "Middleware"],
  },
  {
    label: "Data & cloud",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "DynamoDB",
      "Prisma",
      "AWS",
      "Firebase",
      "Vercel",
      "Render",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24" id="skills">
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">Skills</p>
        <h2 className="mb-7 font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
          What I build with
        </h2>
        {GROUPS.map((g) => (
          <div key={g.label} className="mb-6.5 mb-7">
            <h4 className="mb-3 font-mono text-[0.85rem] text-muted">
              {g.label}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-surface px-3.5 py-1.5 font-mono text-[0.83rem] text-[#D9D2EE] transition-all hover:-translate-y-0.5 hover:border-magenta"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
