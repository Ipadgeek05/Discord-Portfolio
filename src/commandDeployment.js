// node src/commandDeployment.js

const { REST, Routes } = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'pingity',
        description: 'help'
    },
];

const rest = new REST().setToken(process.env.TOKEN);

(async () => {
	try {
		console.log(`Started refreshing application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands('1339327441784537098', '1327585829979422741'),
			{ body: commands },
		);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();