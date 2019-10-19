import { useCallback } from 'react';

export const useConditionalCallback = (
  callbackFn: ((event?: React.MouseEvent<HTMLElement>) => any) | undefined,
  condition: boolean
): ((event: React.MouseEvent<HTMLElement>) => any) =>
  useCallback(
    (event?: React.MouseEvent<HTMLElement>): any =>
      condition && callbackFn && callbackFn(event),
    [callbackFn, condition]
  );
