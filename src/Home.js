import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TypeWriter from 'react-typewriter'
import Navigation from './NavBar';
import Header from './Header'
import {Container, Row, Col} from 'react-bootstrap/'
import './css/style.css'
import Image from 'react-bootstrap/Image'
import TesiaPic from './photos/tesia.jpeg'
import Footer from './Footer';

export default class Home extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */


  render () {

    return (
      <div>
        <Container className="intro-container">
          <Row>
          <Col xs={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }} className="col1">
            <div>
              <Image src={TesiaPic} className="tesia-pic" responsive />
            </div>
          </Col>
          <Col xs={{ span: 6, order: 2 }} md={{ span: 6, order: 2 }} className="col2">
            Second Col
          </Col>
          </Row>
        </Container>



        <div>
        <Footer />
        </div>
      </div>

    )
  }
}
