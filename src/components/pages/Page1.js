import React, { Component,props } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { contact } from '../../actions'
import './__styles__/Page1.css'
import ContactForm from '../contactForm/ContactForm'
import { contactForm } from '../../assets/labels.json'

class Page1 extends Component {

	render() {
		const { onSubmit } = this.props
		const { response } = this.props
		
		return (
			
			<div className="Page1">
				{response && <div> {contactForm.success} </div>}
				<ContactForm onSubmit={onSubmit}/>
				<Link to="/">Prev</Link>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	response : state.response
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (data) => dispatch(contact(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
