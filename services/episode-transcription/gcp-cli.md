
- mono, Flac format seems to work well
- use the URI in bearded-cats

<!-- Begin -->
gcloud ml speech recognize-long-running \
    'gs://bearded-cats/Meeting 061121_transcription.flac' \
     --language-code='en-US' --async

<!-- poll until its done -->
gcloud ml speech operations wait OPERATION_ID


gcloud ml speech operations wait 1372081993328326120




<!--  save to json -->
message TranscriptOutputConfig {

    oneof output_type {
      // Specifies a Cloud Storage URI for the recognition results. Must be
      // specified in the format: `gs://bucket_name/object_name`
      string gcs_uri = 1;
    }
  }