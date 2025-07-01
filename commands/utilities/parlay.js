const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('parlay')
		.setDescription('Creates a parlay'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};	