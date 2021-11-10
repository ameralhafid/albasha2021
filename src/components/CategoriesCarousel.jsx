import React from 'react'
import pizza from '../static/images/pizza.jpg'
import drinks from '../static/images/drinks.jpg'
import manakisch from '../static/images/käse.jpg'
import breakfast from '../static/images/Frühstück.jpg'
import sandwich from '../static/images/shawrma.jpg'
import dish from '../static/images/teller.jpg'
import vorspeisen from '../static/images/vorspeisen.jpg'
import eis from '../static/images/Eis.jpg'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CategoriesCarousel() {



 

  return (
          <Carousel
       
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
        <>
        <img src={manakisch} alt="manakisch" />
        <div className="myCarousel">
          <h3>Manakisch</h3>
        </div>            
                       
      </>
      <>
        <img src={breakfast} alt="manakisch" />
        <div className="myCarousel">
          <h3>Frühstück</h3>
        </div>
      </>
      <>
        <img src={pizza} alt="manakisch" />
        <div className="myCarousel">
          <h3>Pizza</h3>
        </div>
      </>
      <>
        <img src={sandwich} alt="manakisch" />
        <div className="myCarousel">
          <h3>Sandwiches</h3>
        </div>
      </>
      <>
        <img src={dish} alt="manakisch" />
        <div className="myCarousel">
          <h3>Gerichte</h3>
        </div>
      </>
      <>
        <img src={vorspeisen} alt="manakisch" />
        <div className="myCarousel">
          <h3>vorspeisen</h3>
        </div>
      </>
      <>
        <img src={drinks} alt="manakisch" />
        <div className="myCarousel">
          <h3>Getränke</h3>
        </div>
      </>
      <>
        <img src={eis} alt="manakisch" />
        <div className="myCarousel">
          <h3>Süßigkeiten & Eis</h3>
        </div>
      </>
      </Carousel>
    )
}