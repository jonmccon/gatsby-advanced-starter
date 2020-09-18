
- mono, Flac format seems to work well
- use the URI in bearded-cats

<!-- Begin -->
gcloud ml speech recognize-long-running \
    'gs://bearded-cats/Kacey&Brittany_transcription.flac' \
     --language-code='en-US' --async

<!-- poll until its done -->
gcloud ml speech operations wait OPERATION_ID


7669907538395714176