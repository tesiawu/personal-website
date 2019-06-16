import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TypeWriter from 'react-typewriter'
import Navigation from './NavBar';
import Header from './Header'
import {Container, Row, Col} from 'react-bootstrap/'
import './css/style.css'

export default class Home extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */


  render () {

    return (
      <div>

        <Container>
          <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}> First col </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}> Second col </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
