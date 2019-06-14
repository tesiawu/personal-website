import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TypeWriter from 'react-typewriter'
import Navigation from './NavBar';
import Header from './Header'
import './css/style.css'

export default class Home extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */


  render () {

    return (
      <div>
        <h1>
          <Header />
        </h1>
      </div>
    )
  }
}
