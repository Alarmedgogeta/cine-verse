'use client';
import { type FC } from 'react';

import { Select } from '@/app/components/forms';
import { DiscoverSortBy } from '@/types/discover-movies';
import { type Option } from '@/types/option';

const orderByOptions: Array<Option<DiscoverSortBy>> = [
  { label: 'asdf', value: DiscoverSortBy.POPULARITY_ASC },
];

const Filters: FC = () => {
  return (
    <aside className='flex flex-shrink-0 w-1/4 max-w-xs min-w-fit'>
      <form className='flex flex-col'>
        <Select
          label='Order by'
          options={orderByOptions}
          value={null}
        />
      </form>
    </aside>
  );
};

export default Filters;
