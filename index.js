const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits } = require('discord.js');
const { AttachmentBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'yo') {
		await interaction.reply('yo');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\n Server created: ${interaction.guild.createdAt}` );
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'meow') {
		await interaction.reply('meow')
	}

});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'button') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Click me!')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'A wild button appeared!', components: [row] });
	}
});



client.login(process.env.TOKEN);
