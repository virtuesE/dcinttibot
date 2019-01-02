const Commando = require('discord.js-commando');
const bot = new Commando.Client();    
const TOKEN = 'NTMwMDAwODcwNjQ1OTU2NjIy.Dw5ClQ.MNoEXTC2Et5Ca9G8oFndByvsqxs'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if (message.content == 'lardo')
    {
        message.channel.send('luola is my home <:TriLardoCD:515548577720696843>');
    }
    if(message.content == 'nigger')
    {
        message.channel.send('hol up <:cmonBrug:499185686092709898>' + message.author);
    }
    if(message.content == 'brb')
    {
        message.channel.send('brb käyn laittaa puita saunaa <:dingoTIP:406785122818457600> ' + message.author);
    }
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(process.env.BOT_TOKEN);
