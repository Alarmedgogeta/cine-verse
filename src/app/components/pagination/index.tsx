import { type FC } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  page: number;
  total_pages: number;
  query?: Record<string, string | string[] | undefined>;
}

const MAX_PAGE = 500;

const getStartPaginationOption = (page: number, total_pages: number): number => {
  if (page <= 3) {
    return 1;
  }

  const max = total_pages > MAX_PAGE ? MAX_PAGE : total_pages;

  if (page >= max - 2) {
    return max - 4;
  }

  return page - 2;
};

const getEndPaginationOption = (page: number, total_pages: number): number => {
  if (total_pages <= 5) {
    return total_pages;
  }

  if (page <= 3 && total_pages > 5) {
    return 5;
  }

  const max = total_pages > MAX_PAGE ? MAX_PAGE : total_pages;
  if (page >= max - 2) {
    return max;
  }

  return page + 2;
};

const Pagination: FC<Props> = ({ page, total_pages, query }) => {
  const options: number[] = [];

  const startOption = getStartPaginationOption(page, total_pages);
  const endOption = getEndPaginationOption(page, total_pages);

  for (let index = startOption; index <= endOption; index++) {
    options.push(index);
  }

  return (
    <nav className="flex items-center justify-between px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        {page > 3 && (
          <Link
            href={{ query: { ...query, page: 1 } }}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </Link>
        )}
        {page > 3 && (
          <Link
            href={{ query: { ...query, page: page - 1 } }}
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {options.map((current) => (
          <Link
            key={`pagination-option-${current}`}
            href={{ query: { ...query, page: current } }}
            className={twMerge(
              'inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
              current === page && 'inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600',
            )}
          >
            {current}
          </Link>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {page < total_pages && page < MAX_PAGE && (
          <Link
            href={{ query: { ...query, page: page + 1 } }}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        )}
        {page < (total_pages - 2) && page < (MAX_PAGE - 2) && (
          <Link
            href={{ query: { ...query, page: total_pages > MAX_PAGE ? MAX_PAGE : total_pages } }}
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pagination;
