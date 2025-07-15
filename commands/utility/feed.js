const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feed')
		.setDescription('ALRIGHT MY LITTLE MIRACLE RATS!'),
	async execute(interaction) {
		await interaction.reply('TIME TO EAT!');
	},
}