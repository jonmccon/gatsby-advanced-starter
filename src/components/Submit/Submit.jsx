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

         
        <label for="submit-contact">What is your email?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-contact"
          id="submit-contact"
          type="email"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Your email address'"
          placeholder="Your email address"
          required
        />

        <label for="submit-name">What is the name of your business?</label>        
        <input
          className="submit-form"
          name="submit-name"
          id="submit-name"
          type="text"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Business name'"
          placeholder="Business name"
          required
        />

        <label for="submit-website">Business website or primary web address:</label>        
        <input
          className="submit-website form-control valid"
          name="submit-website"
          id="submit-website"
          type="text"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Primary url'"
          placeholder="Primary url"
          required
        />

        <label for="submit-social">Any social accounts or additional urls you want to include?</label>        
        <input
          className="submit-form"
          name="submit-social"
          id="submit-social"
          type="text"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = '@socials, etc'"
          placeholder="@socials, etc"
        />

        <label for="submit-neighborhood">What neighborhood is your primary location in?</label> 
        <input
          className="submit-form form-control valid"
          name="submit-neighborhood"
          id="submit-neighborhood"
          type="text"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Neighborhood'"
          placeholder="Neighborhood"
        />

        <p>How many people work with you?</p>
        
            <label for="submit-size">1-4</label>
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="1-4"
                value="1-4"
                type="radio"
            />
            
            <label for="submit-size">11-40</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="11-40"
                value="11-40"
                type="radio"
            />

            <label for="submit-size">41-100</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="41-100"
                value="41-100"
                type="radio"
            />
            
            <label for="submit-size">100+</label> 
            <input
                className="submit-form form-control valid"
                name="submit-size"
                id="100+"
                value="100+"
                type="radio"
            />

        <fieldset>      
            <legend>What kinds of work do you do?</legend>      
            
            <input type="checkbox" name="favorite_pet" value="3D rendering" id="3D-rendering" />
            <label for="3D-rendering">3D rendering</label>
            
            <input type="checkbox" name="favorite_pet" value="advertising" id="advertising" />
            <label for="advertising">advertising</label>

            <input type="checkbox" name="favorite_pet" value="architecture" id="architecture" />
            <label for="architecture">architecture</label>

            <input type="checkbox" name="favorite_pet" value="branding" id="branding" />
            <label for="branding">branding</label>

            <input type="checkbox" name="favorite_pet" value="community" id="community" />
            <label for="community">community</label>

            <input type="checkbox" name="favorite_pet" value="engineering" id="engineering" />
            <label for="engineering">engineering</label>

            <input type="checkbox" name="favorite_pet" value="environmental" id="environmental" />
            <label for="environmental">environmental</label>

            <input type="checkbox" name="favorite_pet" value="events" id="events" />
            <label for="events">events</label>

            <input type="checkbox" name="favorite_pet" value="exhibition" id="exhibition" />
            <label for="exhibition">exhibition</label>

            <input type="checkbox" name="favorite_pet" value="experiential" id="experiential" />
            <label for="experiential">experiential</label>

            <input type="checkbox" name="favorite_pet" value="freelance" id="freelance" />
            <label for="freelance">freelance</label>

            <input type="checkbox" name="favorite_pet" value="gaming" id="gaming" />
            <label for="gaming">gaming</label>

            <input type="checkbox" name="favorite_pet" value="illustration" id="illustration" />
            <label for="illustration">illustration</label>

            <input type="checkbox" name="favorite_pet" value="industrial" id="industrial" />
            <label for="industrial">industrial</label>

            <input type="checkbox" name="favorite_pet" value="interior" id="interior" />
            <label for="interior">interior</label>

            <input type="checkbox" name="favorite_pet" value="marketing" id="marketing" />
            <label for="marketing">marketing</label>

            <input type="checkbox" name="favorite_pet" value="motion" id="motion" />
            <label for="motion">motion</label>

            <input type="checkbox" name="favorite_pet" value="naming" id="naming" />
            <label for="naming">naming</label>

            <input type="checkbox" name="favorite_pet" value="packaging" id="packaging" />
            <label for="packaging">packaging</label>

            <input type="checkbox" name="favorite_pet" value="photography" id="photography" />
            <label for="photography">photography</label>

            <input type="checkbox" name="favorite_pet" value="presentation" id="presentation" />
            <label for="presentation">presentation</label>

            <input type="checkbox" name="favorite_pet" value="press" id="press" />
            <label for="press">press</label>

            <input type="checkbox" name="favorite_pet" value="print" id="print" />
            <label for="print">print</label>

            <input type="checkbox" name="favorite_pet" value="product" id="product" />
            <label for="product">product</label>

            <input type="checkbox" name="favorite_pet" value="public relations" id="public relations" />
            <label for="public relations">public relations</label>

            <input type="checkbox" name="favorite_pet" value="research" id="research" />
            <label for="research">research</label>

            <input type="checkbox" name="favorite_pet" value="education" id="education" />
            <label for="education">education</label>

            <input type="checkbox" name="favorite_pet" value="strategy" id="strategy" />
            <label for="strategy">strategy</label>

            <input type="checkbox" name="favorite_pet" value="typography" id="typography" />
            <label for="typography">typography</label>

            <input type="checkbox" name="favorite_pet" value="ux-ui" id="ux-ui" />
            <label for="ux-ui">dogs</label>

            <input type="checkbox" name="favorite_pet" value="vfx" id="vfx" />
            <label for="vfx">vfx</label>

            <input type="checkbox" name="favorite_pet" value="video" id="video" />
            <label for="video">video</label>

            <input type="checkbox" name="favorite_pet" value="sound" id="sound" />
            <label for="sound">sound</label>

            <input type="checkbox" name="favorite_pet" value="voice" id="voice" />
            <label for="voice">voice</label>

            <input type="checkbox" name="favorite_pet" value="virtual-reality" id="virtual-reality" />
            <label for="virtual-reality">virtual reality</label>

            <input type="checkbox" name="favorite_pet" value="eCommerce" id="eCommerce" />
            <label for="eCommerce">eCommerce</label>

            <input type="checkbox" name="favorite_pet" value="dogs" id="dogs" />
            <label for="dogs">dogs</label>

        </fieldset> 

        <label for="submit-notes">Notes:</label> 
        <input
          className="submit-form form-control valid"
          name="submit-notes"
          id="submit-notes"
          type="text"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Any additional types of work, urls, feelings'"
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
