const{SlashCommandBuilder, MessageFlags} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('steal')
        .setDescription('I BET SOME RAT BABIES WOULD LOVE A DELICIOUS PRETZEL...'),
    async execute(interaction) {
        await interaction.reply({content:'OK OK OK OK MAE.', flags: MessageFlags.Ephemeral});
        await wait(2_000);
        await interaction.editReply("YOU'RE ONLY GONNA GET ONE SHOT AT THIS.");
        await wait(2_000);
        await interaction.editReply("JUST GOTTA FREEZE WHEN HE LOOKS OVER.");
        await wait(2_000);
        await interaction.editReply("EVEN IF YOU'RE HOLDING A PRETZEL.");
        await wait(2_000);
        await interaction.editReply("NO MOVEMENT.");
        await wait(2_000);
        await interaction.editReply("IT'S SIMPLE PSYCHOLOGY.");
        await wait(2_000);
        await interaction.editReply("YOU'VE DONE THIS BEFORE.");
        await wait(2_000);
        await interaction.editReply("YOU'VE STILL GOT IT.");
        await wait(2_000);
        await interaction.editReply("EASY EASY EASY.");
        await wait(2_000);
        await interaction.editReply("OK GO.");
        await wait(3_000);
        var msg =  await interaction.followUp("I. AM. THE. BANDIT. QUEEN");
        await wait(2_000);
        await interaction.deleteReply(msg);
        await interaction.deleteReply();
    },
};