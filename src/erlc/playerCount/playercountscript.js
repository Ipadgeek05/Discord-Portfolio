const { EmbedBuilder } = require('discord.js')

require('dotenv').config();

async function getPlayers(channel) {
  const response = await fetch('https://api.policeroleplay.community/v1/server/players', {
    method: 'GET',
    headers: {
      "server-key": process.env.API
    },
  });
  const data = await response.json();

  console.log(data)

  // const embed = new EmbedBuilder()
  // .setTitle('Players:')
  // .setDescription(data.Player)
  channel.send(data.Player)
}

module.exports = {
  getPlayers
}