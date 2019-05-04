import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, Row, Col, ButtonToolbar, Button} from 'react-bootstrap'
import './css/contactStyle.css'

export default class Contact extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */

  render () {

    return (
      <div>
        <div className='title'>
          <h1>Contact Me</h1>
        </div>

        <div className='formInputs'>
          <Form>
            <Row>
              <Col>
              <Form.Group controlId="formName">
                <Form.Control placeholder="Name" />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              </Col>
            </Row>
            
            <Form.Group controlId="formMessage">\
              <Form.Control as="textarea" rows="10" placeholder="Type your message" />
            </Form.Group>
          </Form>

          <ButtonToolbar className='button'>
          <Button variant="outline-light">Send</Button>
          </ButtonToolbar>
        </div>


      </div>
    )
  }
}