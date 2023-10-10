import { type FC } from 'react';

import SkeletonMovieCard from '../components/skeleton-movie-card';

const Loader: FC = () => {
  return (
    <main className='flex flex-col flex-1'>
      <div className='flex justify-between w-full mb-4'>
        <h2 className='text-2xl font-normal'>Results</h2>
      </div>
      <div className='flex flex-row flex-wrap w-full mb-8'>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
        <div className='mr-2 mb-4'>
          <SkeletonMovieCard />
        </div>
      </div>
    </main>
  );
};

export default Loader;
