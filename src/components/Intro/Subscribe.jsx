import React from "react"

  export default class Subscribe extends React.Component {

  render() {
    return (
      

      <form data-netlify="true" name="subscribe" data-netlify-honeypot="bot-field" action="subscribed" className="email-form">
        
        
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
