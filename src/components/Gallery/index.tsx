import React from 'react';
import { classNames } from '../../utils/helpers';
import { Search } from '../../utils/types/search';
import Image from '../Image';
import { HiOutlineTicket } from 'react-icons/hi';

import reviews from '../../reviews.json';
import Link from 'next/link';

export const Gallery = ({ searchResults }: { searchResults: Search }) => {
  const { results } = searchResults;

  const nomadBadgeClassname = 'text-green-700 bg-green-200';
  const wanderBadgeClassname = 'text-yellow-700 bg-yellow-200';
  const explorerBadgeClassname = 'text-blue-700 bg-blue-200';
  const travelerBadgeClassname = 'text-red-700 bg-red-200';

  const badgeClassname = [
    nomadBadgeClassname,
    wanderBadgeClassname,
    explorerBadgeClassname,
    travelerBadgeClassname
  ];

  const BADGE = ['Nomad', 'Wander', 'Explorer', 'Traveller'];

  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 w-full mb-8'>
      {results?.map((resultPhoto, index) => (
        <div
          key={resultPhoto.id}
          className={classNames(
            index === 0 || index % 11 === 0 ? 'col-span-2 row-span-2' : 'col-span-1',
            'relative overflow-hidden'
          )}
        >
          <Image
            loading='eager'
            showBlur={false}
            src={resultPhoto.urls.regular}
            urls={resultPhoto.urls}
            className={classNames('h-full w-full aspect-square relative cursor-pointer lg:block')}
            alt={resultPhoto.description}
          />
          <div className='absolute top-0 flex flex-col justify-end w-full h-full bg-transparent hover:bg-black/50 transition-[background] font-medium text-base hover:backdrop-blur-sm group p-4 cursor-pointer'>
            <div className='flex flex-col gap-2 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 text-white transition-[opacity, background] duration-500'>
              <Link href={`/user/${resultPhoto.user.username}`}>
                <div className='flex items-center gap-2 hover:bg-black/25 px-1 py-2 rounded-md w-fit'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={resultPhoto.user.profile_image.medium}
                    alt={resultPhoto.user.name}
                  />
                  <div className='flex flex-col'>
                    <div className='text-lg font-medium'>{resultPhoto.user.name}</div>
                    <div
                      className={classNames(
                        badgeClassname[index % 4],
                        'text-xs font-medium  px-2 rounded-full w-fit'
                      )}
                    >
                      {BADGE[index % 4]}
                    </div>
                  </div>
                </div>
              </Link>
              <div className='h-fit'>
                <div className='text-base leading-5 font-medium'>
                  {resultPhoto.description?.length > 100
                    ? resultPhoto.description?.substring(0, 100).concat('...')
                    : resultPhoto.description}
                </div>
                <div className='text-sm font-semibold mt-2 flex items-center gap-1'>
                  <HiOutlineTicket className='-rotate-[45deg] h-4 w-4' />
                  {reviews[index % 3].package}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
