export type Lang = 'de' | 'it' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  if (pathname.startsWith('/it')) return 'it';
  if (pathname.startsWith('/en')) return 'en';
  return 'de';
}

export function getPathWithoutLang(pathname: string): string {
  return pathname.replace(/^\/(it|en)(\/|$)/, '/') || '/';
}

export function getLangPrefix(lang: Lang): string {
  return lang === 'de' ? '' : `/${lang}`;
}
