import { type BetweenFilter } from './filters/between.filter';
import { type PaginationFilter } from './filters/pagination.filter';

export enum DiscoverSortBy {
  POPULARITY_ASC = 'popularity.asc',
  POPULARITY_DESC = 'popularity.desc',
  REVENUE_ASC = 'revenue.asc',
  REVENUE_DESC = 'revenue.desc',
  PRIMARY_REALEASE_DATE_ASC = 'primary_release_date.asc',
  PRIMARY_REALEASE_DATE_DESC = 'primary_release_date.desc',
  VOTE_AVERAGE_ASC = 'vote_average.asc',
  VOTE_AVERAGE_DESC = 'vote_average.desc',
  VOTE_COUNT_ASC = 'vote_count.asc',
  VOTE_COUNT_DESC = 'vote_count.desc'
}

export interface DiscoverFilter extends PaginationFilter {
  certification?: string;
  include_adult?: boolean;
  include_video?: boolean;
  primary_release_year?: number;
  primary_release_date?: BetweenFilter<string>;
  release_date?: BetweenFilter<string>;
  sort_by?: DiscoverSortBy;
  vote_average?: BetweenFilter<number>;
  vote_count?: BetweenFilter<number>;
  year?: number;
}
