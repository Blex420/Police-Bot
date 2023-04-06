const Discord = require('discord.js');
const {Client, MessageActionRow, MessageButton, GatewayIntentBits} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent
    ],
});


client.on('ready', () => {
    console.log(`Bot ist eingeloggt als ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === '#ping') { // Vergleicht den Inhalt der Nachricht (nicht case-sensitive) mit 'oing'
        message.reply('Pong'); // Antwortet mit 'Pong' auf die Nachricht
    }
});

client.login('MTA5MjM4MTg1NzU5MDU1NDY4NQ.G3P2PQ.mV6owLWJcbtyzKiA3BEbC3FAKQ50a_RHIKV4G8');