import fetch from "node-fetch"
const { EMAIL_TOKEN } = process.env
// gh api token



exports.handler = async event => {
  
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)

  // look at the form name and determine which form it came from
  // if subscribe then payload.email
  // do the email processing and exit

  // if submit then payload.submit
  // do submit processing and exit



  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email,"tags":["embeddedFormNetlify"] }), 
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}