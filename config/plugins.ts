export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID'),
        secretAccessKey: env('S3_ACCESS_SECRET'),
        endpoint: env('S3_ENDPOINT_URL'),
        region: 'us-east-1',
        s3ForcePathStyle: true,
        params: {
          Bucket: env('S3_BUCKET_NAME')
        },
      },
    },
  },
});
