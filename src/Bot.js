const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

export function login(){
    client.login("NjM5NjYzMDU4MjEzNjY2ODE3.XbujDQ.51KiAjcZOlHhNBoqFHNMSyNuBNw");
}

//store messages in a sqlite database
//textanalysis can access database and process scripts
