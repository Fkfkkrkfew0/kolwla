const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ESMAEL");



       client.on('message', message => {
    if (message.content === "$help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`© SHYBOY_05 ™.`, 'https://images-ext-2.discordapp.net/external/X9SanEG0s7Dtv3krTgy-kod_fj6JRVJ2AG4JryCiiz0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/375761288518828042/fffa31c797e88cf059dd6db424ff456a.png?width=80&height=80')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });







       var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`áíÓ áÏíß ÕáÇÍíÇÊ`**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });








client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
