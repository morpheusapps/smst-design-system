import { useCallback } from 'react';

export const useConditionalCallback = (
  callbackFn: ((event: React.MouseEvent<HTMLElement>) => void) | undefined,
  condition: boolean
): ((event: React.MouseEvent<HTMLElement>) => void | false) =>
  useCallback(
    (event: React.MouseEvent<HTMLElement>): void | false =>
      condition && callbackFn && callbackFn(event),
    [callbackFn, condition]
  );
