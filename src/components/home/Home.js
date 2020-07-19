import React from "react";
import "./home.css";
import Product from "../products/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB409152101_.jpg"
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB428684222_.jpg"
        alt="amazon banner"
      />
      {/* Product id, title, rating, image */}
      <div className="home__row">
        <Product
          id="123456218"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          image="https://images-eu.ssl-images-amazon.com/images/I/71VeHhcq9PL._AC_UL320_SR320,320_.jpg"
          price={89.99}
          rating={4}
        />

        <Product
          id="123456300"
          title="Braun Series 7 Electric Shaver for Men with Beard Trimmer"
          image="https://m.media-amazon.com/images/I/41nAa2+I8cL._AC_SY480_.jpg"
          price={174}
          rating={5}
        />

        <Product
          id="123456390"
          title="Womens Walking Shoes Trainers"
          image="https://images-na.ssl-images-amazon.com/images/I/51Mqs8ccOcL._AC_.jpg"
          price={29.99}
          rating={4}
        />

        <Product
          id="123456280"
          title="Apple iPhone 11 (128GB) - Black"
          image="https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_UY436_FMwebp_QL65_.jpg"
          price={779.00}
          rating={5}
        />
      </div>
      {/* Product 2*/}
      <div className="home__row">
        <Product
          id="123456209"
          title="Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)"
          image="https://m.media-amazon.com/images/I/71jN27mYlhL._AC_UY436_FMwebp_QL65_.jpg"
          price={349.99}
          rating={5}
        />
        <Product
          id="123456212"
          title="N/O 5PCS Unisex Bandana Reusable Face Mask"
          image="https://m.media-amazon.com/images/I/61ilJrPQczL._AC_UL640_FMwebp_QL65_.jpg"
          price={4.79}
          rating={4}
        />
        <Product
          id="123456012"
          title="Apple MacBook Pro (15-inch, 16GB RAM, 512GB Storage, 2.3GHz Intel Core i9) - Space Grey"
          image="https://m.media-amazon.com/images/I/61iVOmuO1pL._AC_UY436_FMwebp_QL65_.jpg"
          price={2192.91}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="123456462"
          title="Samsung LC49J890DKUXEN 49inches Curved Ultra Wide LED Monitor - Super UltraWide 3840 x 1080, 144Hz, HDMI, Displayport, USB-C, Speakers"
          image="https://m.media-amazon.com/images/I/71RC3o90shL._AC_UY436_FMwebp_QL65_.jpg"
          price={1117.58}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
