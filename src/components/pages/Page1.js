import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,props } from 'react-router-dom'
import { startup } from '../../actions'
import PropTypes from 'prop-types'
import './__styles__/Page1.css'

import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';

const ExampleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
	<div>
     <Text field="firstName" value="firstName" placeholder='First Name' /></div>
     <div> <Text field="lastName" placeholder='Last Name' /></div>
	 <div> <Text field="Email" placeholder='Email' /></div>
     <div> <TextArea field="Description" placeholder='Description'/></div>
     <div> <Checkbox field="agreesToTerms" /></div>
      <button type="submit">Submit</button>
    </form>
  )} />
)

class Page1 extends Component {
	componentDidMount() {
		const { onMount } = this.props
		onMount()
	}

	render() {
		return (
			
			<div className="Page1">
			<ExampleForm></ExampleForm>
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
