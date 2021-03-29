const Discord = require('discord.js')

module.exports = {
    name: 'anunciar',
    aliases: ['anunciar', 'anuncio'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Administrador.**')

        var embed = {
            title: '🤔 ● Você quer um anúncio com ou sem embed? **SEM/COM**',
            color: 'e67e22'
        }

        var msg = await message.reply({ embed: embed })

        var filtro = (m) => m.author.id === message.author.id 
        collector = msg.channel.createMessageCollector(filtro, { max: 1 })

        collector.on('collect', async (msg) => {

            var embed = {
                title: '🤔 ● Em qual canal você quer anúnciar seu anuncio?',
                color: 'e67e22'
            }
    
            var msg1 = await message.reply({ embed: embed })
            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

            collector.on('collect', async (msg1) => {
            
                var canal = msg1.mentions.channels.first() || message.guild.channels.cache.get(msg1.content)
                if(!canal) return message.reply('Insira um canal válido.')

                var embed = {
                    title: '🤔 ● Qual será o titulo do seu anúncio?',
                    color: 'e67e22'
                }
        
                var msg2 = await message.reply({ embed: embed })
                collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                collector.on('collect', async (msg2) => {

                    switch(msg.content.toLowerCase()) {

                        case "sem":

                            canal.send(`${msg2.content}`)

                            message.reply(`Anúncio enviado com sucesso, veja em ${canal}`)

                        break;
                        case "com":

                            var embed = {
                                title: '🤔 ● Qual será a descrição do seu anúncio?',
                                color: 'e67e22'
                            }
                    
                            var msg3 = await message.reply({ embed: embed })
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                            collector.on('collect', async(msg3) => {

                                var embed = {
                                    author: {
                                        name: `Anúncio › ${msg2.content}`,
                                        icon_url: message.guild.iconURL()
                                    },
                                    description: msg3.content,
                                    color: 'e67e22',
                                    footer: {
                                        text: 'The Legion © Todos os direitos reservados.'
                                    }
                                }

                                canal.send({ embed: embed })

                                message.reply(`Anúncio enviado com sucesso, veja em ${canal}`)

                            })

                        break;
                        default:

                            message.reply('Você não inseriu certo, execute o comando novamente e responda direito as questões.')

                        break;

                    }

                })

            })
            

        })

    }
}