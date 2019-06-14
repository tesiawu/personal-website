import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselPic extends React.Component {

  render() {
    return (
    	<div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://stmed.net/sites/default/files/landscape-wallpapers-27931-106062.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
