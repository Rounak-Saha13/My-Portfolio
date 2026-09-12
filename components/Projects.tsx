type Project = {
  name: string;
  date: string;
  desc: string;
  tags: string[];
  link?: string;
  linkColor?: string;
  visualBg: string;
  visual: React.ReactNode;
};

const ErpVisual = (
  <div className="flex h-[70%] w-[70%] items-end gap-3">
    {[38, 62, 45, 80, 55].map((h, i) => (
      <div
        key={i}
        className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-300"
        style={{ height: `${h}%` }}
      />
    ))}
  </div>
);

const ResumeVisual = (
  <div className="flex h-[72%] w-[62%] flex-col gap-2.5 rounded-lg bg-[#151129] p-4">
    <div className="h-2.5 w-2/3 rounded bg-white/20" />
    <div className="h-2 w-full rounded bg-white/10" />
    <div className="h-2 w-5/6 rounded bg-white/10" />
    <div className="h-2 w-full rounded bg-gradient-to-r from-indigo-400 to-blue-300" />
    <div className="h-2 w-3/4 rounded bg-white/10" />
    <div className="mt-1 h-2 w-1/2 rounded bg-white/10" />
  </div>
);

const HospitalVisual = (
  <svg viewBox="0 0 300 140" fill="none" className="h-[60%] w-[78%]">
    <polyline
      points="0,70 50,70 65,20 85,120 100,70 300,70"
      stroke="#2DD4BF"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={85} cy={120} r={4} fill="#2DD4BF" />
  </svg>
);

