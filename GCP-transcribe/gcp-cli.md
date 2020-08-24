
- mono, Flac format seems to work well
- use the URI in beared-cats

<!-- Begin -->
gcloud ml speech recognize-long-running \
    'gs://bearded-cats/TedLeonhardt_transcription.flac' \
     --language-code='en-US' --async

<!-- poll until its done -->
gcloud ml speech operations wait OPERATION_ID


