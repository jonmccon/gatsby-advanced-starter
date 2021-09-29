import React, { useState } from "react"
import { navigate } from 'gatsby'
import NetlifyForm from 'react-ssg-netlify-forms'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const Submit = () => {

  // Post-Submit Navigate
  const postSubmit = () => {
    navigate('/submitted')
  }

  // Simple controlled form setup (Control your own state)
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    
    // Primary info
    submitContact: '',
    submitName:'',
    submitWebsite:'',
    submitSocial:'',
    submitNeighborhood:'',
    submitSize:'',
    
    // tags
    rendering:'',
    advertising:'',
    architecture:'',
    branding:'',
    community:'',
    development:'',
    environmental:'',
    events:'',
    exhibition:'',
    experiential:'',
    gaming:'',
    illustration:'',
    industrial:'',
    interior:'',
    marketing:'',
    motion:'',
    naming:'',
    packaging:'',
    photography:'',
    presentation:'',
    print:'',
    product:'',
    publicRelations:'',
    research:'',
    education:'',
    strategy:'',
    typography:'',
    uxui:'',
    vfx:'',
    video:'',
    sound:'',
    voice:'',
    virtualReality:'',
    eCommerce:'',

    // Extra Q's
    submitGuest:'',
    submitPrint:'',
    submitNotes:'',

  })

  return (
      <NetlifyForm formName="Submit - Notion" formValues={formValues} postSubmit={postSubmit} >

<div className="submit-wrapper">
      
        <div className="submit-written">
        
        <label htmlFor="submit-contact">What is your email?</label> 
        <input
          className="submit-form form-control valid"
          name="submitContact"
          id="submit-contact"
          type="email"         
          placeholder="Your email address"
          value={formValues.name} 
          onChange={handleChange} 
          required
          tabindex="0"
        />

        <label htmlFor="submit-name">What is the name of your business?</label>        
        <input
          className="submit-form"
          name="submitName"
          id="submit-name"
          type="text"
          placeholder="Business name"
          value={formValues.name} 
          onChange={handleChange} 
          required
          tabindex="0"
        />

        <label htmlFor="submit-website">Business website or primary web address:</label>        
        <input
          className="submit-form form-control valid"
          name="submitWebsite"
          id="submit-website"
          type="text"
          placeholder="Primary url"
          value={formValues.name} 
          onChange={handleChange}
          required
          tabindex="0"
        />

        <label htmlFor="submit-social">Any social accounts or additional urls you want to include?</label>        
        <input
          className="submit-form"
          name="submitSocial"
          id="submit-social"
          type="text"
          placeholder="@socials, etc"
          value={formValues.name} 
          onChange={handleChange}
          tabindex="0"
        />

        <label htmlFor="submit-neighborhood">What neighborhood is your primary location in?</label> 
        <input
          className="submit-form form-control valid"
          name="submitNeighborhood"
          id="submit-neighborhood"
          type="text"
          placeholder="Neighborhood you're based in"
          value={formValues.name} 
          onChange={handleChange}
          required
          tabindex="0"
        />
        </div>

        <p>How many people work with you?</p>
        <div className="submit-size">        
            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeSmall"
                value="1-10"
                type="radio" 
                onChange={handleChange}
                required
            />
            <label tabindex="0" htmlFor="sizeSmall">1-4</label>
            
            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeMedium"
                value="11-40"
                type="radio" 
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeMedium">11-40</label> 

            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeLarge"
                value="41-100"
                type="radio" 
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeLarge">41-100</label> 

            <input
                className="submit-form form-control valid"
                name="submitSize"
                id="sizeHuge"
                value="100+"
                type="radio" 
                onChange={handleChange}
            />
            <label tabindex="0" htmlFor="sizeHuge">100+</label> 
        </div>

        <p>What kinds of work do you do?</p>
        <div className="submit-select">
        <fieldset>      
            <legend>What kinds of work do you do?</legend>      
            
            <input type="checkbox" name="rendering" value="3D rendering" id="rendering" onChange={handleChange}/>
            <label tabindex="0" htmlFor="rendering">3D rendering</label>
            
            <input type="checkbox" name="advertising" value="advertising" id="advertising" onChange={handleChange}/>
            <label tabindex="0" htmlFor="advertising">advertising</label>

            <input type="checkbox" name="architecture" value="architecture" id="architecture" onChange={handleChange}/>
            <label tabindex="0" htmlFor="architecture">architecture</label>

            <input type="checkbox" name="branding" value="branding" id="branding" onChange={handleChange}/>
            <label tabindex="0" htmlFor="branding">branding</label>

            <input type="checkbox" name="community" value="community" id="community" onChange={handleChange}/>
            <label tabindex="0" htmlFor="community">community</label>

            <input type="checkbox" name="development" value="development" id="development" onChange={handleChange}/>
            <label tabindex="0" htmlFor="development">development</label>

            <input type="checkbox" name="environmental" value="environmental" id="environmental" onChange={handleChange}/>
            <label tabindex="0" htmlFor="environmental">environmental</label>

            <input type="checkbox" name="events" value="events" id="events" onChange={handleChange}/>
            <label tabindex="0" htmlFor="events">events</label>

            <input type="checkbox" name="exhibition" value="exhibition" id="exhibition" onChange={handleChange}/>
            <label tabindex="0" htmlFor="exhibition">exhibition</label>

            <input type="checkbox" name="experiential" value="experiential" id="experiential" onChange={handleChange}/>
            <label tabindex="0" htmlFor="experiential">experiential</label>

            <input type="checkbox" name="gaming" value="gaming" id="gaming" onChange={handleChange}/>
            <label tabindex="0" htmlFor="gaming">gaming</label>

            <input type="checkbox" name="illustration" value="illustration" id="illustration" onChange={handleChange}/>
            <label tabindex="0" htmlFor="illustration">illustration</label>

            <input type="checkbox" name="industrial" value="industrial" id="industrial" onChange={handleChange}/>
            <label tabindex="0" htmlFor="industrial">industrial</label>

            <input type="checkbox" name="interior" value="interior" id="interior" onChange={handleChange}/>
            <label tabindex="0" htmlFor="interior">interior</label>

            <input type="checkbox" name="marketing" value="marketing" id="marketing" onChange={handleChange}/>
            <label tabindex="0" htmlFor="marketing">marketing</label>

            <input type="checkbox" name="motion" value="motion" id="motion" onChange={handleChange}/>
            <label tabindex="0" htmlFor="motion">motion</label>

            <input type="checkbox" name="naming" value="naming" id="naming" onChange={handleChange}/>
            <label tabindex="0" htmlFor="naming">naming</label>

            <input type="checkbox" name="packaging" value="packaging" id="packaging" onChange={handleChange}/>
            <label tabindex="0" htmlFor="packaging">packaging</label>

            <input type="checkbox" name="photography" value="photography" id="photography" onChange={handleChange}/>
            <label tabindex="0" htmlFor="photography">photography</label>

            <input type="checkbox" name="presentation" value="presentation" id="presentation" onChange={handleChange}/>
            <label tabindex="0" htmlFor="presentation">presentation</label>

            <input type="checkbox" name="print" value="print" id="print" onChange={handleChange}/>
            <label tabindex="0" htmlFor="print">print</label>

            <input type="checkbox" name="product" value="product" id="product" onChange={handleChange}/>
            <label tabindex="0" htmlFor="product">product</label>

            <input type="checkbox" name="publicRelations" value="public relations" id="publicRelations" onChange={handleChange}/>
            <label tabindex="0" htmlFor="publicRelations">public relations</label>

            <input type="checkbox" name="research" value="research" id="research" onChange={handleChange}/>
            <label tabindex="0" htmlFor="research">research</label>

            <input type="checkbox" name="education" value="education" id="education" onChange={handleChange}/>
            <label tabindex="0" htmlFor="education">education</label>

            <input type="checkbox" name="strategy" value="strategy" id="strategy" onChange={handleChange}/>
            <label tabindex="0" htmlFor="strategy">strategy</label>

            <input type="checkbox" name="typography" value="typography" id="typography" onChange={handleChange}/>
            <label tabindex="0" htmlFor="typography">typography</label>

            <input type="checkbox" name="uxui" value="uxui" id="uxui" onChange={handleChange}/>
            <label tabindex="0" htmlFor="uxui">UX/UI</label>

            <input type="checkbox" name="vfx" value="vfx" id="vfx" onChange={handleChange}/>
            <label tabindex="0" htmlFor="vfx">vfx</label>

            <input type="checkbox" name="video" value="video" id="video" onChange={handleChange}/>
            <label tabindex="0" htmlFor="video">video</label>

            <input type="checkbox" name="sound" value="sound" id="sound" onChange={handleChange}/>
            <label tabindex="0" htmlFor="sound">sound</label>

            <input type="checkbox" name="voice" value="voice" id="voice" onChange={handleChange}/>
            <label tabindex="0" htmlFor="voice">voice</label>

            <input type="checkbox" name="virtualReality" value="virtualReality" id="virtualReality" onChange={handleChange}/>
            <label tabindex="0" htmlFor="virtualReality">virtual reality</label>

            <input type="checkbox" name="eCommerce" value="eCommerce" id="eCommerce" onChange={handleChange}/>
            <label tabindex="0" htmlFor="eCommerce">eCommerce</label>

        </fieldset> 
        </div>

        <div className="submit-bonus">
          <p>Would you like to be a guest on the show? Or do you want to hear from someone specifically?</p>
          <label htmlFor="submit-guest">Would you like to be a guest on the show? Or do you want to hear from someone specifically?</label> 
          <input
            className="submit-form form-control valid"
            name="submitGuest"
            id="submit-guest"
            type="text"
            placeholder="Anyone in the community qualifies to be a part it"
            value={formValues.name} 
            onChange={handleChange}
            tabindex="0"
          />


          <p>Would you buy a hardcopy printed directory?</p> 
          <label htmlFor="submit-print">Would you buy a hardcopy printed directory?</label> 
          <input
            className="submit-form form-control valid"
            name="submitPrint"
            id="submit-print"
            type="text"
            placeholder="A beautiful resource or the internet is fine"
            value={formValues.name} 
            onChange={handleChange}
            tabindex="0"
          />

          <p>If you have any questions or suggestions, let us know:</p> 
          <label htmlFor="submit-notes">If you have any questions or suggestions, let us know:</label> 
          <input
            className="submit-form form-control valid"
            name="submitNotes"
            id="submit-notes"
            type="text"
            placeholder="Any additional types of work, urls, feelings"
            value={formValues.name} 
            onChange={handleChange}
            tabindex="0"
          />
        </div>     

        <button type="submit" className="submit-form-button"
          onClick={e => {
            trackCustomEvent({
              category: "Submission",
              action: "Successful submission",
            })
          }}>
          Submit
        </button>
      
</div>
        
      </NetlifyForm>
  )
}

export default Submit;