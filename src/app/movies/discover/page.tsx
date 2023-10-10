import { type FC } from 'react';

import Pagination from '@/app/components/pagination';
import { type PaginationFilter } from '@/types/filters/pagination.filter';
import { TMDBService } from '@/utils/services/tmdb-service';

import MovieCard from '../components/movie-card';

interface Props {
  searchParams: PaginationFilter;
}

const Discover: FC<Props> = async ({ searchParams }) => {
  const { results, page, total_pages } = await TMDBService.Movies.Discover(searchParams);

  return (
    <main className='flex flex-col flex-1'>
      <div className='flex justify-between w-full mb-4'>
        <h2 className='text-2xl font-normal'>Results</h2>
      </div>
      <div className='flex flex-row flex-wrap w-full mb-8'>
        {results.map(({
          id,
          backdrop_path,
          genre_ids,
          release_date,
          title,
          vote_average,
        }) => (
          <div key={`discover-movie-card-${id}`} className='mr-2 mb-4'>
            <MovieCard
              backdrop_path={backdrop_path}
              genre_ids={genre_ids}
              release_date={release_date}
              title={title}
              vote_average={vote_average}
            />
          </div>
        ))}
      </div>
      <Pagination page={page} total_pages={total_pages} query={searchParams as any} />
    </main>
  );
};

export default Discover;
