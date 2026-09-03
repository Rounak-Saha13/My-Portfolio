export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="mx-auto max-w-[1080px] px-7">
        <p className="mb-2.5 font-mono text-[0.82rem] text-cyan">About</p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.4fr]">
          <div className="flex flex-col gap-4.5 gap-y-4">
            <div>
              <b className="cyan-text block font-display text-2xl">2 yrs</b>
              <span className="text-sm text-muted">
                Building production MERN apps
              </span>
            </div>
            <div>
              <b className="cyan-text block font-display text-2xl">3 + </b>
              <span className="text-sm text-muted">
                Shipped full-stack projects
              </span>
            </div>
            <div>
              <b className="cyan-text block font-display text-2xl">Kolkata</b>
              <span className="text-sm text-muted">
                India, open to remote work
              </span>
            </div>
          </div>
          <p className="max-w-[62ch] text-[1.04rem] text-[#D9D2EE]">
            I&apos;m a full-stack developer working mainly in the MERN stack —
            React on the front end, Node and Express on the back, MongoDB
            (and sometimes MySQL, PostgreSQL or DynamoDB) underneath. Most of
            my time goes into building secure REST APIs, wiring up
            authentication, and integrating the third-party and AI services
            that make a product actually useful. I care most about the parts
            users never see: clean data models, sane auth, and APIs that hold
            up.
          </p>
        </div>
      </div>
    </section>
  );
}
