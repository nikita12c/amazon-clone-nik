import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

        <div className="home__row">
          <Product
            id={121}
            title="30 Women in Power: Their Voices, Their Stories Paperback – 20 July 2016"
            price={297.00}
            image="https://images-na.ssl-images-amazon.com/images/I/51KsVg0V5hL._SX322_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={122}
            title="Edict by Boat ETWS01 True Wireless Earbuds with Easy Tap Controls, Bluetooth V5.0, Up to 14H Playback with Case, Engaging Sound and Instant Voice Assistant(Black)"
            price={1299.10}
            image="https://images-na.ssl-images-amazon.com/images/I/61VevlF1FHL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={123}
            title="Sony MDR-XB450 On-Ear EXTRA BASS Headphones (Black)"
            price={2074.20}
            image="https://images-na.ssl-images-amazon.com/images/I/61Wk9UGLaUL._SL1186_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={124}
            title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
            price={41999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={125}
            title="Mi TV 4A Horizon Edition 108cm (43 inches) Full HD Android LED TV (Black)"
            price={22998.00}
            image="https://images-na.ssl-images-amazon.com/images/I/71JvCXIbkwL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={126}
            title="Carry Bird 3 Seater Sofa Set for Home and Living Room Sofa (Standard, Maroon)"
            price={11999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/4108M7Trp1L._SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
