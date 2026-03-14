export type Lang = 'de' | 'it' | 'en';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/koflerhof'

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname.slice(BASE.length) || '/';
  if (pathname.startsWith('/it')) return 'it';
  if (pathname.startsWith('/en')) return 'en';
  return 'de';
}

export function getPathWithoutLang(pathname: string): string {
  const stripped = pathname.slice(BASE.length) || '/';
  return stripped.replace(/^\/(it|en)(\/|$)/, '/') || '/';
}

export function getLangPrefix(lang: Lang): string {
  return lang === 'de' ? '' : `/${lang}`;
}
