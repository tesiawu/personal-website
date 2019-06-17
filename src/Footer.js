import React, { Component } from 'react';
import './css/style.css'

export default class Footer extends Component {

  render() {
    return (
        <div className="footer">

          Contact Me!
          <p></p>
          <div>
          <a href='https://www.linkedin.com/in/tesiawu/' style={{color: "white"}}>
             <i class="fab fa-linkedin fa-2x"></i>
          </a> &nbsp;&nbsp;
          <a href='https://github.com/tesiawu/' style={{color: "white"}}>
            <i class="fab fa-github fa-2x"></i>
          </a> &nbsp;&nbsp;
          <a href='mailto: tesiawu@utexas.com' style={{color: "white"}}>
            <i class="far fa-envelope fa-2x"></i>
          </a> &nbsp;&nbsp;
          </div>



          <p style={{fontSize:"12px"}} className="copyright">
            &copy; Tesia Wu {new Date().getFullYear()}
            <br />
            All Rights Reserved. <br />
          </p>
        </div>
    );
  }

}
