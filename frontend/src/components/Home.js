import React from 'react';
import fille from "./HomeMedia/fille.jpg";
import fille1 from "./HomeMedia/fille1.jpg";
import bobble from "./HomeMedia/bobble.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
<div className='first'>
    <div className='ConTent'>
      <div className='textbox'> 
      <h1 className='h1'>Shape of candles</h1> 
            <span className='span'>Végétale et Naturelle</span>
            <br/>
            <p>Cet bougie est fabriquée par le cire de soja, extrait d'une plante originaire d'Asie que l'on utilise aussi bien pour l'agriculture que dans l'alimentation végétale pour sa richesse en protéines et ses nombreux bienfaits. 
                Sa cire est donc idéale pour créer des bougies.</p>
        </div>
    <div class= "imgBox">
    <Carousel>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src={fille}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src={fille1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img 
          className="d-block w-100"
          src={bobble}
          alt="Third slide"
        />
      </Carousel.Item>
     
    </Carousel>
    </div>
    
  </div>

    </div>
  )
}

export default Home;