import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/Hero.png';

const Hero1 = () => {
  return (
    <Carousel style={{ height: '120vh' }}>
      <Carousel.Item>
        <img alt='First Slider '
          src={Hero}
          style={{ objectFit: 'cover', width: '100%'}}
        />
      </Carousel.Item>

      
      

      
    </Carousel>
  );
}

export default Hero1;
