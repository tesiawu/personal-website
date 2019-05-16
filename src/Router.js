import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home.js'
import Profile from './Profile.js'
import Marvel from './Marvel.js'
import Photography from './Photography.js'

/**
 * Router for client side routing of the frontend application
 */
export default class DefaultRouter extends Component {
  render () {
    return (
      <Switch>
      	<Route exact path="/" component={Home}/>
      	<Route exact path="/home" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/marvel" component={Marvel}/>
        <Route exact path="/photography" component={Photography}/>
      </Switch>
    )
  }
}