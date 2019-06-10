import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import logo1 from './assest/img.png';
import logo2 from './assest/img2.jpg';
import logo3 from './assest/img3.jpg';
import Container from '@material-ui/core/Container';
class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel style={{  height: '50vh' }}
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          Container 
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo1}
              style={{  height: '50vh' }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo2}
              alt="Third slide"
              style={{  height: '50vh' }}
            />
  
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src={logo3}
              alt="Third slide"
              style={{  height: '50vh' }}
            />
  
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       
      );
    }
  }
  export default ControlledCarousel;
  