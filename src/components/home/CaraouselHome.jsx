import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GoogleMap from '../home/GoogleMap';

const images = [
    {
        url: "https://images.thrillophilia.com/image/upload/s--uCLdCIz---/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/111/500/original/1597302172_shutterstock_1218573694.jpg.jpg",
        packageSrc: "https://www.headout.com/vatican-tickets-c-189/"
    },
    { url: "https://images.unsplash.com/photo-1552260300-5dadefa40269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { url: "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" },
    { url: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" },
];

const imgStyle = {
    borderRadius: "15px",
    width: "100%",
    height: "550px"
};

const CaraouselHome = () => {
    return (
        <Carousel swipeable={true} showArrows={false} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true}>
            {
                images.map((image, index) => {
                    return (
                        <div key={index} >
                            <img src={image.url} style={imgStyle} />
                            <a className="legend" style={{ width: "15%", fontSize: "0.8em" }} href={image.packageSrc}>View Package</a>
                        </div>
                    )
                })
            }
            <GoogleMap />
        </Carousel>
    );
}

export default CaraouselHome;