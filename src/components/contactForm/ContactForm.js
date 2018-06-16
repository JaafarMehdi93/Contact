import React, { Component,props } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startup } from '../../actions'
import PropTypes from 'prop-types'
import './__styles__/ContactForm.css'
import { contactForm } from '../../assets/label.json'

const ExampleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
	<div>
     <Text field="firstName"  placeholder='First Name' /></div>
     <div> <Text field="lastName" placeholder='Last Name' /></div>
	 	<div> <Text field="Email" placeholder='Email' /></div>
     <div> <TextArea field="Description" placeholder='Description'/></div>
     <div> <Checkbox field="agreesToTerms" /></div>
      <button type="submit">Submit</button>
    </form>
  )} />
)

class ContactForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
			firstName:'',
			lastName:'',
			email:'',
			message:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(values) {
		const { onSubmit } = this.props
		onSubmit(values)
    event.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
				<label>
          {contactForm.firstName}
          <input type="text" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
					{contactForm.lastName}        
          <input type="text" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <label>
					{contactForm.email}       	
          <input type="text" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
					{contactForm.message}         
          <textarea value={this.state.message} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
ContactForm.PropTypes = {
	onSubmit : PropTypes.function.isRequired,
	formTitle : PropTypes.string
}

export default (ContactForm)
