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
      message:'',
      errors : {
        lastName:false,
        firstName:false
      }
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
    });  
  }
  validate (input) {
    let { firstName, lastName } = this.state
    return {
      firstName: firstName.length === 0,
      lastName: lastName.length === 0,
    };
  }

  handleSubmit(e) {
    const { onSubmit } = this.props
    let data = this.state
    e.preventDefault();
    e.stopPropagation();
    let errors = this.validate (data)
    console.log(errors)
    if (!errors.lastName && !errors.firstName) {
      onSubmit(data)
      this.setState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });  
    } else {
      this.setState({
      errors
      })
    }

    
  }

  render() {
    let { errors } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
				<label>
          {contactForm.firstName}
          <input className={errors.firstName ? "error" : ""} type="text" name={"firstName"} value={this.state.firstName}  onChange={this.handleChange} />
        </label>
        <label>
					{contactForm.lastName}        
          <input className={errors.lastName ? "error" : ""} type="text" name={"lastName"} value={this.state.lastName} onChange={this.handleChange}  />
        </label>
        <label>
					{contactForm.email}       	
          <input  type="email" name={"email"} value={this.state.email} onChange={this.handleChange}  />
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
