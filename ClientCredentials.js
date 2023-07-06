const msal = require('@azure/msal-node');
const { clientId, authority, clientSecret, scope } = require('./Config');



// Create a configuration object for the Azure AD App Registration
const clientCredentialConfig = {
    auth: {
        clientId: clientId,
        authority: authority,
        clientSecret: clientSecret
    }
}


// Create a new MSAL client for client credential flow
const clientCredentialClient = new msal.ConfidentialClientApplication(clientCredentialConfig);



// Acquire an access token using client credential flow
async function acquireTokenWithClientCredential() {
    try {
        const clientCredentialRequest = {
            scopes: [`api://${scope}/.default`],  // Replace with the scopes required for your API
        };



        const clientCredentialResult = await clientCredentialClient.acquireTokenByClientCredential(clientCredentialRequest);
        console.log('Access Token:', clientCredentialResult.accessToken);
    } catch (error) {
        console.error('Error:', error);
    }
}



// Call the function to acquire an access token
acquireTokenWithClientCredential();