import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import history from './history'
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
  render() {
    return (
    <div>
      <Router history={history}>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App
