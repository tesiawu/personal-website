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
      PythonProgress: 0,
      CProgress: 0,
      ObjCProgress: 0,
      SwiftProgress: 0,
      GitProgress: 0
    };
  }

  componentDidMount() {
    let JavaRetVal = setInterval(function() {
      if ( this.state.JavaProgress >= 95){
        clearInterval(JavaRetVal)
        return;
      }
      this.setState({
        JavaProgress: this.state.JavaProgress + 5});
      }.bind(this), 60);

    let PythonRetVal = setInterval(function() {
      if ( this.state.PythonProgress >= 80){
        clearInterval(PythonRetVal)
        return;
      }
      this.setState({
        PythonProgress: this.state.PythonProgress + 5});
      }.bind(this), 60);

      let CRetVal = setInterval(function() {
        if ( this.state.CProgress >= 80){
          clearInterval(CRetVal)
          return;
        }
        this.setState({
          CProgress: this.state.CProgress + 5});
        }.bind(this), 60);

      let ObjCRetVal = setInterval(function() {
        if ( this.state.ObjCProgress >= 70){
          clearInterval(ObjCRetVal)
          return;
        }
        this.setState({
          ObjCProgress: this.state.ObjCProgress + 5});
        }.bind(this), 60);

      let SwiftRetVal = setInterval(function() {
        if ( this.state.SwiftProgress >= 70){
          clearInterval(SwiftRetVal)
          return;
        }
        this.setState({
          SwiftProgress: this.state.SwiftProgress + 5});
        }.bind(this), 60);

      let GitRetVal = setInterval(function() {
        if ( this.state.GitProgress >= 60){
          clearInterval(GitRetVal)
          return;
        }
        this.setState({
          GitProgress: this.state.GitProgress + 5});
        }.bind(this), 60);

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
          <div className="title-header" style={{paddingBottom: 6}}>
            <h1>Education</h1>
          </div>
          <Container className="experience-row">
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                <div>
                  <h3 className="profile-headings">The University of Texas at Austin</h3>
                  <p className="position-font">Bachelor of Science in Computer Science with Honors</p>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
                <div>
                  <h5 className="date-headings">Aug 2015 - May 2019</h5>
                  Austin, Texas
                </div>
              </Col>
            </Row>
          </Container>
          <br /><br />
          <div className="title-header" style={{paddingBottom: 6}}>
            <h1>Experience</h1>
          </div>
          <Container className="experience-row">
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                <div>
                  <h3 className="profile-headings">LinkedIn</h3>
                  <p className="position-font">Software Engineer</p>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
                <div>
                  <h5 className="date-headings">Aug 2019 - Present</h5>
                  Sunnyvale, California
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                <div>
                  <h3 className="profile-headings">LinkedIn</h3>
                  <p className="position-font">Software Engineering Intern</p>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
                <div>
                  <h5 className="date-headings">May 2018 - Aug 2018</h5>
                  Sunnyvale, California
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 1 }}>
                <div>
                  <h3 className="profile-headings">Lockheed Martin </h3>
                  <p className="position-font">Software Engineering Intern</p>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
                <div>
                  <h5 className="date-headings">June 2017 - Aug 2017</h5>
                  Fort Worth, Texas
                </div>
              </Col>
            </Row>
            <br />
          </Container>
        </div>

        <div class="skills-row">
          <div className="title-header">
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
                C
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.CProgress} class="progress-bar" label={`${this.state.CProgress}%`} style={{height: 15}} />
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
                Objective C
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.ObjCProgress} class="progress-bar" label={`${this.state.ObjCProgress}%`} style={{height: 15}} />
              </Col>
            </Row>

            <Row>
              <Col xs={3}>
                Swift
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.SwiftProgress} class="progress-bar" label={`${this.state.SwiftProgress}%`} style={{height: 15}} />
              </Col>
            </Row>

            <Row>
              <Col xs={3}>
                Git
              </Col>
              <Col xs={9}>
                <ProgressBar now={this.state.GitProgress} class="progress-bar" label={`${this.state.GitProgress}%`} style={{height: 15}} />
              </Col>
            </Row>
          </Container>
          <br/>
        </div>

        <footer>
        <Footer className="footer"/>
        </footer>

      </div>
    )
  }
}
