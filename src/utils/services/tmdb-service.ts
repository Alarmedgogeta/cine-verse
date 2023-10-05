import { type DiscoverFilter } from '@/types/discover-movies';
import { type Genre } from '@/types/genre';
import { type Movie } from '@/types/movie';
import { type TMDBPaginatedResponse } from '@/types/tmdb-paginated-response';

import { RequestService } from './request-service';

export namespace TMDBService {
  const BASE_API_URL = process.env.BASE_API_URL as string;

  export const Movies = {
    Genres: async (): Promise<{ genres: Genre[] }> => {
      const response = await RequestService.GET<{ genres: Genre[] }>(`${BASE_API_URL}/genre/movie/list`);
      return response;
    },

    Discover: async (filter?: DiscoverFilter): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const url = new URL(`${BASE_API_URL}/discover/movie`);
      if (filter?.page) {
        url.searchParams.set('page', filter.page);
      }
      const response = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(url);
      return response;
    },

    NowPlaying: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const response = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/now_playing`);
      return response;
    },

    Popular: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const response = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/popular`);
      return response;
    },

    TopRated: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const response = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/top_rated`);
      return response;
    },

    Upcoming: async (): Promise<TMDBPaginatedResponse<Movie[]>> => {
      const response = await RequestService.GET<TMDBPaginatedResponse<Movie[]>>(`${BASE_API_URL}/movie/upcoming`);
      return response;
    },
  };
}
