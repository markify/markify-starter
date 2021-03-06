import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/main.scss'

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';


class App extends Component {
  render() {
    return (
      <Router>
					<React.Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Index} />
							</Switch>
						</div>
					</React.Fragment>
			</Router>
    );
  }
}

export default App;
