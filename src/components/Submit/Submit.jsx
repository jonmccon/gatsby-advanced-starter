import React from "react"

  export default class Submit extends React.Component {

  render() {
    return (
      
    <div className="submit-wrapper">
      <form data-netlify="true" name="submit" data-netlify-honeypot="bot-field" action="subscribed" className="submit-form">
        
        
        {/* 
            -email address
            -business name
            -primary url
            -social accounts, secondary urls
            -neighborhood

            -How many people work with you?
                1-4 11-40 41-100 100+

            -What kinds of work do you do?
                checkbox list
            
            -notes

        */}

        <div className="submit-written">
        
        <label htmlFor="submit-contact">What is your email?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-contact"
          id="submit-contact"
          type="email"         
          placeholder="Your email address"
          required
        />

        <label htmlFor="submit-name">What is the name of your business?</label>        
        <input
          className="submit-form"
          name="submit-name"
          id="submit-name"
          type="text"
          placeholder="Business name"
          required
        />

        <label htmlFor="submit-website">Business website or primary web address:</label>        
        <input
          className="submit-website form-control valid"
          name="submit-website"
          id="submit-website"
          type="text"
          placeholder="Primary url"
          required
        />

        <label htmlFor="submit-social">Any social accounts or additional urls you want to include?</label>        
        <input
          className="submit-form"
          name="submit-social"
          id="submit-social"
          type="text"
          placeholder="@socials, etc"
        />

        <label htmlFor="submit-neighborhood">What neighborhood is your primary location in?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-neighborhood"
          id="submit-neighborhood"
          type="text"
          placeholder="Neighborhood"
        />
        </div>

        <div className="submit-select">
        <p>How many people work with you?</p>
        
            <label htmlFor="submit-size">1-4</label>
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="1-4"
                value="1-4"
                type="radio"
            />
            
            <label htmlFor="submit-size">11-40</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="11-40"
                value="11-40"
                type="radio"
            />

            <label htmlFor="submit-size">41-100</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="41-100"
                value="41-100"
                type="radio"
            />
            
            <label htmlFor="submit-size">100+</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="100+"
                value="100+"
                type="radio"
            />

        <p>What kinds of work do you do?</p>
        <fieldset>      
            <legend>What kinds of work do you do?</legend>      
            
            <input type="checkbox" name="favorite_pet" value="3D rendering" id="3D-rendering" />
            <label htmlFor="3D-rendering">3D rendering</label>
            
            <input type="checkbox" name="favorite_pet" value="advertising" id="advertising" />
            <label htmlFor="advertising">advertising</label>

            <input type="checkbox" name="favorite_pet" value="architecture" id="architecture" />
            <label htmlFor="architecture">architecture</label>

            <input type="checkbox" name="favorite_pet" value="branding" id="branding" />
            <label htmlFor="branding">branding</label>

            <input type="checkbox" name="favorite_pet" value="community" id="community" />
            <label htmlFor="community">community</label>

            <input type="checkbox" name="favorite_pet" value="engineering" id="engineering" />
            <label htmlFor="engineering">engineering</label>

            <input type="checkbox" name="favorite_pet" value="environmental" id="environmental" />
            <label htmlFor="environmental">environmental</label>

            <input type="checkbox" name="favorite_pet" value="events" id="events" />
            <label htmlFor="events">events</label>

            <input type="checkbox" name="favorite_pet" value="exhibition" id="exhibition" />
            <label htmlFor="exhibition">exhibition</label>

            <input type="checkbox" name="favorite_pet" value="experiential" id="experiential" />
            <label htmlFor="experiential">experiential</label>

            <input type="checkbox" name="favorite_pet" value="freelance" id="freelance" />
            <label htmlFor="freelance">freelance</label>

            <input type="checkbox" name="favorite_pet" value="gaming" id="gaming" />
            <label htmlFor="gaming">gaming</label>

            <input type="checkbox" name="favorite_pet" value="illustration" id="illustration" />
            <label htmlFor="illustration">illustration</label>

            <input type="checkbox" name="favorite_pet" value="industrial" id="industrial" />
            <label htmlFor="industrial">industrial</label>

            <input type="checkbox" name="favorite_pet" value="interior" id="interior" />
            <label htmlFor="interior">interior</label>

            <input type="checkbox" name="favorite_pet" value="marketing" id="marketing" />
            <label htmlFor="marketing">marketing</label>

            <input type="checkbox" name="favorite_pet" value="motion" id="motion" />
            <label htmlFor="motion">motion</label>

            <input type="checkbox" name="favorite_pet" value="naming" id="naming" />
            <label htmlFor="naming">naming</label>

            <input type="checkbox" name="favorite_pet" value="packaging" id="packaging" />
            <label htmlFor="packaging">packaging</label>

            <input type="checkbox" name="favorite_pet" value="photography" id="photography" />
            <label htmlFor="photography">photography</label>

            <input type="checkbox" name="favorite_pet" value="presentation" id="presentation" />
            <label htmlFor="presentation">presentation</label>

            <input type="checkbox" name="favorite_pet" value="press" id="press" />
            <label htmlFor="press">press</label>

            <input type="checkbox" name="favorite_pet" value="print" id="print" />
            <label htmlFor="print">print</label>

            <input type="checkbox" name="favorite_pet" value="product" id="product" />
            <label htmlFor="product">product</label>

            <input type="checkbox" name="favorite_pet" value="public relations" id="public relations" />
            <label htmlFor="public relations">public relations</label>

            <input type="checkbox" name="favorite_pet" value="research" id="research" />
            <label htmlFor="research">research</label>

            <input type="checkbox" name="favorite_pet" value="education" id="education" />
            <label htmlFor="education">education</label>

            <input type="checkbox" name="favorite_pet" value="strategy" id="strategy" />
            <label htmlFor="strategy">strategy</label>

            <input type="checkbox" name="favorite_pet" value="typography" id="typography" />
            <label htmlFor="typography">typography</label>

            <input type="checkbox" name="favorite_pet" value="ux-ui" id="ux-ui" />
            <label htmlFor="ux-ui">dogs</label>

            <input type="checkbox" name="favorite_pet" value="vfx" id="vfx" />
            <label htmlFor="vfx">vfx</label>

            <input type="checkbox" name="favorite_pet" value="video" id="video" />
            <label htmlFor="video">video</label>

            <input type="checkbox" name="favorite_pet" value="sound" id="sound" />
            <label htmlFor="sound">sound</label>

            <input type="checkbox" name="favorite_pet" value="voice" id="voice" />
            <label htmlFor="voice">voice</label>

            <input type="checkbox" name="favorite_pet" value="virtual-reality" id="virtual-reality" />
            <label htmlFor="virtual-reality">virtual reality</label>

            <input type="checkbox" name="favorite_pet" value="eCommerce" id="eCommerce" />
            <label htmlFor="eCommerce">eCommerce</label>

            <input type="checkbox" name="favorite_pet" value="dogs" id="dogs" />
            <label htmlFor="dogs">dogs</label>

        </fieldset> 
        </div>

        <label htmlFor="submit-notes">Notes:</label> 
        <input
          className="submit-form form-control valid"
          name="submit-notes"
          id="submit-notes"
          type="text"
          placeholder="Any additional types of work, urls, feelings"
        />
        
            

        



        <input
          className="hidden"
          name="bot-field"
          placeholder="Don't fill this out if you're a human"
        />
        
        <button type="submit">
          Submit
        </button>
      </form>
      </div>

      
    )
  }
}
