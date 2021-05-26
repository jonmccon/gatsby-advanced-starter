import fetch from "node-fetch"
const { EMAIL_TOKEN } = process.env
const { NOTION_TOKEN } = process.env

// output all form content to netlify console
exports.handler = event => {
let payload = JSON.parse(event.body).payload;
console.log(payload)

// exports.handler = async event => {
  
//   const allData = JSON.parse(event.body).payload.data
//   const email = JSON.parse(event.body).payload.email
//   const submission = JSON.parse(event.body).payload.submission


//   console.log(`Everything: ${allData}`)


//   // look at the form name and determine which form it came from
//   // if subscribe then payload.email
//   // do the email processing and exit

//   // if submit then payload.submit
//   // do submit processing and exit

//   if (submission.form_name == 'Subscribe - Buttondown') {
//       return fetch('https://api.buttondown.email/v1/subscribers', {
//         method: 'POST',
//         headers: {
//           Authorization: `Token ${EMAIL_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email,"tags":["embeddedFormNetlify"] }), 
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(`Submitted to Buttondown:\n ${data}`)
//         })
//         .catch(error => ({ statusCode: 422, body: String(error) }))
    
//       } else if (submission.form_name == 'Submit - Notion') {
//         return fetch('https://api.notion.com/v1/pages', {
//         method: 'POST',
//         headers: {
//           Authorization: `Token ${NOTION_TOKEN}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ submission }), 
        
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(`Submitted to Notion:\n ${data}`)
//         })
//         .catch(error => ({ statusCode: 422, body: String(error) }))

//     } else {
//       // erroroororo
//     }

  
}