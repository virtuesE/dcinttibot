const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Roll to see if you will be serving 1 year or 6 months in the military (0-50 = 6mnths 51-100 = 1y and if you manage to roll 101 1/101 chance you manage to snatch yourself a C-paper)'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 101);
        if(chance > 91){
            message.reply("Wow, you just scored one of the rarest things in the world, the mythical C-paper")
        }
        else if(chance > 90)
        {
            message.reply("Congrats, you just landed yourself a 1 year job in the army!");
        }
        else if(chance > 45)
        {
            message.reply("Unfortunately you can only spend 6 months in the army.");
        }
    }
}


module.exports = CoinFlipCommand;