import fetch from "node-fetch"
const { Client } = require('@notionhq/client');

const { EMAIL_TOKEN } = process.env
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const { NOTION_DB_ID } = process.env

// output all form content to netlify console
// exports.handler = event => {
// let payload = JSON.parse(event.body).payload;
// console.log(payload)
// }

exports.handler = async event => {
  
  const allData = JSON.parse(event.body).payload
  const formName = JSON.parse(event.body).payload.form_name
  
  const email = JSON.parse(event.body).payload.email
  
  const submitTime = JSON.parse(event.body).payload.created_at
  const notionContent = JSON.parse(event.body).payload.data

  

  console.log(`form name: ${formName}`)
  console.log(submitTime)
//   console.log(notionContent)
  console.log(notionContent.submitName)
  console.log(notionContent.architecture)
  


  if (formName == 'Subscribe - Buttondown') {
      
    // BUTTONDOWN
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
    
    // NOTION 
      } else if (formName == 'Submit - Notion') {
        (async () => {
            const response = await notion.pages.create({
              parent: {
                database_id: NOTION_DB_ID,
              },
              properties: {
                Name: {
                  title: [
                    {
                      text: {
                        content: 'Submit - ' + notionContent.submitName,
                      },
                    },
                  ],
                },
                // 'Status': {
                //   select: {
                //     name: 'Backlog',
                //   },
                // },
                'Bucket': {
                  'multi_select': [
                  {
                    name: 'content',
                  },
                  {
                    name: 'submission',
                  },
                  {
                    name: 'data',
                  },
                  ]
                },
              },
              children: [
                {
                  object: 'block',
                  type: 'paragraph',
                  paragraph: {
                    text: [
                      {
                        type: 'text',
                        text: {
                          content: submitTime,                          
                        },
                      },
                    ],
                  },
                },
              ],
            });
            
            console.log(response);
          })();

    } 

  
}