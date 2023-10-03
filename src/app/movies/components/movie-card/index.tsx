import { type FC, Suspense } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';

import MovieGenreNames from '../movie-genre-names';
import SkeletonMovieGenreNames from '../skeleton-movie-genre-names';

interface Props {
  backdrop_path: string;
  genre_ids: number[];
  release_date: string;
  title: string;
  vote_average: number;
}

const MovieCard: FC<Props> = ({
  backdrop_path,
  genre_ids,
  release_date,
  title,
  vote_average,
}) => {
  return (
    <div className='relative flex flex-col flex-shrink-0 p-2 rounded-2xl shadow-xl bg-neutral-800'>
      <span className='absolute top-4 left-4 py-0.5 px-3 rounded-full shadow-lg text-xs bg-sky-500'>
        {vote_average}
      </span>
      <Image
        alt={`${title} cover`}
        src={`${process.env.BASE_API_IMAGES_URL}w500${backdrop_path}`}
        className='w-64 h-48 object-cover rounded-2xl mb-2'
        width={256}
        height={192}
      />
      <h4 className='w-64 text-base truncate'>{title}</h4>
      <Suspense fallback={<SkeletonMovieGenreNames />}>
        <MovieGenreNames genre_ids={genre_ids} />
      </Suspense>
      <div className='flex w-full justify-between'>
        <span className='text-sm font-semibold'>{format(new Date(release_date), 'MM/dd/yyy')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default MovieCard;
