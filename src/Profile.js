import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';

export default class Profile extends Component {
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

    return (
      <div>
        <div className='container-profile'>

        </div>
        <div class="col-1">
        1
        </div>
        <div class="col-2">
        2
        </div>

        <footer>
        <Footer className="footer"/>
        </footer>

      </div>
    )
  }
}
