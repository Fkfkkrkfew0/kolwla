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















cclient.on('message', message => {
    if (message.content === '$spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    











client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
