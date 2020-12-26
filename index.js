const Discord = require("discord.js");
const config = require("./config.js");
const token = config.token;
const client = new Discord.Client();
client.login(token);

client.on("message",function(message) {
    if(message.channel.type=='dm') {
        const userID = message.author.id;
        const user = client.users.cache.get(userID);
        user.send(message.content);
    }
});