const Discord = require('discord.js');
const {Client, MessageActionRow, MessageButton, message, GatewayIntentBits, Embed, command, EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

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

client.on('messageCreate', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});


client.on('messageCreate', message => {
    if (message.content === '!Dienst') {
        const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
        const button1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('button')
                    .setLabel('Dienst Starten')
                    .setStyle(ButtonStyle.Success),
            );
        const button2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('button')
                    .setLabel('Dienst beendet')
                    .setStyle(ButtonStyle.Danger),
            );
        const embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Dienst beginnen`)

        const embed2 = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`${message.author.tag} ist jetzt im Dienst`)

        message.channel.send({embeds: [embed], components: [button1]});

        const collector = message.channel.createMessageComponentCollector();

        collector.on('collect', async i => {
            if (i.customId === 'button') {
                if (i.component.label === 'Dienst beendet') {
                    await i.deferUpdate();
                    await i.editReply({ content: 'Dienst beendet.', components: [] });
                    collector.stop();
                    i.message.delete();
                } else {
                    await i.deferUpdate();
                    await i.editReply({ content: 'Dienst gestartet.', embeds: [embed2], components: [button2] });
                }
            }
        });
    }
});


client.login('MTA5MjM4MTg1NzU5MDU1NDY4NQ.G3P2PQ.mV6owLWJcbtyzKiA3BEbC3FAKQ50a_RHIKV4G8');