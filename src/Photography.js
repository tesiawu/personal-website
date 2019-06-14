import React, {Component} from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import {Link} from 'react-router-dom';

 const photos = [
  { src: 'https://i.imgur.com/DwoZJFb.jpg', width: 5, height: 10 },
  { src: 'https://i.imgur.com/u13nYMR.jpg', width: 1, height: 1 },
  { src: 'https://i.imgur.com/7NTmlhb.jpg', width: 5, height: 9 },
  { src: 'https://i.imgur.com/9WN7QZE.jpg', width: 3, height: 4 },
  { src: 'https://i.imgur.com/bbZkBj3.jpg', width: 3, height: 4 },
  { src: 'https://i.imgur.com/WDZyZxW.jpg', width: 4, height: 5 },
  { src: 'https://i.imgur.com/X9xV2LE.jpg', width: 9, height: 14 },
  { src: 'https://i.imgur.com/DCoP6kr.jpg', width: 3, height: 4 },
  { src: 'https://i.imgur.com/Q7554z3.jpg', width: 5, height: 6 },
  { src: 'https://i.imgur.com/OHg1cDa.jpg', width: 4, height: 6 }
];

export default class Photography extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
    

  render () {
    const styles = {
      imgStyle: {
        width: '50%'
      },
      itemHeader: {
        marginRight: '5px'
      }
    }

    return (

      <div className='container'>
      	<h1 style={{color:'white'}}>Photography</h1>
      	<p></p>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        
      </div>
    )
  }
}

