import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/Hero.png';
import Add1 from '../images/SliderPoster1.png'
import Add2 from '../images/SliderPoster2.png'
import Add3 from '../images/SliderPoster3.png'
import Add4 from '../images/SliderPoster4.png'


const Addbanner = () => {
  return (
    <Carousel style={{ height: '54vh' }}>

<Carousel.Item>
        <img alt='firstAdd'
          src={Add4}
          style={{ objectFit: 'cover', width: '100%'}}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img alt='firstAdd'
          src={Add1}
          style={{ objectFit: 'cover', width: '100%'}}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img alt='secondAdd '
          src={Add2}
          style={{ objectFit: 'cover', width: '100%'}}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img alt='thirdAdd'
          src={Add3}
          style={{ objectFit: 'cover', width: '100%'}}
        />
      </Carousel.Item>

      
      

      
    </Carousel>
  );
}

export default Addbanner;
