const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

bot.login(NTIwOTA1MzU2MTMwNTE2OTky.D3q4dw.vf8Q9sQy916VDL9NSTx5gGzWJ-U);
