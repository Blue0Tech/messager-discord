const Discord = require("discord.js");
const config = require("./config.js");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const token = config.token;
const client = new Discord.Client();
client.login(token);

client.on("message",function(message) {
    if (message.author.bot) return;
    if(message.channel.type=='dm') {
        const userID = message.author.id;
        const user = client.users.cache.get(userID);
        fromName = message.author.username;
        content = message.content;
        console.log(fromName,':',content);
        readline.question('Message to reply:\n',messageToSend => {
            user.send(messageToSend);
            readline.close();
        });
    }
});