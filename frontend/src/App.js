import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateCharacterOne from './components/create-character/CreateCharacterOne';
import CreateCharacterTwo from './components/create-character/CreateCharacterTwo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/createcharacterone' component={CreateCharacterOne} />
            <Route exact path='/createcharactertwo' component={CreateCharacterTwo} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
