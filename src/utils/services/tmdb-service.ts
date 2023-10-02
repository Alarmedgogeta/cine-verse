import { type Genre } from '@/types/genre';
import { type Movie } from '@/types/movie';
import { type TMDBPaginatedResponse } from '@/types/tmdb-paginated-response';

import { RequestService } from './request-service';

export namespace TMDBService {
  const BASE_API_URL = process.env.BASE_API_URL as string;

  export const Movies = {
    Genres: async (): Promise<{ genres: Genre[] }> => {
      return await RequestService.GET<{ genres: Genre[] }>(`${BASE_API_URL}/genre/movie/list`);
    },

    Discover: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const data = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/discover/movie`);
      return data;
    },

    NowPlaying: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const data = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/now_playing`);
      return data;
    },

    Popular: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const data = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/popular`);
      return data;
    },

    TopRated: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const data = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/top_rated`);
      return data;
    },

    Upcoming: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const data = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/upcoming`);
      return data;
    },
  };
}
