const { SlashCommandBuilder } = require('discord.js');

const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feed')
		.setDescription('ALRIGHT MY LITTLE MIRACLE RATS!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('the rat')
            .setRequired(true)),
	async execute(interaction) {
		const rat = interaction.options.getUser('user');
		await interaction.deferReply();
		await wait(3_000);
		await interaction.editReply(`TIME TO EAT! ${interaction.user} FED ${rat} A PRETZEL.`);
	},
};