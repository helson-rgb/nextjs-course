import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

async function getComments(id) {
  // Deliberate delay so you can see the post body arrive first,
  // then comments stream in 1.5 s later.
  await new Promise((r) => setTimeout(r, 1500));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    { cache: 'no-store' }
  );
  if (!res.ok) return [];
  return res.json();
}

function CommentsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-md border border-border px-4 py-3">
          <div className="mb-2 h-4 w-48 animate-pulse rounded-sm bg-border" />
          <div className="mb-3 h-3 w-32 animate-pulse rounded-sm bg-border" />
          <div className="space-y-2">
            <div className="h-3 w-full animate-pulse rounded-sm bg-border" />
            <div className="h-3 w-4/5 animate-pulse rounded-sm bg-border" />
          </div>
        </div>
      ))}
    </div>
  );
}

async function CommentsSection({ id }) {
  const comments = await getComments(id);
  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="rounded-md border border-border px-4 py-3"
        >
          <p className="mb-1 font-body text-small font-medium text-fg">
            {comment.name}
          </p>
          <p className="font-body text-caption text-primary">{comment.email}</p>
          <p className="mt-2 font-body text-small text-muted">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return {};
  return { title: `${post.title} — Next Academy Playground` };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 font-body text-caption text-muted">
        <Link href="/" className="hover:text-fg">
          Home
        </Link>
        {' / '}
        <Link href="/playground/posts" className="hover:text-fg">
          Posts
        </Link>
        {' / '}
        <span className="text-fg">#{post.id}</span>
      </nav>

      {/* Post body — arrives immediately (no delay) */}
      <article className="mb-12">
        <p className="mb-2 font-body text-caption text-muted">
          User {post.userId} · Post #{post.id}
        </p>
        <h1 className="font-display text-h2 font-bold capitalize text-fg">
          {post.title}
        </h1>
        <p className="mt-4 font-body text-body leading-relaxed text-muted">
          {post.body}
        </p>
      </article>

      {/* Comments — stream in after 1.5 s; skeleton shows in the meantime */}
      <section>
        <h2 className="mb-6 font-display text-h3 font-bold text-fg">
          Comments
        </h2>
        <Suspense fallback={<CommentsSkeleton />}>
          <CommentsSection id={id} />
        </Suspense>
      </section>

      <div className="mt-12">
        <Link
          href="/playground/posts"
          className="font-body text-small font-medium text-primary hover:underline"
        >
          ← Back to posts
        </Link>
      </div>
    </div>
  );
}
