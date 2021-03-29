const Discord = require('discord.js')

module.exports = {
    name: 'sugerir',
    aliases: ['sugerir', 'sugestao', 'sugestão'],
    run: async(client, message, args) => {

        var embed = {
            title: '💡 ● Qual é o titulo da sua sugestão?',
            color: 'e67e22'
        }

        message.author.send({ embed: embed }).then(msg => {

            message.reply('Cheque seu privado, enviei algumas coisinhas lá.')

            var filtro = (m) => m.author.id === message.author.id
            
            collector = msg.channel.createMessageCollector(filtro, { max: 1 })
            collector.on('collect', async (msg) => {

                var embed = {
                    title: '💡 ● Qual é a sua sugestão?',
                    color: 'e67e22'
                }

                var msg1 = await message.author.send({ embed: embed })

                collector = msg.channel.createMessageCollector(filtro, { max: 1 })
                collector.on('collect', async (msg1) => {
                
                    var embed = {
                        title: '💡 ● Por que deveriamos aceitar-lá?',
                        color: 'e67e22'
                    }

                    var msg2 = await message.author.send({ embed: embed })

                    collector = msg.channel.createMessageCollector(filtro, { max: 1 })
                    collector.on('collect', async (msg2) => {
                    
                        var embed = {
                            title: '💡 ● Sugestão enviada, te desejo um bom feedback ;)',
                            color: 'GREEN'
                        }

                        message.author.send({ embed: embed })

                        var embed = {
                            title: `💡 ● Sugestão de ${message.author.tag}`,
                            image: {
                                url: 'https://cdn.discordapp.com/attachments/737866142143741963/799428582047875113/advancement.png'
                            },
                            color: 'e67e22',
                            description: `🙇 **Título:** ${msg.content}\n💁 **Sugestão:** ${msg1.content}\n\n🤦 **Motivo para aceitarem:** ${msg2.content}`
                        }

                        var msg3 = await message.guild.channels.cache.get('727067032457314324').send({ embed: embed })

                        msg3.react('✅')
                        await msg3.react('❎')
                        await msg3.react('🛠️')

                        var filtro = (r, u) => u.id === message.author.id 
                        collector = msg3.createReactionCollector(filtro)

                        collector.on('collect', async (r, u) => {

                            if(!message.guild.members.cache.get(u.id).hasPermission('KICK_MEMBERS')) return;
                            switch(r.emoji.name) {

                                case "🛠️":

                                    msg3.delete()

                                break;

                            }

                        })

                    })
                
                })

            })

        }).catch(err => {

            message.reply('Abra seu privado para poder sugerir algo em nosso servidor.')

        })

    }
}