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
      JavaProgress: 0,
      PythonProgress: 0
    };
  }

  componentDidMount() {
    let JavaRetVal = setInterval(function() {
      if ( this.state.JavaProgress >= 80){
        clearInterval(JavaRetVal)
        return;
      }
      this.setState({
        JavaProgress: this.state.JavaProgress + 10});
      }.bind(this), 100);

    let PythonRetVal = setInterval(function() {
      if ( this.state.PythonProgress >= 60){
        clearInterval(PythonRetVal)
        return;
      }
      this.setState({
        PythonProgress: this.state.PythonProgress + 10});
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

        <div className="experience-container" responsive fluid>
          <div>
            <h1>Experience</h1>
          </div>
          <Container className="experience-row">
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 1 }}>
                <div>
                  <h5 className="date-headings">Aug 2019 - Present</h5>
                  Sunnyvale, California
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }}>
                <div>
                  <h3 className="profile-headings">LinkedIn</h3>
                  <p className="position-font">Software Engineer</p>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 1 }}>
                <div>
                  <h5 className="date-headings">Aug 2015 - May 2019</h5>
                  Austin, Texas
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }}>
                <div>
                  <h3 className="profile-headings">The University of Texas at Austin</h3>
                  <p className="position-font">Bachelor of Science in Computer Science</p>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 1 }}>
                <div>
                  <h5 className="date-headings">May 2018 - Aug 2018</h5>
                  Sunnyvale, California
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }}>
                <div>
                  <h3 className="profile-headings">LinkedIn</h3>
                  <p className="position-font">Software Engineering Intern</p>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 1 }}>
                <div>
                  <h5 className="date-headings">June 2017 - Aug 2017</h5>
                  Fort Worth, Texas
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 2 }}>
                <div>
                  <h3 className="profile-headings">Lockheed Martin </h3>
                  <p className="position-font">Software Engineering Intern</p>
                </div>
              </Col>
            </Row>
            <br />

          </Container>
        </div>

        <div class="skills-row">
          <div>
            <h1>Skills</h1>
          </div>
          <Container>
            <Row>
              <Col xs={3}>
                Java
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.JavaProgress} class="progress-bar" label={`${this.state.JavaProgress}%`} style={{height: 15}} />
              </Col>
            </Row>

            <Row>
              <Col xs={3}>
                Python
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.PythonProgress} class="progress-bar" label={`${this.state.PythonProgress}%`} style={{height: 15}} />
              </Col>
            </Row>

            <Row>
              <Col xs={3}>
                C
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.JavaProgress} class="progress-bar" label={`${this.state.JavaProgress}%`} style={{height: 15}} />
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
