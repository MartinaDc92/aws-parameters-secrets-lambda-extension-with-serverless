import got from 'got';
import * as AWS from 'aws-sdk'; 

export const displaySecret = async () => {
    const secretsExtensionEndpoint = `http://localhost:2773/secretsmanager/get?secretId={your-secret-id}`;
    const headers = {
        "X-Aws-Parameters-Secrets-Token": process.env.AWS_SESSION_TOKEN
    }

    const secret = await got.get(secretsExtensionEndpoint,{ 
        headers,
        responseType: 'json', 
        resolveBodyOnly: true
    }) as AWS.SecretsManager.GetSecretValueResponse;

    console.log(secret.SecretString );
}