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

  console.log(`form name: ${formName}`)


  if (formName == 'Subscribe - Buttondown') {
    const email = JSON.parse(event.body).payload.email
    // 
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
    
    // 
    // NOTION 
      } else if (formName == 'Submit - Notion') {
        
        const notionContent = JSON.parse(event.body).payload.data

        var categoryLetter = notionContent.submitName.charAt(0).toUpperCase();
        var size = "look it up"
        
        if (notionContent.submitSize == "1-10") {
          size = "small" 
        } else if (notionContent.submitSize == "11-40") {
          size = "medium" 
        } else if (notionContent.submitSize == "41-100") {
          size = "large"  
        } else if (notionContent.submitSize == "100+") {
          size = "huge" 
        } else {
          size = "dunno"
        }
      
        var tags = 
          "-" + notionContent.rendering + " \n" +
          "-" + notionContent.advertising + " \n" +
          "-" + notionContent.architecture + " \n" +
          "-" + notionContent.branding + " \n" +
          "-" + notionContent.community + " \n" +
          "-" + notionContent.development + " \n" +
          "-" + notionContent.environmental + " \n" +
          "-" + notionContent.events + " \n" +
          "-" + notionContent.exhibition + " \n" +
          "-" + notionContent.experiential + " \n" +
          "-" + notionContent.freelance + " \n" + 
          "-" + notionContent.gaming + " \n" +
          "-" + notionContent.illustration + " \n" +
          "-" + notionContent.industrial + " \n" +
          "-" + notionContent.interior + " \n" +
          "-" + notionContent.marketing + " \n" +
          "-" + notionContent.motion + " \n" +
          "-" + notionContent.naming + " \n" +
          "-" + notionContent.packaging + " \n" +
          "-" + notionContent.photography + " \n" +
          "-" + notionContent.presentation + " \n" +
          "-" + notionContent.print + " \n" +
          "-" + notionContent.product + " \n" +
          "-" + notionContent.publicRelations + " \n" +
          "-" + notionContent.research + " \n" +
          "-" + notionContent.education + " \n" +
          "-" + notionContent.strategy + " \n" +
          "-" + notionContent.typography + " \n" +
          "-" + notionContent.uxui + " \n" +
          "-" + notionContent.vfx + " \n" +
          "-" + notionContent.video + " \n" +
          "-" + notionContent.sound + " \n" +
          "-" + notionContent.voice + " \n" +
          "-" + notionContent.virtualReality + " \n" +
          "-" + notionContent.eCommerce + " \n"

            const response = await notion.pages.create({
              parent: {
                database_id: NOTION_DB_ID,
              },
              properties: {
                Name: {
                  title: [
                    {
                      text: {
                        content: 'Submission - ' + notionContent.submitName,
                      },
                    },
                  ],
                },
                // Status
                'Status': {
                  select: {
                    name: 'Backlog',
                  },
                },
                // Tags
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
                'Assign': {
                  'object':'user',
                  'id':'17c5332f-ffd2-4c67-9f0a-6e8ae37c1e82',
                  'name':'Jonny McConnell',
                  'type':'person',
                }
              },
              children: [
                // {
                //   object: 'block',
                //   type: 'paragraph',
                //   paragraph: {
                //     // format in a code block as the exact setup
                //     text: [
                //       {
                //         type: 'text',
                //         text: {
                //           content: notionContent.created_time,                          
                //         },
                //       },
                //     ],
                //   },
                // },
                {
                  object: 'block',
                  type: 'paragraph',
                  paragraph: {
                    // format in a code block as the exact setup
                    text: [
                      {
                        type: 'text',
                        text: {
                          content: 
                          "###### Submitted by " + notionContent.submitContent + " \n" +
                          "--- \n" +
                          "title: \"" + notionContent.submitName + "\" \n" +
                          "featuredImage: ./-hamburgers.png \n" +
                          "website: \"" + notionContent.submitWebsite + "\" \n" +
                          "twit: \"" + notionContent.submitSocial + "\" \n" +
                          "inst: \" \" \n" +
                          "category: \"" + categoryLetter + "\" \n" +
                          "tags: \"" + notionContent.submitNeighborhood + tags + "\" \n" +
                          "" + size + "\n" +
                          "--- \n" +
                          "Description \n " +
                          "Would you like to be a guest on the show? Or do you want to hear from someone specifically? \n" +
                          "-" + notionContent.submitGuest + " \n" +
                          "\n" +
                          "Would you buy a hardcopy printed directory? \n" +
                          "-" + notionContent.submitPrint + " \n" +
                          "\n" +
                          "If you have any questions or suggestions, let us know: \n" +
                          "-" + notionContent.submitNotes + " \n" +
                          "\n"
                        },
                      },
                    ],
                  },
                },
              ],
            });
            
            console.log(response);

    } 

  
}