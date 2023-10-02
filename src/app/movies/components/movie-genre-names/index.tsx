import { type FC } from 'react';

import { TMDBService } from '@/utils/services/tmdb-service';

interface Props {
  genre_ids: number[];
}

const MovieGenreNames: FC<Props> = async ({ genre_ids }) => {
  const { genres } = await TMDBService.Movies.Genres();
  const genresName = genres
    .filter(({ id }) => {
      return genre_ids.includes(id);
    })
    .map(({ name }) => name);

  return (
    <span className='w-64 mb-2 text-sm font-extralight truncate'>
      {genresName.join(', ')}
    </span>
  );
};

export default MovieGenreNames;
