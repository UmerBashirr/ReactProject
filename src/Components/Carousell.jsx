import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
 import  Button  from 'react-bootstrap/Button';
function Carosel() {
  return (
    <div>
    <Carousel variant="dark">
      <Carousel.Item className='section'>
        <div className='img'>
        <div className="main4">
        <p>- MONTHLY SPECIAL</p>
        <h1>A new model for designers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores a magni iure excepturi eius fuga laborum nisi. Laudantium laborum error omnis, quas nobis ipsum totam explicabo mollitia sequi accusantium?</p>
        <div className='main3'>
            <div className='card1'>
            <p>PROCESSOR</p>
            <h5>Intel Xeon W 2,5 GHz</h5>
            </div>
            <div className='card2'>
                <p>GRAPHICS CARD</p>
                <h5>AMD Radeon Vega</h5> 
            </div>
        </div>
            <Button variant="primary" className='rounded-pill'>See more Details</Button>
        </div>
        <div className="back">
        <img
          className="d-block w-30"
          src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic2.png"
          alt="First slide"
        />
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='section'>
      <div className='img'>
        <div className="main4">
        <p>- MONTHLY SPECIAL</p>
        <h1>A new model for designers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores a magni iure excepturi eius fuga laborum nisi. Laudantium laborum error omnis, quas nobis ipsum totam explicabo mollitia sequi accusantium?</p>
        <div className='main3'>
            <div className='card1'>
            <p>PROCESSOR</p>
            <h5>Intel Xeon W 2,5 GHz</h5>
            </div>
            <div className='card2'>
                <p>GRAPHICS CARD</p>
                <h5>AMD Radeon Vega</h5> 
            </div>
        </div>
            <Button variant="primary" className='rounded-pill'>See more Details</Button>
        </div>
        <div className="back">
        <img
          className="d-block w-30"
          src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic1-1.png"
          alt="Second slide"
        />
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carosel;