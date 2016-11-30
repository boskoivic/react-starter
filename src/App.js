import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import Header from "./components/header"
import Nav from "./components/nav"

class App extends Component {
  render() {
    
    return (
    <div className="App">
      <Header></Header>       
      <Nav></Nav>
      {this.props.children}
    </div>
    );
  }
}

export default App;
