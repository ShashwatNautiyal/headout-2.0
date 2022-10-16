import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Search } from '../../utils/types/search';
import Image from '../Image';
import style from './reviews.module.css';
import Star from './star';

const UNSPLASH_API_KEY = 'pRrZXfPJRI3fi3Bo5s8gwJz7VGgaRh3ZAGapWAaO2vA';
const Review = (props: any) => {
  const { review } = props;
  const { profile_image, profile_name, review: reviewText, location } = review;
  const [data, setData] = useState<Search | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.unsplash.com/search/photos?per_page=3&query=${
          location ?? 'india'
        }&client_id=${UNSPLASH_API_KEY}`
      ).then((res) => res.json());
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className='my-16'>
      <div className={style.profile}>
        <div className={style.profile__image}>
          <img
            src={profile_image}
            alt='profile-pic'
            className='h-[40px] w-[40px] border rounded-full object-cover'
          />
        </div>
        <div className={style.profile__name}>
          <h3>{profile_name}</h3>
          <div className={style.profile__rating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
      <div className={style.review}>
        {reviewText}
        <div className='grid grid-cols-3 gap-3 mt-7'>
          {data?.results.map((image, idx) => (
            <Link key={idx} href={`/gallery?location=${location}`}>
              <Image
                alt='img'
                src={image.urls.small}
                loading='eager'
                className='hover:scale-110 transition-transform duration-300 cursor-pointer'
                imageCustomStyles={{ width: 300, height: 200 }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
