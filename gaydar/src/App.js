import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Listing from './components/Listing/Listing';
import NotFound from './components/NotFound/NotFound.js';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('App: render');

    return (
      <div>
        <nav className='App-nav'>
          <NavLink className='active-link' to='/home'>
            Home
          </NavLink>
          <NavLink className='active-link' to='/listings'>
            Accommodations
          </NavLink>
        </nav>

        <main>
          <Switch>
            <Route
              exact path="/"
              render={routerProps => (
                <Redirect to="/home"/>
              )}
              />

            <Route
            exact path="/home"
            render={routerProps => (
              <Home
              {...routerProps}
              {...this.state} />
            )}
            />

            <Route
            exact path="/listings"
            render={routerProps => (
              <Listing
              {...routerProps}
              {...this.state} />
            )}
            />

            <Route
            render={() => <NotFound /> } 
            />

          </Switch>
        </main>

        
      </div>
    );
  }
}

export default App;