import { type FC } from 'react';

import SkeletonMovieCard from '../skeleton-movie-card';

const SkeletonList: FC = () => {
  return (
    <>
      <SkeletonMovieCard />
      <SkeletonMovieCard />
      <SkeletonMovieCard />
      <SkeletonMovieCard />
      <SkeletonMovieCard />
    </>
  );
};

export default SkeletonList;
