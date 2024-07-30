import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './AutoPlayMethods.module.css'

import ProductSlide from "../ProductSlide/ProductSlide";

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
        <ProductSlide img={"https://static.zara.net/assets/public/a645/fa72/7f1e426f8b12/c3eb80f2e677/01165787250-e1/01165787250-e1.jpg?ts=1712737330923&w=824"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
        <ProductSlide img={"https://static.zara.net/assets/public/8452/3b11/43ff478fb1aa/70cde93bcad0/02224664807-e1/02224664807-e1.jpg?ts=1710245015382&w=824"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
        <ProductSlide img={"https://static.zara.net/assets/public/8dab/9d0a/8fc740f09501/fc5d6cd95f83/06224419800-e2/06224419800-e2.jpg?ts=1706026602704"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
        <ProductSlide img={"https://static.zara.net/assets/public/38a0/8f65/24c0491f94bb/19a033c4d973/01716381640-e1/01716381640-e1.jpg?ts=1710949543829"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
        <ProductSlide img={"https://static.zara.net/assets/public/0d59/bbe8/f37646f290e2/0ce10cc56438/07878534806-e1/07878534806-e1.jpg?ts=1708589938887&w=824"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
        <ProductSlide img={"https://static.zara.net/assets/public/aa04/249a/248a4d7fb4ec/4817ae580cf3/06668538707-e1/06668538707-e1.jpg?ts=1707468759807&w=824"} title={'Black Hearted T-Shirt'} price={'$29.99'} link={'/shop'} />
      </Slider>
      <div style={{ textAlign: "center" }}>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
