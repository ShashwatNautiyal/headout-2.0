import { useState } from 'react';
import { classNames } from '../../../utils/helpers';

import { User } from '../../../utils/types/user';
import Image from '../../Image';
import PrimaryButton from '../../PrimaryButton';

type SidebarProps = {
  data: User | undefined;
};

export const Sidebar = (props: SidebarProps) => {
  const { data } = props;

  const [isFollowing, setIsFollowing] = useState(false);

  const stories = data?.tags?.aggregated.filter((item) => item.source !== undefined).slice(0, 12);

  const imageCustomStyles = {
    borderRadius: '9999px',
    border: '2px solid #cccccc',
    padding: '2px'
  };

  const userProfileCustomStyles = {
    borderRadius: '9999px',
    border: '2px solid black',
    padding: '2px'
  };

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

  const BADGE = ['Nomad', 'Wanderer', 'Explorer', 'Traveller'];

  return (
    <div className='flex flex-col xl:w-[400px] lg:w-[300px] w-full flex-shrink-0 pr-6 lg:h-fit lg:sticky lg:top-28 will-change-scroll'>
      <div className='flex flex-col items-center'>
        <div className='h-16 w-16'>
          <Image
            showBlur={false}
            imageCustomStyles={userProfileCustomStyles}
            urls={data?.profile_image}
            src={data?.profile_image?.medium ?? ''}
            loading='eager'
            alt={data?.name ?? 'photo'}
          />
        </div>
      </div>

      <div className='flex justify-between my-5'>
        <div className='flex flex-col text-center flex-1'>
          <p className='text-lg font-semibold'>{data?.total_photos}</p>
          <p className='text-gray-600'>{'Reviews'}</p>
        </div>

        <div className='flex flex-col text-center flex-1'>
          <p className='text-lg font-semibold text-green-500'>+{data?.followers_count}</p>
          <p className='text-gray-600'>{'Points'}</p>
        </div>

        <div className='flex flex-col text-center flex-1'>
          <p className='text-lg font-semibold'>{data?.following_count}</p>
          <p className='text-gray-600'>{'Places visited'}</p>
        </div>
      </div>
      <PrimaryButton
        onClick={() => {
          setIsFollowing((prev) => !prev);
        }}
        text={isFollowing ? 'Following' : 'Follow'}
        bgColor={isFollowing ? 'bg-white' : 'bg-blue-600'}
        textColor={isFollowing ? 'text-black' : 'text-white'}
        borderColor={isFollowing ? 'border-black' : 'border-transparent'}
      />

      <div className='mt-8'>
        <div className='flex items-center gap-2'>
          <h1 className='font-semibold'>{data?.name}</h1>
          <div
            className={classNames(
              badgeClassname[(data?.total_likes ?? 4) % 4],
              'text-xs font-medium  px-2 rounded-full w-fit h-fit'
            )}
          >
            {BADGE[(data?.total_likes ?? 4) % 4]}
          </div>
        </div>

        <h2 className='my-1'>{data?.bio}</h2>

        <a rel='noreferrer' href={data?.portfolio_url} target='_blank' referrerPolicy='no-referrer'>
          <p className='text-blue-600 whitespace-nowrap overflow-hidden xl:w-[380px] lg:w-[280px] w-full text-ellipsis'>
            {data?.social?.portfolio_url}
          </p>
        </a>
      </div>

      <div className='lg:grid lg:grid-cols-3 lg:gap-3 flex gap-10 overflow-scroll py-8'>
        {stories?.map(
          (tag, index) =>
            tag.source && (
              <div key={index} className='flex flex-col text-center gap-2'>
                <div className='h-16 w-16 mx-auto'>
                  <Image
                    imageCustomStyles={imageCustomStyles}
                    urls={tag.source.cover_photo.urls}
                    loading='eager'
                    alt={tag.title}
                    src={tag.source.cover_photo.urls.small}
                    showBlur={false}
                  />
                </div>
                <h3 className='text-sm'>{tag.title}</h3>
              </div>
            )
        )}
      </div>
    </div>
  );
};
