import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';
import './css/style.css'
import {Container, Row, Col} from 'react-bootstrap'
import {CardDeck, Card} from 'react-bootstrap'
import Test from './photos/Unknown.jpg'

export default class Projects extends Component {
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
      <div className='container'>
        <div className="project-container">
          <h1 style={{color:'white', textAlign:'center'}}>Projects</h1>
          <br/>
          <div>
            <Container>
              <Row>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #1</Card.Footer>
              </Col>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img className="" style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #2</Card.Footer>
              </Col>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #3</Card.Footer>
              </Col>
              </Row>
              <br/>
              <Row>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #4</Card.Footer>
              </Col>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #5</Card.Footer>
              </Col>
              <Col xs={6} md={4}>
                <Card className="card card-image" fluid>
                  <Card.Img style={{borderRadius: 0}} src={Test} />
                </Card>
                <Card.Footer className="card-title">Project #6</Card.Footer>
              </Col>
              </Row>
            </Container>
          </div>
        </div>

        <footer>
        <Footer className="footer"/>
        </footer>
      </div>
    )
  }
}
