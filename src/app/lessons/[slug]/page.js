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
  };
}

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const prev = getPrevLesson(lesson.slug);
  const next = getNextLesson(lesson.slug);

  let LessonContent;
  try {
    const mod = await import(`@/lessons-mdx/${slug}.mdx`);
    LessonContent = mod.default;
  } catch {
    LessonContent = null;
  }

  return (
    <LessonPageShell lesson={lesson} prev={prev} next={next}>
      {LessonContent ? <LessonContent /> : null}
    </LessonPageShell>
  );
}
