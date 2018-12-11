import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
/*pages */
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <div className="me-body">
        <Switch>    
            <Route exact path="/" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App
