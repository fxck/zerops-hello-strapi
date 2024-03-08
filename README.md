# Zerops Hello Strapi

...

## Import yaml

```yaml
#yamlPreprocessor=on
project:
  name: zerops-hello-strapi
  tags:
    - hello
    - strapi

services:
  - hostname: db
    type: postgresql@14
    mode: NON_HA
    priority: 10

  - hostname: storage
    type: object-storage
    objectStorageSize: 2
    priority: 10

  - hostname: prodapi
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-hello-strapi
    enableSubdomainAccess: true
    envSecrets:
      NODE_ENV: "production"

      DATABASE_HOST: "${db_hostname}"
      DATABASE_CLIENT: "postgres"
      DATABASE_PORT: "${db_port}"
      DATABASE_NAME: "${db_hostname}prod"
      DATABASE_USERNAME: "${db_user}"
      DATABASE_PASSWORD: "${db_password}"
      DATABASE_SSL: false

      S3_BUCKET_NAME: ${storage_bucketName}
      S3_ACCESS_KEY_ID: "${storage_accessKeyId}"
      S3_ACCESS_SECRET: "${storage_secretAccessKey}"
      S3_ENDPOINT_URL: "${storage_apiUrl}"

      ADMIN_JWT_SECRET: <@generateRandomString(<22>)>
      JWT_SECRET: <@generateRandomString(<22>)>
      API_TOKEN_SALT: <@generateRandomString(<22>)>
      TRANSFER_TOKEN_SALT: <@generateRandomString(<22>)>
      APP_KEYS: <@generateRandomString(<22>)>,<@generateRandomString(<22>)>,<@generateRandomString(<22>)>,<@generateRandomString(<22>)>
    ports:
      - port: 1337
        httpSupport: true
    verticalAutoscaling:
      minVCpu: 1
      maxVCpu: 5
      minRam: 1
      maxRam: 1
    minContainers: 1

  - hostname: devapi
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-hello-strapi
    enableSubdomainAccess: true
    envSecrets:
      NODE_ENV: "development"

      DATABASE_CLIENT: "postgres"
      DATABASE_HOST: "${db_hostname}"
      DATABASE_PORT: "${db_port}"
      DATABASE_NAME: "${db_hostname}prod"
      DATABASE_USERNAME: "${db_user}"
      DATABASE_PASSWORD: "${db_password}"
      DATABASE_SSL: false

      S3_BUCKET_NAME: ${storage_bucketName}
      S3_ACCESS_KEY_ID: "${storage_accessKeyId}"
      S3_ACCESS_SECRET: "${storage_secretAccessKey}"
      S3_ENDPOINT_URL: "${storage_apiUrl}"

      ADMIN_JWT_SECRET: <@generateRandomString(<22>)>
      JWT_SECRET: <@generateRandomString(<22>)>
      API_TOKEN_SALT: <@generateRandomString(<22>)>
      TRANSFER_TOKEN_SALT: <@generateRandomString(<22>)>
      APP_KEYS: <@generateRandomString(<22>)>,<@generateRandomString(<22>)>,<@generateRandomString(<22>)>,<@generateRandomString(<22>)>
    ports:
      - port: 1337
        httpSupport: true
    verticalAutoscaling:
      minVCpu: 1
      maxVCpu: 5
      minRam: 1
      maxRam: 1
    minContainers: 1
```
