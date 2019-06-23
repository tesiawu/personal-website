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
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }} className="center">
            <div>
              <Image src={TesiaPic} className="tesia-pic" responsive fluid/>
            </div>
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }} >

            <div className="white-box">
              <div className="home-intro">
                <p></p>
                <h1 className="home-intro-hey">Hey there!</h1>
                <p></p>
                <p>
                  Welcome to my section of the Internet where you'll get to see
                  a glimpse of who I am, professionally as well as personally.
                </p>
                <p>
                  I'm a proud <a href="https://www.texasexes.org/" className="texas-ex-link">Texas Ex</a>
                  &nbsp;(Hook 'em Horns!) and a software engineer loves to code.
                  I also love watching movies (especially those of the &nbsp;
                  <a href="https://www.marvel.com/movies" className="marvel-link">Marvel Cinematic Universe</a>), dabbling in photography,
                  playing the <a href="https://www.tmea.org/programs/all-state/history?skip=0&organization=*&instrument=*&school_op=eq&school=Martin%20HS&city_op=eq&city=&submit=Search" className="violin-link">violin</a>,
                  and just having fun.
                </p>
                <p>
                So whoever you are, whether you're someone who happened upon my
                website, a stranger I have yet to meet, or a friend who's
                checking up on me, I hope you learn a little more about me. Enjoy your stay!
                </p>
                <br></br>
                <a href="/profile" className="read-more-link">Get to know me —</a>
                <br></br>
                <br></br>
              </div>
            </div>
          </Col>
          </Row>
        </Container>


        <footer>
        <Footer className="footer"/>
        </footer>
      </div>

    )
  }
}
