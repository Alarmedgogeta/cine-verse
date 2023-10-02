import { type FC } from 'react';

import { TMDBService } from '@/utils/services/tmdb-service';

import MovieCard from '../movie-card';

const TopRatedList: FC = async () => {
  const { results } = await TMDBService.Movies.TopRated();

  return results.map(({
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
  ));
};

export default TopRatedList;
