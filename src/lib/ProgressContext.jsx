'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext(null);

const STORAGE_KEY = 'na-completed-lessons';

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCompleted(JSON.parse(saved));
    } catch {
      // ignore parse errors
    }
  }, []);

  function toggle(slug) {
    setCompleted(prev => {
      const next = prev.includes(slug)
        ? prev.filter(s => s !== slug)
        : [...prev, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return (
    <ProgressContext.Provider value={{ completed, toggle }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
