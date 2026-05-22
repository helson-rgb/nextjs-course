import { notFound } from 'next/navigation';
import { getLessonBySlug, getAllLessons, getNextLesson, getPrevLesson } from '@/lib/lessons';
import { LessonPageShell } from '@/components/LessonPageShell';

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
    openGraph: {
      title: lesson.title,
      description: lesson.summary,
      type: 'article',
      // opengraph-image.js in this folder is picked up automatically
    },
    twitter: {
      card: 'summary_large_image',
      title: lesson.title,
      description: lesson.summary,
    },
  };
}

async function loadMDX(locale, slug) {
  try {
    const mod = await import(`@/lessons-mdx/${locale}/${slug}.mdx`);
    const Content = mod.default;
    return <Content />;
  } catch {
    return null;
  }
}

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const prev = getPrevLesson(lesson.slug);
  const next = getNextLesson(lesson.slug);

  const [contentEN, contentPT, contentIT] = await Promise.all([
    loadMDX('en', slug),
    loadMDX('pt', slug),
    loadMDX('it', slug),
  ]);

  return (
    <LessonPageShell
      lesson={lesson}
      prev={prev}
      next={next}
      contentByLocale={{ en: contentEN, pt: contentPT, it: contentIT }}
    />
  );
}
