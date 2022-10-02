const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yo')
        .setDescription('Replies with yo'),
    async execute(interaction) {
		await interaction.reply('yo')
    },
    data: new SlashCommandBuilder()
        .setName('meow')
        .setDescription('Replies with meow'),
    async execute(interaction) {
		await interaction.reply('meow')
    }
};