import React, { Component,props } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startup } from '../../actions'
import './__styles__/Page1.css'


class Page1 extends Component {
	componentDidMount() {
		const { onMount } = this.props
		
		onMount()
	}
	submitForm(fields) {
		console.log(fields)
	}
	render() {
		return (
			
			<div className="Page1">
			</div>
		)
	}
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
	onMount: () => dispatch(startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
