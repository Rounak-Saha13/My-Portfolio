export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-ink to-[#120E1F] py-24 pb-12"
    >
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">Contact</p>
        <h2 className="mb-5 max-w-[14ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-bold">
          Building something? Let&apos;s talk.
        </h2>
        <p className="mb-8 max-w-[48ch] text-muted">
          Open to full-stack and frontend roles, freelance builds, and
          anything MERN. Based in Kolkata, happy to work remote.
        </p>
        <div className="mb-16 flex flex-wrap gap-3.5">
          <a
            href="mailto:a96696713@gmail.com"
            className="rounded-lg bg-gradient-to-r from-violet to-magenta px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            a96696713@gmail.com
          </a>
          <a
            href="https://github.com/Rounak-Saha13"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-cyan"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rounak-saha-jay013"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-cyan"
          >
            LinkedIn
          </a>
          <a
            href="tel:+919748996248"
            className="rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-cyan"
          >
            +91 97489 96248
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-2.5 border-t border-line pt-6 text-sm text-muted">
          <span>Rounak Saha — Kolkata, India</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
