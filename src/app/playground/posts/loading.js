function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 rounded-md border border-border px-4 py-3">
      <div className="h-4 w-6 animate-pulse rounded-sm bg-border" />
      <div className="h-4 flex-1 animate-pulse rounded-sm bg-border" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10">
        <div className="mb-3 h-10 w-32 animate-pulse rounded-md bg-border" />
        <div className="h-5 w-96 animate-pulse rounded-sm bg-border" />
      </div>
      <ul className="space-y-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i}>
            <SkeletonRow />
          </li>
        ))}
      </ul>
    </div>
  );
}
