import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './AutoPlayMethods.module.css'

function AutoPlayMethods() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider className={styles.mainSlider} ref={slider => (sliderRef = slider)} {...settings}>
        <div className={styles.slideOne}>
          <div className={styles.productOne}>PRODUCT 1</div>
        </div>
        <div className={styles.slideTwo}>
          <h3>PRODUCT 2</h3>
        </div>
        <div className={styles.slideThree}>
          <h3>PRODUCT 3</h3>
        </div>
        <div className={styles.slideFour}>
          <h3>PRODUCT 4</h3>
        </div>
        <div className={styles.slideFive}>
          <h3>PRODUCT 5</h3>
        </div>
        <div className={styles.slideSix}>
          <h3>PRODUCT 6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
