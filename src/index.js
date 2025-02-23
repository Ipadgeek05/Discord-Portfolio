// node src/index.js

const {Client, GatewayIntentBits, Events} = require('discord.js');
require('dotenv').config();

const client = new Client(
    
    {intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]}
);

client.once(Events.ClientReady, readyClient => {
    console.log('Client Logged in.')

    const ticketChannelSend = require('./moderation/tickets/tickets')
    client.channels.cache.get('1342578405543252130').send({content: 'Open a ticket!',
        components: [ticketChannelSend.ticketRow],})
});

client.on(Events.InteractionCreate, (interaction) =>{
    if (interaction.commandName === 'playercount') {
        const playercountFile = require('./erlc/playerCount/playercountscript')
        playercountFile.getPlayers(client.channels.cache.get('1342575874540830821'))
    }
})

client.on(Events.MessageDelete, (message) => {
    const messageDeleteFile = require('./moderation/message/messagedelete')
    messageDeleteFile.messageDeleteFunc(message, client.channels.cache.get('1342575874540830821'))
})

client.on(Events.MessageUpdate, (oldMessage, newMessage) =>{
    const messageDeleteFile = require('./moderation/message/messageEdit')
    messageDeleteFile.messageEditFunc(client.channels.cache.get('1342575874540830821'), newMessage, oldMessage)
})

client.login(process.env.TOKEN)