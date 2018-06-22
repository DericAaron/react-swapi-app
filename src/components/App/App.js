import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import PlanetList from '../PlanetList/PlanetList';
import PeopleList from '../PeopleList/PeopleList';

class App extends Component {

  

  render() {
    return (
      <Router>

        <div className="App">
          <Header />
          <Menu />
          <div className="grid-container">
          <Route path='/planets' component={PlanetList} />
          <Route path='/people' component={PeopleList} />
          <Route exact path='/' component={Home} />
          </div>

          
          
        </div>

        

      </Router>
    );
  }
}

export default App;
