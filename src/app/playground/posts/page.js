import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export const metadata = {
  title: 'Posts — Next Academy Playground',
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8 font-body text-caption text-muted">
        <Link href="/" className="hover:text-fg">
          Home
        </Link>
        {' / '}
        <span className="text-fg">Playground: Posts</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-display text-h1 font-bold text-fg">Posts</h1>
        <p className="mt-3 font-body text-body text-muted">
          100 posts fetched server-side from{' '}
          <code className="rounded-sm bg-border/60 px-1.5 py-0.5 font-body text-small text-fg">
            jsonplaceholder.typicode.com
          </code>
          . Cached for 1 hour via{' '}
          <code className="rounded-sm bg-border/60 px-1.5 py-0.5 font-body text-small text-fg">
            {'{'}next: {'{'} revalidate: 3600 {'}'}{'}'}
          </code>
          .
        </p>
      </header>

      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/playground/posts/${post.id}`}
              className="flex items-start gap-3 rounded-md border border-border px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="w-8 shrink-0 font-body text-caption text-muted/60">
                {post.id}
              </span>
              <span className="font-body text-small text-fg">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
