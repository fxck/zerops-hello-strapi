# Zerops Hello Strapi

## Import yaml

```yaml
#yamlPreprocessor=on
project:
  name: zerops-hello-strapi
  tags:
    - hello
    - strapi

services:
  - hostname: prodapi
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-hello-strapi
    enableSubdomainAccess: true
    envSecrets:
      NODE_ENV: "production"
      HOST: "0.0.0.0"

      ADMIN_NAME: "Your"
      ADMIN_LASTNAME: "Name"
      ADMIN_MAIL: "your@mail.com"
      ADMIN_PASSWORD: Aa1<@generateRandomString(<8>)>

      DATABASE_HOST: "${db_hostname}"
      DATABASE_CLIENT: "postgres"
      DATABASE_PORT: "${db_port}"
      DATABASE_NAME: "${db_hostname}prod"
      DATABASE_USERNAME: "${db_user}"
      DATABASE_PASSWORD: "${db_password}"
      DATABASE_SSL: disable

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
      HOST: "0.0.0.0"

      ADMIN_NAME: "Your"
      ADMIN_LASTNAME: "Name"
      ADMIN_MAIL: "your@mail.com"
      ADMIN_PASSWORD: Aa1<@generateRandomString(<8>)>

      DATABASE_CLIENT: "postgres"
      DATABASE_HOST: "${db_hostname}"
      DATABASE_PORT: "${db_port}"
      DATABASE_NAME: "${db_hostname}dev"
      DATABASE_USERNAME: "${db_user}"
      DATABASE_PASSWORD: "${db_password}"
      DATABASE_SSL: disable

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
    maxContainers: 1

  - hostname: db
    type: postgresql@14
    mode: NON_HA
    priority: 10

  - hostname: storage
    type: object-storage
    objectStorageSize: 2
    objectStoragePolicy: public-read
    priority: 10

  - hostname: adminer
    type: php-apache@8.0+2.4
    buildFromGit: https://github.com/zeropsio/recipe-adminer@main
    enableSubdomainAccess: true
    minContainers: 1
    maxContainers: 1
```
