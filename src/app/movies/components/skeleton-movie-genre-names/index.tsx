import { type FC } from 'react';

const SkeletonMovieGenreNames: FC = () => {
  return (
    <div className='flex space-x-1 animate-pulse'>
      <div className='h-2 w-8 bg-stone-700' />
      <div className='h-2 w-14 bg-stone-700' />
      <div className='h-2 w-10 bg-stone-700' />
    </div>
  );
};

export default SkeletonMovieGenreNames;
