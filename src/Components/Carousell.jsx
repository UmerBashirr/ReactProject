import Carousel from 'react-bootstrap/Carousel';
import './Header.css';
function Carosel() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        
        <div className='slide col-sm-6'>
          <h2 >
          The Mighty ED6 is Back.
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores hic sint nulla praesentium sunt. Aut harum qui consequuntur nemo! Dolorem reprehenderit fuga, in quia quod expedita qui voluptate repellat eligendi!</p>
        </div>
        <div className='image '>
        <img
          className="d-block w-50"
          height={600}
          src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic1-1.png"
          alt="First slide"
        />
        </div>
        
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          height={550} 
          src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-slider-pic2.png"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Carosel;