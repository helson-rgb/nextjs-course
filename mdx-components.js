import Link from 'next/link';
import { CodeBlock } from '@/components/CodeBlock';
import { Playground } from '@/components/Playground';

// Required by @next/mdx for App Router — maps HTML elements to custom components.
export function useMDXComponents(components) {
  return {
    // Fenced code blocks → Shiki CodeBlock (server component)
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,

    // Headings — keep prose styling; rehype-slug + autolink adds ids/anchors
    h1: ({ children, id }) => (
      <h1 id={id} className="font-display">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="font-display">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="font-display">
        {children}
      </h3>
    ),

    // Internal links via Next.js Link
    a: ({ href, children, ...props }) => (
      <Link href={href ?? '#'} {...props}>
        {children}
      </Link>
    ),

    // Named MDX components available in every .mdx file without importing
    Playground,

    ...components,
  };
}
