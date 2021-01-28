
- mono, Flac format seems to work well
- use the URI in bearded-cats

<!-- Begin -->
gcloud ml speech recognize-long-running \
    'gs://bearded-cats/Artefact - Felix & Tessa_firstSession - rough.flac' \
     --language-code='en-US' --async

<!-- poll until its done -->
gcloud ml speech operations wait OPERATION_ID


891263601233904918