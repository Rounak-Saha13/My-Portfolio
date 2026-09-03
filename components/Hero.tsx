"use client";

import { useState } from "react";
import Terminal from "./Terminal";

export default function Hero() {
  const [helloCount, setHelloCount] = useState(0);

  return (
    <section className="pb-10 pt-16">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-14 px-7 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-4 text-base text-muted">
            Full-stack developer, MERN
          </p>
          <h1 className="mb-5 font-display text-[clamp(2.6rem,6.5vw,4.6rem)] font-bold leading-[1.02] tracking-tight">
            <span className="rise-line">
              <span>Rounak</span>
            </span>
            <span className="rise-line">
              <span className="gradient-text">Saha</span>
            </span>
          </h1>
          <p className="mb-8 max-w-[46ch] text-lg text-muted">
            Full-stack, start to finish. I design the interface, build the
            API behind it, and make sure the data holds up under real use.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="rounded-lg bg-gradient-to-r from-violet to-magenta px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(236,72,153,0.65)]"
            >
              See the work
            </a>
            <button
              type="button"
              onClick={() => setHelloCount((c) => c + 1)}
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-magenta hover:to-orange hover:text-ink hover:shadow-[0_14px_32px_-10px_rgba(249,115,22,0.6)]"
            >
              Say hello
            </button>
            <a
              href="/resume.pdf"
              download
              className="rounded-lg border border-line px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan hover:to-teal hover:text-ink hover:shadow-[0_14px_32px_-10px_rgba(45,212,191,0.6)]"
            >
              The full stack
            </a>
          </div>
        </div>
        <Terminal helloCount={helloCount} />
      </div>
    </section>
  );
}