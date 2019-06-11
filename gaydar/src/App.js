import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Featured from './components/Featured/Featured';

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

            {/* <Route
            exact path="/listings"
            render={routerProps => (
              <Accommodations
              {...routerProps}
              {...this.state} />
            )}
            /> */}

          </Switch>
        </main>

        
      </div>
    );
  }
}

export default App;