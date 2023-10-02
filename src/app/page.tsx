import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ActorsImage from '@/assets/actors.jpg';

const Home: FC = () => {
  return (
    <main className="flex flex-1 items-center justify-center p-24">
      <section className='flex flex-col text-center w-full max-w-6xl'>
        <h1 className='text-7xl'>Welcome to cine verse</h1>
        <div className='grid grid-cols-3 gap-x-4 sm:gap-x-6 xl:gap-x-8 mt-16'>
          <Link href='/movies' className='flex'>
            <div className='flex flex-col flex-1 items-center p-6 rounded-lg text-center bg-red-800 text-white border border-gray-600'>
              <h2 className='text-5xl'>
                Movies
              </h2>
              <Image
                className='mt-auto'
                src={ActorsImage}
                width={300}
                height={300}
                alt='picture of actors'
              />
            </div>
          </Link>
          <Link href='/series' className='flex'>
            <div className='flex flex-col flex-1 items-center p-6 rounded-lg text-center bg-green-500 text-black border border-gray-600'>
              <h2 className='text-5xl'>
                Series
              </h2>
              <Image
                className='mt-auto'
                src={ActorsImage}
                width={300}
                height={300}
                alt='picture of actors'
              />
            </div>
          </Link>
          <Link href='/actors' className='flex'>
            <div className='flex flex-col flex-1 items-center p-6 rounded-lg text-center bg-yellow-300 text-black border border-gray-600'>
              <h2 className='text-5xl'>
                Actors / Actresses
              </h2>
              <Image
                className='mt-auto'
                src={ActorsImage}
                width={300}
                height={300}
                alt='picture of actors'
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
