import { type FC } from 'react';

import { TMDBService } from '@/utils/services/tmdb-service';

import MovieCard from '../components/movie-card';

const Discover: FC = async () => {
  const { results } = await TMDBService.Movies.TopRated();

  return (
    <section className='flex flex-col w-full space-y-4'>
      <h2 className='text-2xl font-normal'>Top Rated</h2>
      <div className='flex flex-row w-full space-x-4 overflow-x-auto'>
        {results.map(({
          id,
          backdrop_path,
          genre_ids,
          release_date,
          title,
          vote_average,
        }) => (
          <MovieCard
            key={`discover-movie-card-${id}`}
            backdrop_path={backdrop_path}
            genre_ids={genre_ids}
            release_date={release_date}
            title={title}
            vote_average={vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default Discover;
