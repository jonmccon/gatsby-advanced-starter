import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'

const EmailForm = () => {

  // Post-Submit Navigate
  const postSubmit = () => {
    navigate('/subscribed')
  }

  // Simple controlled form setup (Control your own state)
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    email: ''
  })

  return (
      <NetlifyForm formName="Subscribe - Buttondown" formValues={formValues} postSubmit={postSubmit} >
        
        <input 
            type="email" 
            name="email" 
            placeholder="Emails" 
            className="email-form form-control valid"
            value={formValues.name} 
            onChange={handleChange} 
            required
        />

        <button 
            type="submit"
            className="email-form-button"
        >
        Subscribe
        </button>
        
      </NetlifyForm>
  )
}

export default EmailForm;