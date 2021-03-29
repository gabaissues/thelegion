const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    aliases: ['avatar'],
    run: async(client, message, args) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

        if(!membro) {

            var embed = {
                title: '🖼️ ● Seu avatar',
                description: `[Clique aqui](${message.author.displayAvatarURL({ dynamic: true, size: 4096 })}) para baixar seu avatar.`,
                color: 'e67e22',
                image: {
                    url: message.author.displayAvatarURL({ dynamic: true, size: 4096 })
                }
            }

            message.reply({ embed: embed })

        } else {

            var embed = {
                title: `🖼️ ● Avatar de ${membro.user.username}`,
                description: `[Clique aqui](${membro.user.displayAvatarURL({ dynamic: true, size: 4096 })}) para baixar esse avatar.`,
                color: 'e67e22',
                image: {
                    url: membro.user.displayAvatarURL({ dynamic: true, size: 4096 })
                }
            }

            message.reply({ embed: embed })

        }

    }
}