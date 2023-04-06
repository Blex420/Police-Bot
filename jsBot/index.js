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
    const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
    message.delete();
    // Überprüfen, ob der Benutzer, der den Befehl geschrieben hat, auch der Autor der Nachricht ist
    if (message.author.id !== message.member.user.id) {
      message.reply('Du darfst den Befehl nicht ausführen.');
      return;
    }
    const userMention = message.author.toString();
    let button1User = null; // Variable zum Speichern des Benutzernamens, der Button1 gedrückt hat

    const button1 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('button1')
          .setLabel('Dienst Starten')
          .setStyle(ButtonStyle.Success),
      );
    const button2 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('button2')
          .setLabel('Dienst beendet')
          .setStyle(ButtonStyle.Danger),
      );
    const embed1 = new EmbedBuilder()
      .setColor("Green")
      .setDescription(`Dienst beginnen`)

    const embed2 = new EmbedBuilder()
      .setColor("Red")
      .setDescription(`${userMention}`)

    message.channel.send({ embeds: [embed1], components: [button1] });

    let startTime; // Variable zum Speichern des Startzeitpunkts

    const collector = message.channel.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });

    collector.on('collect', async i => {
      if (i.customId === 'button1') {
        // Speichern des Startzeitpunkts beim Klicken von button1
        startTime = i.createdTimestamp;
        button1User = i.user.username; // Speichern des Benutzernamens, der Button1 gedrückt hat
        await i.update({ embeds: [embed2], components: [button2] });
      } else if (i.customId === 'button2') {
        // Überprüfen, ob der Startzeitpunkt gespeichert wurde und ob der Benutzername mit dem Benutzernamen übereinstimmt, der Button1 gedrückt hat
        if (startTime) {
          const endTime = i.createdTimestamp;
          const timeDifference = endTime - startTime; // Berechnen der Zeitdifferenz
          const minutes = Math.floor(timeDifference / 60000); // Umrechnen in Minuten

          // Nachricht mit Zeitdifferenz senden
          await i.deferUpdate();
          await i.editReply({ content: `Dienst beendet. ${userMention} war ${minutes} Minuten im Dienst.`, components: [] });
          collector.stop();
        } else {
          console.log('Ungültige Interaktion');
        }
      }
    });
  }
});
client.login('MTA5MjM4MTg1NzU5MDU1NDY4NQ.Gw7IhU.NO-aueiQvCqrMgr_eBKBH3mzKkPtYc3M5RLnNg');