import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound1 from './views/not-found'
import Home from './views/home'
import Page from './views/page'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={NotFound1} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
