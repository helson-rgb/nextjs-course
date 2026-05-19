import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 bg-bg px-6 py-24 text-fg">
      {/* Logo */}
      <Image
        src="/brand/logo-full.svg"
        alt="Next Academy"
        width={280}
        height={70}
        priority
      />

      {/* Hero copy */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-h1 font-bold leading-tight tracking-tight text-fg">
          Master the Modern Web Stack
        </h1>
        <p className="max-w-md font-body text-body leading-relaxed text-muted">
          Learn React and Next.js through hands-on MDX lessons and interactive
          Sandpack playgrounds. Build real things, ship real code.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="#"
          className="flex h-11 items-center justify-center rounded-md bg-primary px-6 font-body text-sm font-semibold text-primary-fg transition-opacity hover:opacity-90"
        >
          Start Learning
        </a>
        <a
          href="#"
          className="flex h-11 items-center justify-center rounded-md border border-border px-6 font-body text-sm font-semibold text-fg transition-colors hover:bg-neutral-100"
        >
          Browse Lessons
        </a>
      </div>

      {/* Token preview strip — remove before launch */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          ['bg-primary text-primary-fg', 'primary'],
          ['bg-accent text-accent-fg', 'accent'],
          ['bg-success text-white', 'success'],
          ['bg-warning text-white', 'warning'],
          ['bg-error text-white', 'error'],
          ['bg-info text-white', 'info'],
        ].map(([cls, label]) => (
          <span
            key={label}
            className={`${cls} rounded-full px-3 py-1 font-body text-caption font-medium`}
          >
            {label}
          </span>
        ))}
      </div>
    </main>
  );
}
