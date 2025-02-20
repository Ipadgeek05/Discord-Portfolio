const { EmbedBuilder } = require("discord.js");

async function messageEditFunc(channel, newMessage, oldMessage) {
    const embed = new EmbedBuilder()
    .setTitle("MESSAGE EDIT")
    .setDescription(`Someone edited a message!`) 
    .addFields(
        { name: 'Old Message:', value:  `${oldMessage.content}`, inline: true },
        { name: 'New Message:', value:  `${newMessage.content}`, inline: true },
        { name: 'Sent By:', value:  `${newMessage.author}`},
        { name: 'Sent In:', value:  `<#${newMessage.channelId}>`},)
    .setColor("FFFF00");

    channel.send({ embeds: [embed]})
}

module.exports = {
    messageEditFunc
}