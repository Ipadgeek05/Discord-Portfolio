// node src/index.js

const {Client, GatewayIntentBits, Events} = require('discord.js');
require('dotenv').config();

const client = new Client(
    
    {intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]}
);

client.once(Events.ClientReady, readyClient => {
    console.log('Client Logged in.')
});

client.on(Events.InteractionCreate, interaction => {
    if (interaction.commandName === 'pingity'){
        interaction.reply('test')
    }
})

client.on(Events.MessageDelete, (message) => {
    const messageDeleteFile = require('./moderation/message/messagedelete')
    messageDeleteFile.messageDeleteFunc(message, client.channels.cache.get('1339637438791942286'))
})

client.on(Events.MessageUpdate, (oldMessage, newMessage) =>{
    const messageDeleteFile = require('./moderation/message/messageEdit')
    messageDeleteFile.messageEditFunc(client.channels.cache.get('1339637438791942286'), newMessage, oldMessage)
})

client.login(process.env.TOKEN)