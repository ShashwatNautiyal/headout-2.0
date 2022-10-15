import { HiOutlineTicket } from 'react-icons/hi';
import { classNames } from '../../../utils/helpers';
import { UserPhoto } from '../../../utils/types/userphoto';
import Image from '../../Image';

import reviews from '../../../reviews.json';

export const ProfileFeed = ({ userPhotos }: { userPhotos?: UserPhoto[] }) => {
  if (userPhotos && userPhotos.length === 0) {
    return <p className='text-lg'>This user has not posted anything yet</p>;
  }

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 pl-4 gap-5 max-w-[1500px]'>
        {userPhotos?.map((photo, index) => (
          <div key={photo.id} className='relative min-h-full min-w-full aspect-square'>
            <Image
              blurHash={photo.blur_hash}
              loading='eager'
              alt={photo.alt_description ?? ''}
              objectFit='cover'
              src={photo.urls.small}
              urls={photo.urls}
              showBlur={false}
              className={classNames('block h-full w-full cursor-pointer')}
            />
            <div className='absolute top-0 flex flex-col justify-end w-full h-full bg-transparent hover:bg-black/50 transition-[background] font-medium text-base hover:backdrop-blur-sm group p-4 cursor-pointer'>
              <div className='flex flex-col gap-2 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 text-white transition-[opacity, background] duration-500'>
                <div className='h-fit'>
                  <div className='text-base leading-5 font-medium'>
                    {reviews[index % 3].description?.length > 100
                      ? reviews[index % 3].description?.substring(0, 100).concat('...')
                      : reviews[index % 3].description}
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
    </div>
  );
};
