const Discord = require('discord.js')

module.exports = {
    name: 'divulgar',
    aliases: ['divulgar'],
    run: async(client, message, args) => {

        if(!message.member.roles.cache.has('808433451111153664')) return message.reply('Você não tem permissão o suficiente para poder utilizar este comando, é necessário ser um **Youtuber**. Você pode ver mais sobre em <#796871394087403523>')

        var canal = message.guild.channels.cache.get('808428178145149018')
        if(!canal) return message.reply('Sinto muito mas... O canal de divulgações não foi encontrado.')

        var embed = {
            title: '🤔 ● Qual é o link do video que deseja anunciar?',
            color: 'e67e22'
        }

        message.author.send({ embed: embed }).then(async msg => {

            message.reply('Olhe seu privado, contém informações importantes lá.')

            var filtro = (m) => m.author.id === message.author.id  
            collector = msg.channel.createMessageCollector(filtro, { max: 1 })   

            collector.on('collect', async (msg) => {

                let regex = /(http:\/\/)?(https:\/\/)?(youtube)|(http:\/\/)?(https:\/\/)?(youtu.be)/g
                let resultRegex = regex.exec(msg)
                if (!resultRegex == null) return message.author.send('Você precisa adicionar somente links de videos no youtube.')

                var embed = {
                    title: '🤔 ● Qual é o titulo do video que deseja anunciar?',
                    color: 'e67e22'
                }        

                var msg1 = await message.author.send({ embed: embed })
                collector = msg.channel.createMessageCollector(filtro, { max: 1 })   

                collector.on('collect', async (msg1) => {

                    var embed = {
                        title: '✅ ● Video divulgado com sucesso, boa sorte com o feedback ;)',
                        color: 'GREEN'
                    }

                    message.author.send({ embed: embed })

                    canal.send(`🎥 ● Novo video de **${message.author.username}**\n\n**Título:** ${msg1.content}\n**Link:** ${msg.content}`)

                })

            })

        }).catch(err => {

            var embed = {
                title: '❎ ● Abra seu privado para que possa seguir com o comando.',
                color: 'RED'
            }

            message.reply({ embed: embed })

        })
    }
}