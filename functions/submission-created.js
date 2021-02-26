require('dotenv').config()
const fetch = require('node-fetch')
const EMAIL_TOKEN = process.env.EMAIL_TOKEN
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
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
    .then(() => navigate("/subscribed/"))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}