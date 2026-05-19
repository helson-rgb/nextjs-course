'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import en from './en.json';
import pt from './pt.json';
import it from './it.json';

const TRANSLATIONS = { en, pt, it };
export const LOCALES = [
  { code: 'en', label: 'English',   flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
  { code: 'it', label: 'Italiano',  flag: '🇮🇹' },
];

const LocaleContext = createContext({
  locale: 'en',
  t: (key) => key,
  setLocale: () => {},
});

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('na-locale');
    if (saved && TRANSLATIONS[saved]) setLocaleState(saved);
  }, []);

  function setLocale(code) {
    if (!TRANSLATIONS[code]) return;
    setLocaleState(code);
    localStorage.setItem('na-locale', code);
  }

  // Interpolates {key} placeholders: t('lessons.subtitle', { count: 16, chapters: 3 })
  function t(key, params = {}) {
    const raw = TRANSLATIONS[locale]?.[key] ?? TRANSLATIONS.en[key] ?? key;
    return Object.entries(params).reduce(
      (str, [k, v]) => str.replace(`{${k}}`, String(v)),
      raw
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
