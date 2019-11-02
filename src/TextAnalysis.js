const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");

const key_var = 'TEXT_ANALYTICS_SUBSCRIPTION_KEY';
//const key_var = 'c93eee6b9dab47299eff9ebae6ced048';
if (!process.env[key_var]) {
    throw new Error('please set/export the following environment variable: ' + key_var);
}
const subscription_key = process.env[key_var];

const endpoint_var = 'TEXT_ANALYTICS_ENDPOINT';
//const endpoint_var = 'https://eastus.api.cognitive.microsoft.com/';
if (!process.env[endpoint_var]) {
    throw new Error('please set/export the following environment variable: ' + endpoint_var);
}
const endpoint = process.env[endpoint_var];

const creds = new CognitiveServicesCredentials.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': subscription_key } });
const client = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);



export function analyzeSentence(sentence){

    const inputDocuments = {documents:[
        {language:"en", id:"1", text:sentence}
    ]}

    const operation = client.sentiment({multiLanguageBatchInput: inputDocuments})

    operation
    .then(result => {
        console.log(result.documents);
    })
    .catch(err => {
        throw err;
    });

        
}