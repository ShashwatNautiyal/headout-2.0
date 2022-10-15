import React from 'react'
import Review from '../components/review'

const allReview = [
    {
        review: 'Very clear communication from the point of purchase to the pick-up. The driver was very friendly and helpful. The car was clean and comfortable. The driver was very friendly and helpful. The car was clean and comfortable.',
        profile_image: 'https://static.toiimg.com/photo/65675521.cms',
        profile_name: 'John Doe',
        location: 'New York',
    },
    {
        review: 'My experience with headout was good. Not sure if it would have been possible to improve our experience at the theater but our seats only allowed us to view less than half of the stage. If possible I would have loved more information about the view from our seats. Would have paid more to be able to see the performance. Otherwise it would have been a great experience.',
        profile_image: 'https://static.toiimg.com/photo/72359999.cms',
        profile_name: 'Mikchael Hussey',
        location: 'Japan',
    },
    {
        review: 'Fantastic experience and show. A real live music experience. As I am not totally fluent in English I thought it would be a bit frustrating not to understand all script. But not, as songs take a big part of the session.',
        profile_image: 'https://www.mrdustbin.com/en/wp-content/uploads/2021/03/Suriya-1024x1010.jpg',
        profile_name: 'Tony Stark',
        location: 'China',
    }
]

const ReviewSection = () => {
    return (
        <>
            {
          allReview.map((review:any, index:number) => (
                    <Review key={index} review={review} />
                ))
      }
        </>
  )
}

export default ReviewSection