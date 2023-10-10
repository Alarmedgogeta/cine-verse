'use client';
import { useCallback } from 'react';
import { type ReadonlyURLSearchParams } from 'next/navigation';

import { type Nullable } from '@/types/nullable';

const useCreateQueryString = (searchParams: ReadonlyURLSearchParams): (name: string, value: Nullable<string>) => string => {
  const createQueryString = useCallback(
    (name: string, value: Nullable<string>) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams],
  );

  return createQueryString;
};

export default useCreateQueryString;
