import { type FC, type ReactNode } from 'react';
import { type Metadata } from 'next';

import Filters from './components/filters';

export const metadata: Metadata = {
  title: 'Cine verse - Discover Movies',
};

interface Props {
  children: ReactNode;
}

const DiscoverLayout: FC<Props> = ({ children }) => {
  return (
    <main className='flex flex-1 w-full'>
      <Filters />
      {children}
    </main>
  );
};

export default DiscoverLayout;
