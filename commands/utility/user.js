const{SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides info about the user.'),
    async execute(interaction) {
        // interaction.user = object representing who ran command
        // interaction.member = represents user in the specific guild
        await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
    },
};