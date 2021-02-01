Hosted on Netlify, Master will deploy on production everytime it's merged into at `seattlecreative.directoy`
Test will create it's own deployment at `test.seattlecreative.directoy`

Deploy pipeline builds a Gatsby bundle, double checks internal links for sanity and checks external links to make sure they resolve somewhat appropritely. Exceptions as marked in the `netlify.toml` file

A Netlify Function handles the email list subscribe form, that redirects to the homepage on success. 
(Should be it's own success state)

---

To work locally 
`npm install`
`npm run develop`
Use `ipconfig getifaddr en0` to get your ip address for use on another local device, like a phone
`npm run clean` if something breaks

---

Directory submission form uses Google Forms, which dumps everything into a spreadsheet. The spreadsheet pushes each new submission to Github as a new issue, formatted like a new entry. Then we can double check and paste in as a new `md` file to add it to the directory. 

---

Services

`buttondown` is simply the email styling and is only saved in the repo, this needs to be copied into the Buttondown admin 'Design' page

`episode-transcription` is a cli process for using Google Apps Transcription API after uploading a mono .flac version of a podcast episode to a bucket on GCP. The cli tool here is used so that it can process async on a large file entirely in GCP and polled for the response.

`submission-form` is a Gooogle Apps script that runs on a bound instance of gcp. Looks at the spreadsheet and passes along the info as a Github issue, minor data tweaks to match the sizing multiple choice to a single tag in Gatsby. Pretty brittle, it was updated to the new apps api but the github auth method needs some work for their [eventual api update.](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/) 




---
Forked from: https://github.com/Vagr9K/gatsby-advanced-starter
(It's a great starter!)





<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/vagr9k/gatsby-advanced-starter/blob/master/LICENSE'>
    <img src="https://img.shields.io/github/license/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
    <a href='https://github.com/vagr9k/gatsby-advanced-starter'>
    <img src="https://img.shields.io/github/tag/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
</div>

