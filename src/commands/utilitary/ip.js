const Discord = require('discord.js')
const util = require('minecraft-server-util')

module.exports = {
    name: 'ip',
    aliases: ['ip', 'status'],
    run: async(client, message, args) => {

        util.status('play.hypixel.net').then(async server => {

            var embed = {
                title: `🎲 ● Venha jogar conosco, ${server.host}`,
                description: `**Status:** Online\n**Players:** ${server.onlinePlayers}/${server.maxPlayers}\n**Versão:** ${server.version}\n**IP:** ${server.host}\n\nEstá esperando o que? Venha jogar com a gente!`,
                color: 'e67e22'
            }
    
            message.reply({ embed: embed })

        }).catch(err => {

            var embed = {
                title: '🎲 ● Venha jogar conosco mais tarde',
                description: `**Status:** Offline\n**Players:** 0/---`,
                color: 'e67e22'
            }

            message.reply({ embed: embed })

        })

    }
}