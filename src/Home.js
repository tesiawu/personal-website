import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TypeWriter from 'react-typewriter'
import Header from './Header'

export default class Home extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */

  render () {

    return (
      <div>
        <Header />
      </div>
    )
  }
}