import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GoogleMap from '../home/GoogleMap';
import Link from 'next/link';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1552260300-5dadefa40269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    packageSrc:
      'https://www.headout.com/london-eye-tickets/standard-experience-tickets-to-the-london-eye-e-3336/',
    caption: 'Best Things To Do In London!'
  },
  {
    url: 'https://images.thrillophilia.com/image/upload/s--uCLdCIz---/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/111/500/original/1597302172_shutterstock_1218573694.jpg.jpg',
    packageSrc:
      'https://www.headout.com/skydive-sydney-tickets/tandem-skydive-wollongong-15000-ft-e-10351/',
    caption: 'Best Things To Do In Dubai!'
  },

  {
    url: 'https://images.unsplash.com/photo-1605443791607-80a259dd3c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    packageSrc: 'headout.com/paris-disneyland-tickets/disneyland-paris-1-day-ticket-e-10209/',
    caption: 'Best Things To Do In Paris!'
  },
  {
    url: 'https://images.unsplash.com/photo-1508597370841-836e72ef6f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    packageSrc:
      'https://www.headout.com/gardens-by-the-bay-tickets/gardens-by-the-bay-direct-entry-tickets-e-7358/',
    caption: 'Best Things To Do In Singapore!'
  }
];

const imgStyle = {
  width: '100%',
  height: '550px'
};

const style = {
  marginLeft: '60px',
  top: '10%',
  height: '40%',
  width: '25%',
  color: 'white',
  position: 'absolute',
  fontWeight: 'bold',
  fontSize: '3em',
  textAlign: 'left'
};

const CaraouselHome = () => {
  return (
    <Carousel
      swipeable={true}
      showArrows={true}
      autoPlay={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
    >
      {images.map((image, index) => {
        return (
          <>
            <div key={index}>
              <img src={image.url} style={imgStyle} />
              <Link href={'/packages'}>
                <a className='legend' style={{ width: '15%', fontSize: '0.8em' }}>
                  View Package
                </a>
              </Link>
            </div>
            <div style={style}>
              <p>{image.caption}</p>
            </div>
          </>
        );
      })}
      <GoogleMap />
    </Carousel>
  );
};

export default CaraouselHome;
