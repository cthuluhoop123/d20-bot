/// requires
require('dotenv').config()
const TOKEN = process.env.TOKEN
const PREFIX = process.env.PREFIX || '!'
const Discord = require('discord.js')
const client = new Discord.Client()

/// Global Variables
const validDice = [4,6,8,10,12,20,100]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', message => {
    const command = message.content.toLowerCase().split(' ')[0]
    const args = message.content.split(' ')
    args.shift()
        
    switch (command) {
        case `${PREFIX}ping`:
            message.reply('Pong!')
            return

        case `${PREFIX}roll`:
            let diceobj = parseNotation(args)
            if(diceobj.failed){
                message.reply('The notation seems to be malformed. Please check your command and try again.')
                return 
            }
            let reply = ""
            for (let [dicevalue, count] of Object.entries(diceobj.counts)){
                if(count < 1){
                    continue
                }
                let rolledValues = []
                let dicecount = dicevalue
                let multiplier = 1
                if (dicevalue == "100"){
                    dicecount = 10
                    multiplier = 10
                }
                for (i = 0; i < count; i++) {
                    rolledValue.push(Math.ceil(Math.random()*dicecount)*multiplier)
                }
                let valuesString = ""
                for (let value of rolledValues){
                    valuesString += " `" + value + "`"
                }
                reply += count + "d" + dicevalue + ":" + valuesString + "\n"
            }
            if (reply == ""){
                message.reply("There are no dice to roll! Please check your notation.")
                return
            }
            message.reply(reply)
            return
    }
})

function parseNotation(args){
    var diceobj = {
        failed: false,
        counts: {
            "100": 0,
            "20": 0,
            "12": 0,
            "10": 0,
            "8": 0,
            "6": 0,
            "4": 0
        }
    }

    for (let arg of args) {
        let notationSplit = arg.split('d')
        let numberOfDice = 1;

        if (notationSplit[0] != ""){
            if (isNaN(notationSplit[0]) || notationSplit[0]<0){
                diceobj.failed = true
                return diceobj
            }
            numberOfDice = parseInt(notationSplit[0])
        }

        if (isNaN(notationSplit[1])){
            diceobj.failed = true
            return diceobj
        }

        if (notationSplit[1] in validDice && notationSplit[1] != ""){
            diceobj.counts[notationSplit[1]] += numberOfDice
        }else{
            diceobj.failed = true
            return diceobj
        }
    }

    return diceobj
}


client.login(TOKEN);