const CONFIG = {
  tip: {
    label: 'Tip',
    border: 'border-success',
    bg: 'bg-success/10',
    text: 'text-success',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  warn: {
    label: 'Warning',
    border: 'border-warning',
    bg: 'bg-warning/10',
    text: 'text-warning',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  info: {
    label: 'Note',
    border: 'border-info',
    bg: 'bg-info/10',
    text: 'text-info',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
};

export function Callout({ type = 'info', children }) {
  const { label, border, bg, text, icon } = CONFIG[type] ?? CONFIG.info;

  return (
    <div className={`not-prose my-6 rounded-md border-l-4 ${border} ${bg} px-5 py-4`}>
      <div className={`mb-2 flex items-center gap-1.5 font-body text-small font-semibold ${text}`}>
        {icon}
        {label}
      </div>
      <div className="space-y-2 font-body text-small leading-relaxed text-fg">
        {children}
      </div>
    </div>
  );
}
