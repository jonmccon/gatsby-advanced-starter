// Guide for using gcp to transcribe
// https://cloud.google.com/speech-to-text/docs/async-recognize#speech_transcribe_async_gcs-gcloud


async function runTranscribe() {

// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const fs = require('fs');
const timestamp = Date.now();

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */

const filename = '/Users/Jonny/Documents/-Creative\ Directory/Audio/edits-for-transcription/AndrewMeans_transcription.flac';
const encoding = 'FLAC';
const sampleRateHertz = 48000;
const languageCode = 'en-US';


const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};
const audio = {
  content: fs.readFileSync(filename).toString('base64'),
};

const request = {
  config: config,
  audio: audio,
};

// Detects speech in the audio file. This creates a recognition job that you
// can wait for now, or get its result later.
const [operation] = await client.longRunningRecognize(request);

// Get a Promise representation of the final result of the job
const [response] = await operation.promise();
const transcription = response.results
  .map(result => result.alternatives[0].transcript)
  .join('\n');
console.log(`Transcription: ${transcription}`);


// // Write it to a file
// fs.writeFile(`Transcription ${timestamp}`, transcription, (err) => {
//   // throws an error, you could also catch it here
//   if (err) throw err;

//   // success case, the file was saved
//   console.log(`Transcription created at ${filename}`);
// });

}

runTranscribe();