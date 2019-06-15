import React, { Component } from 'react';
import './App.css';
import Navigation from './NavBar';
import DefaultRouter from './Router';
import CarouselPic from './Carousel';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {


    let heading = null
    if (window.location.pathname == "/home" || window.location.pathname == "/") {
        heading = <div className="responsive-image">
          <Navigation/>



        </div>
      } else {
        heading = <Navigation/>
      }
    return (
      <div className="App">

      {heading}
      <DefaultRouter/>
        <header>
          <style>{'body { background-color: black; }'}</style>
        </header>
      </div>
    );
  }
}

export default App;
