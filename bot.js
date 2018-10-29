const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ESMAEL");



       client.on('message', message => {
    if (message.content === "$help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`tm.`, 'https://www.google.iq/search?q=%D8%B5%D9%88%D8%B1+%D8%AE%D8%B1%D8%A7%D9%81%D9%8A%D9%87&rlz=1C1SQJL_enIQ819IQ819&tbm=isch&source=iu&ictx=1&fir=4JnUlCWbUq9COM%253A%252C6jOTha7BwnQUAM%252C_&usg=AI4_-kTbfMn4lyM6INQS76g5KXBMq062Cw&sa=X&ved=2ahUKEwi8mqudiqzeAhUJa8AKHX2gCJQQ9QEwAXoECAUQBg#imgrc=ZJ5t0pcejWkSOM:')
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















client.on('message', message => {
    if (message.content === "-server4") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type`-roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });





















client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
