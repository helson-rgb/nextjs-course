import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <Image
          src="/brand/logo-mark.svg"
          alt=""
          width={56}
          height={56}
          aria-hidden="true"
        />

        <h1 className="font-display text-h1 font-bold leading-tight tracking-tight text-fg">
          Learn React &amp; Next.js
          <br className="hidden sm:block" />
          by building
        </h1>

        <p className="max-w-xl font-body text-body text-muted">
          Hands-on lessons and interactive Sandpack playgrounds. Write real code,
          ship real projects, and understand the why behind every pattern.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/lessons" variant="primary">
            Start the course
          </Button>
          <Button href="/curriculum" variant="secondary">
            Browse curriculum
          </Button>
        </div>
      </div>
    </section>
  );
}
