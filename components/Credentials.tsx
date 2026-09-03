const CERTS = [
  { t: "React and React Native", s: "E Job India · 2023–2024" },
  { t: "Web Development", s: "CodSoft · 2023–2024" },
  { t: "Service Desk Analyst", s: "EduBridge Learning Pvt · 2026" },
];

const EDU = [
  {
    t: "B.Tech, Computer Science & Engineering",
    s: "Swami Vivekananda Institute of Science & Technology · 2020–2024",
  },
  {
    t: "ISC, Science",
    s: "Puroshottam Bhangchandka Academic School · 2018–2020",
  },
  { t: "ICSE", s: "Mansur Habibullah Memorial School · 2018" },
];

function List({ items }: { items: { t: string; s: string }[] }) {
  return (
    <ul className="list-none">
      {items.map((item, i) => (
        <li
          key={item.t}
          className={`border-t border-line py-3.5 ${
            i === items.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="font-semibold">{item.t}</div>
          <div className="text-sm text-muted">{item.s}</div>
        </li>
      ))}
    </ul>
  );
}

export default function Credentials() {
  return (
    <section className="py-24" id="creds">
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">
          Credentials
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h4 className="mb-4 font-mono text-[0.85rem] text-muted">
              Certifications
            </h4>
            <List items={CERTS} />
          </div>
          <div>
            <h4 className="mb-4 font-mono text-[0.85rem] text-muted">
              Education
            </h4>
            <List items={EDU} />
          </div>
        </div>
      </div>
    </section>
  );
}
