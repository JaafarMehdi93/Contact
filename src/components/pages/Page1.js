import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startup } from '../../actions'

import './__styles__/Page1.css'

class Page1 extends Component {
	componentDidMount() {
		const { onMount } = this.props
		onMount()
	}

	render() {
		return (
			<div className="Page1">
				<Link to="/">Prev</Link>
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	onMount: () => dispatch(startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
