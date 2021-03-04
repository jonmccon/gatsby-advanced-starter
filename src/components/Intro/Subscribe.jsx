import React from "react"

// const form = document.querySelector('form');
//   form.addEventListener('submit', async event => {
//     event.preventDefault();

//     // disable button to prevent multiple submissions
//     form.querySelector('button').disabled = true;

//     // make the request to submit the form
//     try {
//       const response = await fetch('/', {
//         method: 'post',
//         headers: {
//           'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
//         },
//         // parse and submit all included form data
//         body: new URLSearchParams(new FormData(form)).toString()
//       });

//       // if it was successful show success message
//       if (response.status === 200) {
//         document.querySelector('.successMsg').hidden = false;
//       } else {
//         document.querySelector('.errorMsg').hidden = false;
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   });

  export default class Subscribe extends React.Component {

  render() {
    return (
      

        // If a custom success page is needed, change the action attr here
        <form 
          class="email-form" 
          name="subscribe" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field" 
          // action="/subscribed"
          >
          
          <div hidden aria-hidden="true">
            <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" />
            </label>
          </div>
        
        <label for="email">
          <input name="subscribe" id="email" type="email" placeholder="email" required />
        </label>

        <button type="submit">Subscribe</button>
          <p class="successMsg" role="alert" hidden>Messages sent...</p>
          <p class="errorMsg" role="alert" hidden>Something went wrong...</p>
      </form>
    )
  }
}
