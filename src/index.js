import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute , browserHistory  } from 'react-router'
import Background from "./components/background"
import Header from "./components/header"
import Repo from "./components/repo"
import Home from "./components/home"

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={Home}></IndexRoute >
		<Route path="/app" component={Header}></Route>
	 	<Route path="/background" component={Background}></Route>
	 	<Route path="/repos/:userName/:repoName" component={Repo}/></Route>
 </Router>,
  document.getElementById('root')
);
