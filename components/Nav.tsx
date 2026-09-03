export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-7 py-4">
        <div className="font-display text-[1.05rem] font-bold">
          rounak<span className="text-orange">.</span>dev
        </div>
        <ul className="hidden gap-7 sm:flex">
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
