import { getLessonsByChapter } from '@/lib/lessons';
import { LessonSidebar } from '@/components/LessonSidebar';

export default function LessonsLayout({ children }) {
  const chapters = getLessonsByChapter();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:flex lg:gap-8">
      <LessonSidebar chapters={chapters} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
