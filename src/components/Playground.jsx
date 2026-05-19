'use client';

import { useEffect, useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

// Syncs Sandpack theme with the site's [data-theme="dark"] attribute.
export function Playground({
  files,
  dependencies = {},
  activeFile,
  height = 420,
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const sync = () => setIsDark(html.dataset.theme === 'dark');
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(html, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="not-prose my-8 overflow-hidden rounded-lg border border-border shadow-md">
      <Sandpack
        template="react"
        theme={isDark ? 'dark' : 'light'}
        files={files}
        customSetup={{ dependencies }}
        options={{
          activeFile,
          editorHeight: height,
          showLineNumbers: true,
          showTabs: true,
          showNavigator: false,
          showOpenInCodeSandbox: true,
          showRefreshButton: true,
          resizablePanels: true,
        }}
      />
    </div>
  );
}
