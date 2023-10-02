import { type FC } from 'react';

import SkeletonMovieGenreNames from '../skeleton-movie-genre-names';

const SkeletonMovieCard: FC = () => {
  return (
    <div className='relative flex flex-col flex-shrink-0 p-2 rounded-2xl shadow-xl bg-neutral-800'>
      <div className='w-64 h-48 object-cover rounded-2xl mb-2 animate-pulse bg-neutral-700' />
      <div className='h-6 w-24 mb-2 animate-pulse bg-stone-700' />
      <SkeletonMovieGenreNames />
      <div className='h-3 w-20 mt-auto mb-2 animate-pulse bg-stone-700' />
    </div>
  );
};

export default SkeletonMovieCard;
