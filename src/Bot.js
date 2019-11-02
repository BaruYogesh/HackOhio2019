const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  //message.content add to database field 1
  //meess
});

export function login(){
    client.login(config.botToken);
}

//store messages in a sqlite database
//textanalysis can access database and process scripts
