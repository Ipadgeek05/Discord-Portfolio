const { EmbedBuilder } = require("discord.js");

async function messageDeleteFunc(message, channel) {
    const embed = new EmbedBuilder()
    .setTitle("MESSAGE DELETE")
    .setDescription(`Someone deleted a message!`) // console.log(message.channel.name)
    .addFields(
        { name: 'Message Deleted By:', value:  `${message.author}`, inline: true },
        { name: 'Message Deleted In:', value:  `<#${message.channelId}>`, inline: true },
        { name: 'Message:', value:  `${message.content}`},)
    .setColor("ff0000");

    channel.send({ embeds: [embed]})
}

module.exports = {
    messageDeleteFunc
}