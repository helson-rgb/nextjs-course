import { codeToHtml } from 'shiki';

// Server Component — renders Shiki-highlighted HTML at request/build time.
// Used by mdx-components.js as the `pre` element replacement.
export async function CodeBlock({ children }) {
  const codeEl = Array.isArray(children) ? children[0] : children;
  const raw = String(codeEl?.props?.children ?? '').trimEnd();
  const lang = codeEl?.props?.className?.replace('language-', '') ?? 'text';

  let html;
  try {
    html = await codeToHtml(raw, { lang, theme: 'github-dark-dimmed' });
  } catch {
    html = await codeToHtml(raw, { lang: 'text', theme: 'github-dark-dimmed' });
  }

  return (
    <div
      className="not-prose my-6 overflow-auto rounded-lg text-sm shadow-md"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
