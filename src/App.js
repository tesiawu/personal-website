import React, { Component } from 'react';
import './App.css';
import Navigation from './NavBar';
import DefaultRouter from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/><br />
      <DefaultRouter/>
        <header>
          
          <style>{'body { background-color: black; }'}</style>
        </header>
      </div>
    );
  }
}

export default App;
