import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Carousel, Glyphicon, Col } from 'react-bootstrap';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    
    return (
        <Carousel>
          <Carousel.Item>
            <img width={1200} height={500} alt="1200x500" src="http://www.johnpaulpetschool.com/wp-content/uploads/2015/03/black-background1.jpg"/>
            <Carousel.Caption>
              <h3>{this.props.message}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1200} height={500} alt="1200x500" src="http://www.johnpaulpetschool.com/wp-content/uploads/2015/03/black-background.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1200} height={500} alt="1200x500" src="https://www.unwinedpainting.com/wp-content/uploads/2015/01/dark-rustic-wood-background.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
