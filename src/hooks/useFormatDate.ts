import { useMatch } from 'react-router';

export function useFormatDate() {
  const language = useMatch('/en') ? 'en' : 'fr';

  return (duration: { start: string; end?: string }, current: string) => {
    const start = new Intl.DateTimeFormat(language, {
      year: 'numeric',
      month: 'long',
    }).format(new Date(duration.start));

    const end = duration.end
      ? new Intl.DateTimeFormat(language, {
          year: 'numeric',
          month: 'long',
        }).format(new Date(duration.end))
      : current;

    if (start === end) {
      return start;
    }

    return `${start} - ${end}`;
  };
}
