import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'About', href: '/about' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/brand/logo-full.svg"
            alt="Next Academy"
            width={160}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Dark-mode toggle — wired in Prompt 20 */}
        <button
          aria-label="Toggle dark mode"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-neutral-200 hover:text-fg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </button>
      </div>
    </header>
  );
}
