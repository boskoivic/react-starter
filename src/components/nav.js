import React, { Component } from 'react';
import '../App.css';
import { IndexLink } from 'react-router'
import NavLinks from './NavLinks';


class Nav extends Component {
  render() {
    
    return (
     <div className="App">     
      <ul className="navigation" role="nav">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><NavLinks to="/background"> Background</NavLinks></li>
        <li><NavLinks to="/repos/reactjs/react-router">React Router</NavLinks></li>
        <li><NavLinks to="/repos/facebook/react">React</NavLinks></li>
      </ul>
      </div>
    );
  }
}

export default Nav;
