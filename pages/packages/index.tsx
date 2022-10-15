import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "./packages.module.css"
import ReviewSection from '../../src/sections';

const Packages = () => {
    const imgStyle = {
    borderRadius: "15px",
    width: "100%",
    height: '36em'
};
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Carousel
          swipeable={true} showArrows={false} autoPlay={true} showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true}
      >
                <div>
                    <img style={imgStyle} alt="img1" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
                </div>
                <div>
                    <img style={imgStyle} alt="img2" src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
                <div>
                    <img style={imgStyle} alt="img3" src="https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
                </div>
                </Carousel>
                <ReviewSection />
            </div>
            <div className={styles.right}>
                <div className={styles.rightTop}>
                    <div className={styles.rightTopText}> Get 10% off with your Headout coins</div>
                    <div className={styles.rightTopContent}>
                        <h2>$40</h2>
                    </div>
                </div>
                <div className={styles.rightBottom}>
                </div>
            </div>
        </div>
        );
}

export default Packages