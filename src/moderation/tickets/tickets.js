const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

const button = new ButtonBuilder()
    .setLabel('Open a ticket!')
    .setStyle(ButtonStyle.Success)
    .setCustomId('ticketOpen')

const ticketRow = new ActionRowBuilder()
    .addComponents(button)


module.exports = {
    ticketRow
}