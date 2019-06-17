import React, { Component } from 'react';
import './App.css';
import './css/style.css'
import Fade from 'react-bootstrap/Fade'
import TypeWriter from 'react-typewriter';


function sleep(time){
	return new Promise((resolve) => setTimeout(resolve, time))
}
export default class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false
		}
	}

	componentWillMount(){
		sleep(800).then(()=> this.setState({open: true}))
	}

  render() {

  	const { open } = this.state;

    return (
		<div>
	  	  <div className="header" style={{color:'white'}}>
	  	  {/*<Fade in={this.state.open} timeout="50000">*/}
          <div id="fade-in">
	  	  	<h1>Hey, I&#39;m Tesia.</h1>
          </div>
        {/*</Fade>*/}


			  	<div className="cursive">
				  	<h3><TypeWriter typing={1} onTypingEnd={()=> this.setState({typeDone: 1})}>I write code and make stuff.</TypeWriter></h3>
				  	<h4><TypeWriter typing={this.state.typeDone}>For fun.</TypeWriter></h4>
			  	</div>
	  	  </div>

  	  </div>
    );
  }
}
