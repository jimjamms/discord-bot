const {REST, Routes} = require('discord.js');
const {clientId, guildId, token} = require('./config.json');

const rest = new REST().setToken(token);

rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1394507892953976982'))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);

rest.delete(Routes.applicationGuildCommand(clientId, '1394507892953976982'))
    .then(() => console.log('Successfully deleted command'))
    .catch(console.error);