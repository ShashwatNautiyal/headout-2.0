import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './packages.module.css';
import ReviewSection from '../../sections';
import AddReviewPopup from './AddReviewPopup';
import Star from '../review/star';
import { IconType } from 'react-icons';
import { BiMobileAlt } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import StreetViewAR from '../StreetViewAR';

const Packages = () => {
  const imgStyle = {
    borderRadius: '15px',
    width: '100%',
    height: '36em'
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Carousel
          swipeable={true}
          showArrows={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
        >
          <div>
            <img
              style={imgStyle}
              alt='img1'
              src='https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            />
          </div>
          <div>
            <img
              style={imgStyle}
              alt='img2'
              src='https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            />
          </div>
          <div>
            <img
              style={imgStyle}
              alt='img3'
              src='https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            />
          </div>
        </Carousel>
        <h2 style={{ color: '#444444' }} className='text-2xl mt-10'>
          Tandem Skydive Wollongong - 15,000 ft
        </h2>
        <div className='h-100 flex text-xl my-6'>
          <Star /> 4.9 ratings
        </div>

        <div className='flex gap-8 items-center'>
          <IconTitle Icon={BiMobileAlt} title={'Mobile Ticket'} />
          <IconTitle Icon={AiOutlineClockCircle} title={'Mobile Ticket'} />
          <StreetViewAR />
          <p>
          <IconTitle Icon={AiOutlineClockCircle} title={'View in AR'} />
          </p>
        </div>
        <div className='my-8 font-thin divide-y divide-dashed' style={{ color: '#444444' }}>
          Jump from 15,000 feet and freefall over Sydney in this thrilling one-of-a-kind experience.
          Get a bird’s-eye view of the city and its surroundings as you fall, and land on the
          Wollongong beach safely with the help of the highly-trained staff and state-of-the-art
          equipment. Please Note: We are the official reseller of Skydive Australia.
        </div>
        <ReviewSection />
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <img src={`/rightImage.png`} />
        </div>
        <div className={styles.rightBottom}></div>
        <AddReviewPopup />
      </div>
    </div>
  );
};

const IconTitle = ({ Icon, title }: { Icon: IconType; title: string }) => {
  return (
    <div className='flex text-gray-500 text-sm items-center font-light'>
      <Icon />
      <div className='ml-1'>{title}</div>
    </div>
  );
};

export default Packages;
