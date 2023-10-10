'use client';
import { type FC, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Select } from '@/app/components/forms';
import { DiscoverSortBy } from '@/types/discover-movies';
import { type Nullable } from '@/types/nullable';
import { type Option } from '@/types/option';

const sortByOptions: Array<Option<DiscoverSortBy>> = [
  { label: 'POPULARITY ASC', value: DiscoverSortBy.POPULARITY_ASC },
  { label: 'POPULARITY DESC', value: DiscoverSortBy.POPULARITY_DESC },
  { label: 'PRIMARY REALEASE DATE ASC', value: DiscoverSortBy.PRIMARY_REALEASE_DATE_ASC },
  { label: 'PRIMARY REALEASE DATE DESC', value: DiscoverSortBy.PRIMARY_REALEASE_DATE_DESC },
  { label: 'REVENUE ASC', value: DiscoverSortBy.REVENUE_ASC },
  { label: 'REVENUE DESC', value: DiscoverSortBy.REVENUE_DESC },
  { label: 'VOTE AVERAGE ASC', value: DiscoverSortBy.VOTE_AVERAGE_ASC },
  { label: 'VOTE AVERAGE DESC', value: DiscoverSortBy.VOTE_AVERAGE_DESC },
  { label: 'VOTE COUNT ASC', value: DiscoverSortBy.VOTE_COUNT_ASC },
  { label: 'VOTE COUNT DESC', value: DiscoverSortBy.VOTE_COUNT_DESC },
];

const Filters: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sort_by');

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

  const handleOrderChange = (value: Nullable<string>): void => {
    router.push(pathname + '?' + createQueryString('sort_by', value));
  };

  return (
    <aside className='flex flex-shrink-0 w-1/4 max-w-xs min-w-fit'>
      <form className='flex flex-col flex-1'>
        <Select
          label='Order by'
          options={sortByOptions}
          value={sortBy}
          onChange={handleOrderChange}
        />
      </form>
    </aside>
  );
};

export default Filters;
