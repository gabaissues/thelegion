const Discord = require('discord.js')
const { database } = require('../../services/database')
const moment = require('moment')

module.exports = {
    name: 'userinfo',
    aliases: ['userinfo', 'info', 'profile'],
    run: async(client, message, args) => {

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) {

            let snap = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
            if(snap.val() === null) {

                message.reply('Você não possui um registro, crie antes de usar este comando.')

            } else {

                var embed = {
                    title: `📋 ● Suas informações.`,
                    description: `🙇 **Nick:** ${snap.val().nick}\n🙍 **Guilda:** ${snap.val().guilda}\n🪐 **Entrou em:** ${moment(message.member.joinedAt).format('DD/MM/YYYY HH:mm')}\n\n💬 **Mensagem:** ${snap.val().mensagem}`,
                    color: 'e67e22',
                    thumbnail: {
                        url: `https://mc-heads.net/combo/${snap.val().nick}`
                    },
                    image: {
                        url: snap.val().imagem
                    }
                }

                message.reply({ embed: embed })

            }

        } else {



        }

    }
}