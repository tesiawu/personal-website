import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, Row, Col} from 'react-bootstrap'

export default class Contact extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */

  render () {

    return (
      <div className='container'>

        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
        </Form>

      </div>
    )
  }
}