import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as bot from './Bot';
import * as ta from './TextAnalysis';


bot.login();

//'TEXT_ANALYTICS_SUBSCRIPTION_KEY'
//'TEXT_ANALYTICS_ENDPOINT'

let key = ta.log_key('TEXT_ANALYTICS_SUBSCRIPTION_KEY');
let end =ta.log_enpoint('TEXT_ANALYTICS_ENDPOINT');
let azureClient = ta.buildClient(key, end);

ta.analyzeSentence(azureClient, "Hello World");

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
