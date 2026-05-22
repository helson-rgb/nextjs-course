'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) setValue(JSON.parse(item));
    } catch {
      // ignore parse errors
    }
  }, [key]);

  function set(next) {
    const resolved = typeof next === 'function' ? next(value) : next;
    setValue(resolved);
    try {
      localStorage.setItem(key, JSON.stringify(resolved));
    } catch {
      // ignore storage errors (private mode, quota)
    }
  }

  return [value, set];
}
