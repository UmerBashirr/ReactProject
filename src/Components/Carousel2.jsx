import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/esm/Button";

function Carousel2(){
    return(
        
        <Container>
          <Row >
            <Col>
            <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
            <Col className="main2">
            <h3>Black Friday Sale</h3>
            <h2>Upto 50% OFF</h2>
            <img src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop-home-pic1.png" alt="" />
            <h3>Sale starts on November 24th</h3>
            <Button variant="secondary">Secondary</Button>{' '}
            </Col>
            </Row>  
        </Container>
        
        
    
    );
}
export default Carousel2;