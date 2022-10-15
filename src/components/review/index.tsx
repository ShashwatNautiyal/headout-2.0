import React from 'react'
import style from "./reviews.module.css"
import Star from './star'

const Review = (props: any) => {
  const { review } = props

  const { profile_image, profile_name, review: reviewText } = review
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
            </div>
    </div>
  )
}

export default Review