const AiVisual = (
  <div className="grid w-[70%] grid-cols-3 gap-2">
    {[
      "from-violet to-magenta",
      "from-magenta to-orange",
      "from-cyan to-violet",
      "from-orange to-violet",
      "from-magenta to-cyan",
      "from-violet to-orange",
    ].map((g, i) => (
      <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${g}`} />
    ))}
  </div>
);

const FitVisual = (
  <div className="relative h-[150px] w-[150px]">
    <svg viewBox="0 0 150 150">
      <circle
        cx={75}
        cy={75}
        r={62}
        fill="none"
        stroke="rgba(245,241,255,0.12)"
        strokeWidth={10}
      />
      <circle
        cx={75}
        cy={75}
        r={62}
        fill="none"
        stroke="#F97316"
        strokeWidth={10}
        strokeLinecap="round"
        strokeDasharray={389}
        strokeDashoffset={120}
        transform="rotate(-90 75 75)"
      />
    </svg>
  </div>
);

const NexoraVisual = (
  <div className="flex h-[74%] w-[80%] flex-col gap-2.5">
    {/* Stat cards row */}
    <div className="flex gap-2">
      {[
        { label: "Leads", value: "128", color: "text-indigo-300" },
        { label: "Pipeline", value: "$84k", color: "text-cyan" },
        { label: "Won", value: "32", color: "text-emerald-300" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded-md border border-white/10 bg-white/5 px-2 py-1.5"
        >
          <div className={`font-mono text-[0.7rem] font-semibold ${s.color}`}>
            {s.value}
          </div>
          <div className="mt-0.5 h-1 w-3/4 rounded bg-white/10" />
        </div>
      ))}
    </div>

    {/* Pipeline funnel bar */}
    <div className="flex h-3 w-full overflow-hidden rounded-full">
      <div className="w-[35%] bg-indigo-500" />
      <div className="w-[28%] bg-indigo-400" />
      <div className="w-[20%] bg-cyan" />
      <div className="w-[17%] bg-emerald-400" />
    </div>
    <div className="flex justify-between font-mono text-[0.55rem] text-muted">
      <span>New</span>
      <span>Qualified</span>
      <span>Contacted</span>
      <span>Won</span>
    </div>

    {/* Trend line */}
    <div className="mt-1 flex-1 rounded-md border border-white/10 bg-white/5 p-2">
      <svg viewBox="0 0 200 60" className="h-full w-full" fill="none">
        <polyline
          points="0,45 30,38 60,42 90,25 120,30 150,12 180,18 200,8"
          stroke="#818CF8"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={200} cy={8} r={3} fill="#22D3EE" />
      </svg>
    </div>
  </div>
);

const PROJECTS: Project[] = [
  {
    name: "MERN College ERP",
    date: "Jan – Mar 2024",
    desc: "A comprehensive college management system handling enrollment, course management, attendance, exams, and role-based dashboards, with JWT authentication and secure REST APIs behind a user-friendly interface for administration and student engagement.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "React Router", "Axios"],
    link: "https://college-management-h1b7.onrender.com/",
    linkColor: "text-emerald-400",
    visualBg: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(16,185,129,0.22),#171325_60%)]",
    visual: ErpVisual,
  },
  {
    name: "AI Resume Builder",
    date: "Jul – Sep 2024",
    desc: "A web app for creating and editing professional resumes with real-time AI-powered suggestions, using OpenAI's API for content recommendations tailored to what the user has written. Frontend in HTML and Bootstrap; backend in Flask with MySQL and CSRF protection.",
    tags: ["Flask", "MySQL", "OpenAI API", "Bootstrap"],
    visualBg: "bg-[radial-gradient(120%_120%_at_80%_0%,rgba(99,102,241,0.22),#171325_60%)]",
    visual: ResumeVisual,
  },
  {
    name: "Hospital Management System",
    date: "Dec 2024 – Mar 2025",
    desc: "A MERN application covering patient registration, doctor management, appointment scheduling, medical records, billing, and admin control — with OpenAI's API integrated for AI-assisted prescription suggestions and role-based access throughout.",
    tags: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "Material UI"],
    visualBg: "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(45,212,191,0.22),#171325_60%)]",
    visual: HospitalVisual,
  },
  {
    name: "AI Image Generator",
    date: "2025 – 2026",
    desc: "A full-stack platform for generating images in real time via the Pollinations AI API, with JWT-based accounts, a searchable community gallery, and generated images stored in MongoDB. Frontend on Vercel, backend on Render.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Pollinations AI", "Material UI"],
    link: "https://ai-image-generator-nfwi-taupe.vercel.app/",
    linkColor: "text-magenta",
    visualBg: "bg-[radial-gradient(120%_120%_at_80%_0%,rgba(236,72,153,0.25),#171325_60%)]",
    visual: AiVisual,
  },
  {
    name: "Vyvora — Fitness Tracker",
    date: "Mar – Apr 2026",
    desc: "A fitness tracking app for workout logging, calorie tracking, BMI calculation, and goal setting, with personalized dashboards behind JWT auth and role-based access, and progress visualized over time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    link: "https://vyvora-fitness-tracking-app.vercel.app/",
    linkColor: "text-orange",
    visualBg: "bg-[radial-gradient(120%_120%_at_20%_100%,rgba(249,115,22,0.25),#171325_60%)]",
    visual: FitVisual,
  },
  {
  name: "Nexora — AI CRM Dashboard",
  date: "2026",
  desc: "A full-stack AI-powered CRM for managing sales pipelines, contacts, tasks, notes, and follow-ups. React 19 + Vite frontend with drag-and-drop pipeline boards and analytics charts, Node.js/Express + MongoDB backend, and Gemini-powered lead summaries, email drafting, and sales insights.",
  tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini AI", "Recharts"],
  link: "https://ai-saas-crm-dashboard.vercel.app/",
  linkColor: "text-indigo-400",
  visualBg: "bg-[radial-gradient(120%_120%_at_80%_100%,rgba(99,102,241,0.25),#171325_60%)]",
  visual: NexoraVisual,
},
];

export default function Projects() {
  return (
    <section className="py-24" id="work">
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">
          Selected work
        </p>
        <h2 className="mb-7 max-w-[24ch] font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
          {PROJECTS.length} products, {PROJECTS.length} very different problems
        </h2>

        {PROJECTS.map((p, i) => (
          <div
            key={p.name}
            className={`grid grid-cols-1 items-center gap-10 border-b border-line py-12 last:border-none md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            <div
              className={`flex aspect-[4/3] items-center justify-center rounded-2xl border border-line [direction:ltr] ${p.visualBg}`}
            >
              {p.visual}
            </div>
            <div className="[direction:ltr]">
              <div className="mb-2 font-mono text-[0.78rem] text-muted">
                {p.date}
              </div>
              <h3 className="mb-2.5 font-display text-2xl font-semibold">
                {p.name}
              </h3>
              <p className="mb-4 max-w-[52ch] text-[#D9D2EE]">{p.desc}</p>
              <div className="mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mb-1 mr-1.5 inline-block rounded-full border border-line px-3 py-1 font-mono text-[0.78rem] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-b border-current pb-0.5 text-sm font-semibold ${p.linkColor}`}
                >
                  View live project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}