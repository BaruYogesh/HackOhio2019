const CognitiveServicesCredentials = require("@azure/ms-rest-js");
const TextAnalyticsAPIClient = require("@azure/cognitiveservices-textanalytics");

export function log_key(key){
    console.log("id is ", process.env[key]);
    const key_var = key;
    if (!process.env[key_var]) {
        throw new Error('please set/export the following environment variable: ' + key_var);
    }
    const subscription_key = process.env[key_var];

    return subscription_key;
}

export function log_enpoint(end){

    const endpoint_var = end;
    if (!process.env[endpoint_var]) {
        throw new Error('please set/export the following environment variable: ' + endpoint_var);
    }

    const endpoint = process.env[endpoint_var];

    return endpoint;
}

export function buildClient (sub_key, endpoint){
    const creds = new CognitiveServicesCredentials.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': sub_key } });
    const client = new TextAnalyticsAPIClient.TextAnalyticsClient(creds, endpoint);

    return client;
}






export function analyzeSentence(client, sentence){

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