import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <p className="font-body text-caption text-muted">
          © {new Date().getFullYear()} Next Academy. All rights reserved.
        </p>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-caption text-muted transition-colors hover:text-fg"
        >
          GitHub ↗
        </Link>
      </div>
    </footer>
  );
}
