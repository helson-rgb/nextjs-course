import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLessonBySlug, getAllLessons, getNextLesson, getPrevLesson } from '@/lib/lessons';
import { LessonNavigation } from '@/components/LessonNavigation';

export async function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — Next Academy`,
    description: lesson.summary,
  };
}

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const prev = getPrevLesson(lesson.slug);
  const next = getNextLesson(lesson.slug);

  // Dynamic import — webpack bundles all src/lessons-mdx/*.mdx at build time.
  let LessonContent;
  try {
    const mod = await import(`@/lessons-mdx/${slug}.mdx`);
    LessonContent = mod.default;
  } catch {
    LessonContent = null;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 font-body text-caption text-muted">
        <Link href="/lessons" className="transition-colors hover:text-fg">
          Lessons
        </Link>
        <span>/</span>
        <span>{lesson.chapter}</span>
        <span>/</span>
        <span className="text-fg">{lesson.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-caption font-medium text-primary">
            {lesson.chapter}
          </span>
          <span className="font-body text-caption text-muted">
            Lesson {lesson.order} · {lesson.durationMin} min
          </span>
        </div>
        <h1 className="font-display text-h1 font-bold text-fg">{lesson.title}</h1>
        <p className="mt-4 max-w-2xl font-body text-body text-muted">{lesson.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {lesson.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-body text-caption text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* MDX content */}
      <article className="prose dark:prose-invert max-w-none">
        {LessonContent ? (
          <LessonContent />
        ) : (
          <p className="text-muted">Lesson content coming soon.</p>
        )}
      </article>

      <LessonNavigation prev={prev} next={next} />
    </div>
  );
}
