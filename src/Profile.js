import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Image from 'react-bootstrap/Image'
import './css/style.css'
import TesiaProfilePic from './photos/tesiaProfile.jpg'

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
        if ( this.state.ObjCProgress >= 65){
          clearInterval(ObjCRetVal)
          return;
        }
        this.setState({
          ObjCProgress: this.state.ObjCProgress + 5});
        }.bind(this), 60);

      let SwiftRetVal = setInterval(function() {
        if ( this.state.SwiftProgress >= 65){
          clearInterval(SwiftRetVal)
          return;
        }
        this.setState({
          SwiftProgress: this.state.SwiftProgress + 5});
        }.bind(this), 60);

      let GitRetVal = setInterval(function() {
        if ( this.state.GitProgress >= 75){
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
        <div className="container-profile">
        <Image src={TesiaProfilePic} className="tesia-profile-pic" responsive fluid/>
        </div>
        <div className="pro-intro-container" responsive fluid>

          <Container className="rows">
            <Row>
              <Col xs={9}>
                <div>
                  <h2 className="pro-intro-heading">Hey y'all, I'm Tesia!</h2>&nbsp;&nbsp;
                  <p className="pro-intro-p">


                    Just as my home page says, I like to code. I received my Bachelor
                    of Computer Science at the University of Texas at Austin in 2019 and
                    have loved coding ever since.
                    I sparingly code in my freetime and am a software engineer fulltime.
                    For 40 hours a week (maybe even more), I code in the office, go to meetings (ugh),
                    and munch on snacks.
                    <br/><br/>
                    I also think it's important to explore and try new things.
                    After taking a risk at an internship (ask me about it sometime) and
                    diving headfirst into mobile development, I've decided to start my career
                    as a mobile developer at LinkedIn. I've also found I have several other fields that
                    I'm interested and passionate about such as backend development,
                    general infrastructure, cloud computing, and security.
                  </p>
                </div>
              </Col>
              <Col xs={3}>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="personal-intro-container" responsive fluid>
          <Container className="rows">
            <Row>
              <Col xs={3}>
              </Col>
              <Col xs={9}>
                <div>
                  <p>
                    JDK:FSLJFLKSDJF:SKLDJFLSDJFSK:LDFJLSKdjf;alkjsdfaklsdjfa;sdkjf
                    aksdjfklajsdklfajd;kflja;ldfjasdjfalskdjfalksdjfalksdjfa;sd
                    asdkjf;ajdfkajdsl;fjsdkfjasdfjalksdfjaskdj
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="experience-container" responsive fluid>
          <div className="title-header" style={{paddingBottom: 6}}>
            <br />
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
            <br /><br/>
          </Container>
        </div>

        <div class="skills-row">
          <div className="title-header">
            <br />
            <h1>Skills</h1>
          </div>
          <Container>
            <Row>
              <Col xs={4}>
                <h4 className="skills">Java</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.JavaProgress} class="progress-bar" label={`${this.state.JavaProgress}%`} style={{height: 20}} />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h4 className="skills">C</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.CProgress} class="progress-bar" label={`${this.state.CProgress}%`} style={{height: 20}} />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h4 className="skills">Python</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.PythonProgress} class="progress-bar" label={`${this.state.PythonProgress}%`} style={{height: 20}} />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h4 className="skills">Git</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.GitProgress} class="progress-bar" label={`${this.state.GitProgress}%`} style={{height: 20}} />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h4 className="skills">Objective C</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.ObjCProgress} class="progress-bar" label={`${this.state.ObjCProgress}%`} style={{height: 20}} />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <h4 className="skills">Swift</h4>
              </Col>
              <Col style={{paddingTop:4}} xs={8}>
                <ProgressBar now={this.state.SwiftProgress} class="progress-bar" label={`${this.state.SwiftProgress}%`} style={{height: 20}} />
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
