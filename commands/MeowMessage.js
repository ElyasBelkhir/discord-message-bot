const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('meow')
            .setDescription('Replies with meow'),
        async execute(interaction) {
            await interaction.reply('meow')
        },
    
      };