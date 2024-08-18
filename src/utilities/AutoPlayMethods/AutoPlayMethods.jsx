import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './AutoPlayMethods.module.css'

import ProductSlide from "../ProductSlide/ProductSlide";
import ShopInventory from '../shop-stock.json'

function AutoPlayMethods() {
  // eslint-disable-next-line no-unused-vars
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
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-t-shirt.jpg"} title={ShopInventory.menswear[0].title} price={ShopInventory.menswear[0].price} link={'/shop/menswear/6'} />
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/womenswear/women-dress.jpg"} title={ShopInventory.womenswear[0].title} price={ShopInventory.womenswear[0].price} link={'/shop/womenswear/1'} />
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-shoes.jpg"} title={ShopInventory.menswear[2].title} price={ShopInventory.menswear[2].price} link={'/shop/menswear/8'} />
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/womenswear/women-shirt.jpg"} title={ShopInventory.womenswear[1].title} price={ShopInventory.womenswear[1].price} link={'/shop/womenswear/2'} />
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/menswear/men-pants.jpg"} title={ShopInventory.menswear[1].title} price={ShopInventory.menswear[1].price} link={'/shop/menswear/7'} />
        <ProductSlide img={"https://raw.githubusercontent.com/cbd23/shopping-cart/main/src/images/shop-stock/kidswear/kids-sunglasses.jpg"} title={ShopInventory.kidswear[4].title} price={ShopInventory.kidswear[4].price} link={'/shop/kidswear/15'} />
      </Slider>
      <div style={{ textAlign: "center" }}>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
