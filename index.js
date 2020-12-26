const Discord = require("discord.js");

const token = 'NzkyMzY1NzgwMDUzMzkzNDg4.X-cqIw.rP5RlRm3uP0zeY861XooBg_Teqo';
const client = new Discord.Client();
client.login(token);

client.on("message",function(message) {
    if(message.channel.type=='dm') {
        const userID = message.author.id;
        const user = client.users.cache.get(userID);
        user.send(message.content);
    }
});