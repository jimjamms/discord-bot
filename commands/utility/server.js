const{SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides info about server'),
    async execute(interaction) {
        // interaction.guild = represents server the command was run in
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    },
};