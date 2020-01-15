import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/shop/ShopPage'
import history from './history'

class App extends Component {
  render() {
    return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App
