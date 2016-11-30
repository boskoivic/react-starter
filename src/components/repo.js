import React, { Component } from 'react';
import '../App.css';

class Repo extends Component {
  render() {
    return (
      <div className="App">     
        <h2>{this.props.params.repoName}</h2>
      </div>
    );
  }
}

export default Repo;
