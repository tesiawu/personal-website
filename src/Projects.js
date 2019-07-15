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
          <CardDeck>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #1</Card.Footer>
            </Card>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #2</Card.Footer>
            </Card>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #3</Card.Footer>
            </Card>
          </CardDeck>
          <br/>
          <CardDeck>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #1</Card.Footer>
            </Card>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #2</Card.Footer>
            </Card>
            <Card className="card" fluid>
              <Card.Img style={{borderRadius: 0}} src={Test} />
              <Card.Footer className="card-title">Project #3</Card.Footer>
            </Card>
          </CardDeck>
        </div>

        <footer>
        <Footer className="footer"/>
        </footer>
      </div>
    )
  }
}
