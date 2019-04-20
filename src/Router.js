import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home.js'
import Profile from './Profile.js'
import Hobbies from './Hobbies.js'
import Contact from './Contact.js'

/**
 * Router for client side routing of the frontend application
 */
export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
      	<Route exact path="/home" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/hobbies" component={Hobbies}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    )
  }
}