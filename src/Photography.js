import React, {Component} from 'react'
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import {Link} from 'react-router-dom'

export default class Photography extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */

  render () {
    const styles = {
      imgStyle: {
        width: '50%'
      },
      itemHeader: {
        marginRight: '5px'
      }
    }

    const photos = [
      {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        width: 1,
        height: 1
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4
      },
    ]


    return (
      <div className='container'>

        <Gallery photos={photos} />
      </div>
    )
  }
}



