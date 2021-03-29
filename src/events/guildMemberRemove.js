const Discord = require('discord.js')

module.exports = (client) => {
    
    client.on('guildMemberRemove', (membro) => {

        var embed = {
            title: `${membro.username} saiu do servidor.`,
            color: 'e67e22'
        }

        client.guild.channels.cache.get('739640263055769632').send({ embed: embed })

    })

}