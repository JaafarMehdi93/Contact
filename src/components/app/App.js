import React, { Component, Fragment } from 'react'
import { Route, Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'

import './__styles__/App.css'

const history = createBrowserHistory()

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Fragment>
					<header>
					</header>
					<Route exact path="/" component={HomePage} />
					<Route path="/Page1" component={Page1} />
				</Fragment>
			</Router>
		)
	}
}

export default App
