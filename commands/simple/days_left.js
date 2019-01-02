const commando = require('discord.js-commando');

class TimeLeftCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'timeleft',
            group: 'simple',
            memberName: 'timeleft',
            description: 'See how much time you have left to live before your mandatory military service.'
        });
    }
    async run(message, args)
    {
        var start = new Date("January 7, 2019"),
    end = new Date(),
    diff = 0,
    days = 1000 * 60 * 60;

    diff = start - end;
    message.reply(Math.floor(diff / days) + " hours left before January 7th AKA Intti!");
    }
}

module.exports = TimeLeftCommand;