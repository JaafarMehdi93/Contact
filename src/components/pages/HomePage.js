import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './__styles__/HomePage.css'

class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<Link to="/" className="HomePage-link">Contact</Link>
			</div>
		)
	}
}

export default HomePage
