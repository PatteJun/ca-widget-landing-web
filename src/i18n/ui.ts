import { ui } from './translations';

export type Language = 'de' | 'fr' | 'it' | 'en';

export const languages = {
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  en: 'English'
} as const;

export const defaultLang = 'de' as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui['en']) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}