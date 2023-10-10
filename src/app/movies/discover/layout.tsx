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
    <div className='flex flex-1 w-full space-x-8'>
      <Filters />
      {children}
    </div>
  );
};

export default DiscoverLayout;
