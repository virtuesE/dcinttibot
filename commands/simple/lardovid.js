const commando = require('discord.js-commando');

class LardoVidCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'lardovid',
            group: 'simple',
            memberName: 'lardovid',
            description: 'Days since last lardo upload <a:rageDingo:407175630388592642>'
        });
    }
    async run(message, args)
    {
        var start = new Date("June 16, 2018"),
    end = new Date(),
    diff = 0,
    days = 1000 * 60 * 60 * 24;

    diff = end - start;
    message.reply(Math.floor(diff / days) + " days since last lardo upload <a:rageDingo:407175630388592642>");
    }
}

module.exports = LardoVidCommand;