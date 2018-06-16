import React, { Component,props } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startup } from '../../actions'
import PropTypes from 'prop-types'
import './__styles__/ContactForm.css'
import { contactForm } from '../../assets/labels.json'


class ContactForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
			firstName:'',
			lastName:'',
			email:'',
			message:''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
		let target = event.target
    let value = target.value
    let name = target.name
		this.setState({
      [name]: value
    });  }

  handleSubmit() {
		const { onSubmit } = this.props
		console.log(this.state)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
				<label>
          {contactForm.firstName}
          <input type="text" name={"firstName"} value={this.state.firstName}  onChange={this.handleChange} />
        </label>
        <label>
					{contactForm.lastName}        
          <input type="text" name={"lastName"} value={this.state.lastName} onChange={this.handleChange}  />
        </label>
        <label>
					{contactForm.email}       	
          <input type="text" name={"email"} value={this.state.email} onChange={this.handleChange}  />
        </label>
        <label>
					{contactForm.message}         
          <textarea name={"message"} value={this.state.message} onChange={this.handleChange}  />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
ContactForm.PropTypes = {
	onSubmit : PropTypes.any.isRequired,
	formTitle : PropTypes.string
}

export default (ContactForm)
