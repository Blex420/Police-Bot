const Discord = require('discord.js');
const {
    Client, MessageActionRow, MessageButton, message, GatewayIntentBits, Embed, command, EmbedBuilder,
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

client.on('messageCreate', message => {
    if (message.content === '!Dienst') {
        const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

        if (message.author.id !== message.member.user.id) {
            message.reply('Du darfst den Befehl nicht ausführen.');
            return;
        }

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
            .setDescription(`gehe jetzt in den Dienst`)

        const embed2 = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`${message.author.tag} ist jetzt im Dienst`)

        message.channel.send({embeds: [embed], components: [button1]});

        const collector = message.channel.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });

        collector.on('collect', async i => {
            if (i.customId === 'button') {
                if (i.component.label === 'Dienst beendet') {
                    await i.deferUpdate();
                    await i.editReply({ content: 'Dienst beendet.', components: [] });
                    collector.stop();
                    i.message.delete();
                } else {
                    await i.update({embeds: [embed2], components: [button2]});
                }
            }
        });
    }
});

client.login('MTA5MjQ4NjYxNjkxODAwMzczMg.G5u9Yy.BdQNsoDCFvdAyO3VfrS0axTnsHR22dMVSiDWVg');