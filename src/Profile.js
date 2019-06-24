import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Profile extends Component {
  /**
   * Builds and renders the card containing the party image and basic
   * information
   */
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    let retVal = setInterval(function() {
      if ( this.state.progress >= 80){
        clearInterval(retVal)
        return;
      }
      this.setState({
        progress: this.state.progress + 10});


      }.bind(this), 100);

  }

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

          <Container>
            <Row>
              <Col xs={4}>
                Teehee
              </Col>
              <Col xs={8}>
                ajlskdfadf;j
              </Col>
            </Row>
          </Container>
        </div>

        <div class="col-2">
          <div>
            <h1>Where I've Worked</h1>
          </div>
          <Container>
            <Row>
              <Col xs={4}>
                Teehee
              </Col>
              <Col xs={8}>
                ajlskdfadf;j
              </Col>
            </Row>
          </Container>
        </div>

        <div class="col-1">
          <Container>
            <Row>
              <Col xs={12}>
                <ProgressBar now={this.state.progress} class="progress-bar" label={`${this.state.progress}%`} style={{height: 15}} />
              </Col>
            </Row>
          </Container>
        </div>

        <footer>
        <Footer className="footer"/>
        </footer>

      </div>
    )
  }
}
