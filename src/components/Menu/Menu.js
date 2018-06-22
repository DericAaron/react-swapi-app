import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

class Menu extends Component {

  render() {
    return (
        <div className="menu">
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/planets'>Planets</Link> </li>
                <li> <Link to='/people'>People</Link> </li>
            </ul>
        </div>
    );
  }
}

export default Menu;