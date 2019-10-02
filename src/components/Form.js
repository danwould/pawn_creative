import React from "react"
import axios from "axios"
import * as qs from "query-string"

class Form extends React.Component {
  constructor(props) {
    super(props)
    //this.domRef = React.createRef()
    this.nameRef = React.createRef()
    this.emailRef = React.createRef()
    this.messageRef = React.createRef()
    this.state = { feedbackMsg: null }
  }

  handleSubmit(event) {
    // Do not submit form via HTTP, since we're doing that via XHR request.
    event.preventDefault()
    // Loop through this component's refs (the fields) and add them to the
    // formData object. What we're left with is an object of key-value pairs
    // that represent the form data we want to send to Netlify.
    //const formData = {}
   // Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))
    //console.log(qs.stringify(formData));

    const formData = {
      name: this.nameRef.value,
      email: this.emailRef.value,
      message: this.messageRef.value
    }

    // Set options for axios. The URL we're submitting to
    // (this.props.location.pathname) is the current page.
    const axiosOptions = {
      url: "https://wegettingmarried.info/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }

    // Submit to Netlify. Upon success, set the feedback message and clear all
    // the fields within the form. Upon failure, keep the fields as they are,
    // but set the feedback message to show the error state.
    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: "Form submitted successfully!",
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: "Form could not be submitted.",
        })
      )
  }

  handleKeyPress = (event) => {
    let inputValue = event.target.value.length;

    if (inputValue === 0 && event.keyCode === 8) {
      event.target.classList.remove('has-value');
    } else {
      event.target.classList.add('has-value');
    }
  }

  render() {
    return (
        <form 
          name="Contact Form" 
          method="POST"
          className="col-6 contact-form" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input ref="form-name" type="hidden" name="form-name" value="Contact Form" />
          <div className="form-element input col-6">
            <input ref={this.nameRef} type="name" name="name" onKeyUp={this.handleKeyPress}/>
            <label htmlFor="name">name</label>
          </div>
          <div className="form-element input col-6">
            <input ref={this.emailRef} type="email" name="email" onKeyUp={this.handleKeyPress}/>
            <label htmlFor="email">email</label>
          </div>
          <div className="form-element input col-6">
            <input ref={this.emailRef} type="text" name="company" onKeyUp={this.handleKeyPress}/>
            <label htmlFor="email">company</label>
          </div>
          <div className="form-element input col-6">
            <input ref={this.emailRef} type="phone" name="phone" onKeyUp={this.handleKeyPress}/>
            <label htmlFor="email">phone</label>
          </div>
          <div className="form-element button col-6">
            <button type='submit'>SUBMIT</button>
          </div>
        </form>
    )
  }
}

export default Form