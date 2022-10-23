# Using AWS Parameters and Secrets lambda extension with Serverless framework

On the 18th of October 2022, AWS launched the AWS Parameters and Secrets Lambda Extension.

The new extension allow you to retrieve parameters both from AWS Systems Manager Parameter Store and secrets from AWS Secrets Manager, improving performances and decreasesing the latency and the cost when retrieving secrets in your lambdas.

You can find the announcement here: https://aws.amazon.com/about-aws/whats-new/2022/10/aws-parameters-secrets-lambda-extension/.

This repo contains a basic setup to use the extension when working Serverless framework. 

If you want to deploy on your AWS account, then:
1. Create a new secret in AWS Secrets Manager console

2. Install the libraries needed runing: 
    ```
    npm ci
    ```
3. Be sure to set your secret name in the `secretsExtensionEndpoint` in `src/displaySecrets/handler.ts`

4. Be sure to set the proper arn for the iam permission in `serverless.yml` file

5. Deploy the project using: 
    ```
    ./node_modules/.bin/serverless deploy
    ```
    NOTE: in order to deploy the project you have to have set AWS credentials.

Related AWS docs page: https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets_lambda.html#retrieving-secrets_lambda_env-var