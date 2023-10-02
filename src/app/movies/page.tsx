import { type FC, Suspense } from 'react';
import Link from 'next/link';

import DiscoverList from './components/discover-list';
import NowPlayingList from './components/now-playing-list';
import PopularList from './components/popular-list';
import SkeletonList from './components/skeleton-list';
import TopRatedList from './components/top-rated-list';
import UpcomingList from './components/upcoming-list';

const MoviesPage: FC = () => {
  return (
    <main className='flex flex-1 flex-col w-full space-y-8'>
      <section className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-normal'>Discover</h2>
          <Link href='movies/discover'>
            See more
          </Link>
        </div>
        <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
          <Suspense fallback={<SkeletonList />}>
            <DiscoverList />
          </Suspense>
        </div>
      </section>
      <section className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-normal'>Now Playing</h2>
          <Link href='movies/discover'>
            See more
          </Link>
        </div>
        <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
          <Suspense fallback={<SkeletonList />}>
            <NowPlayingList />
          </Suspense>
        </div>
      </section>
      <section className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-normal'>Popular</h2>
          <Link href='movies/discover'>
            See more
          </Link>
        </div>
        <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
          <Suspense fallback={<SkeletonList />}>
            <PopularList />
          </Suspense>
        </div>
      </section>
      <section className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-normal'>Top Rated</h2>
          <Link href='movies/discover'>
            See more
          </Link>
        </div>
        <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
          <Suspense fallback={<SkeletonList />}>
            <TopRatedList />
          </Suspense>
        </div>
      </section>
      <section className='flex flex-col w-full space-y-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-2xl font-normal'>Upcoming</h2>
          <Link href='movies/discover'>
            See more
          </Link>
        </div>
        <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
          <Suspense fallback={<SkeletonList />}>
            <UpcomingList />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default MoviesPage;
