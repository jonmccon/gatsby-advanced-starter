import React from "react"

  export default class Subscribe extends React.Component {

  render() {
    return (
      

      <form 
        name="subscribe"
        action="subscribed" 
        className="email-form"
        data-netlify="true" 
        data-netlify-honeypot="bot-field" 
      >
        
        <input type="hidden" name="form-name" value="subscribe" /> 
        <input
          className="email-form form-control valid"
          name="email"
          id="email"
          type="email"
          placeholder="Emails"
        />
        <input
          className="hidden"
          name="bot-field"
          placeholder="Don't fill this out if you're a human"
        />
        
        <button type="submit">
          Subscribe
        </button>
      </form>

      
    )
  }
}
