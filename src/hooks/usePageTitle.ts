import type { RouteHandle } from '@/app/router';
import { useMatches } from 'react-router';

export function usePageTitle(): string | undefined {
  const matches = useMatches();

  const matchWithTitle = [...matches]
    .reverse()
    .find(
      (match): match is typeof match & { handle: RouteHandle } =>
        typeof match.handle === 'object' &&
        match.handle !== null &&
        'title' in match.handle
    );

  return matchWithTitle?.handle.title;
}
