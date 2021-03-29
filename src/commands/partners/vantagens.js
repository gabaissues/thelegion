const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'vantagens',
    aliases: ['vantagens'],
    run: async (client, message, args) => {

        if (message.member.roles.cache.has('661996321561116673') || message.member.roles.cache.has('808450351173730385')) {

            const snap = await database.ref(`Beneficios/${message.author.id}/SalaVip`).once('value')

            if (snap.val() === null) {

                var canal = await message.guild.channels.create(`${message.author.tag}`, { type: 'voice', parent: '808450976553893908' })

                canal.updateOverwrite(message.guild.roles.everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": true })
                canal.updateOverwrite(message.author, { "SEND_MESSAGES": true, "VIEW_CHANNEL": true })

                database.ref(`Beneficios/${message.author.id}/SalaVip`).set({
                    canal: canal.id
                })

                message.reply('Sua sala vip acabou de ser criada com sucesso, aproveite e configure ele utilizando o comando novamente ;)')

            } else {

                if (!message.guild.channels.cache.get(snap.val().canal)) {

                    message.reply('Execute o comando novamenete.')
                    database.ref(`Beneficios/${message.author.id}/SalaVip`).remove()
                    return;

                }

                var embed = {
                    author: {
                        name: `TheLegion › Configurações de beneficios`,
                        icon_url: message.guild.iconURL()
                    },
                    description: `> 🙇 **Mudar o nome do canal.** | Não está mais gostando desse nome? Você pode mudar agora!\n> 🙋 **Adicionar pessoas ao canal.** | Está com saudades daquele amigo? Chame ele pra conversar em seu canal!\n> 🤦 **Remover pessoas do canal.** | Aquela pessoa chata ta interrompendo a conversa? Tire ela do canal.\n> 🔈 **Limite.** | Tem muitas pessoas em seu canal? Adicione um limite!`,
                    color: 'e67e22',
                }

                var msg = await message.reply({ embed: embed })

                msg.react('🙇')
                await msg.react('🙋')
                await msg.react('🤦')
                await msg.react('🔈')

                var filtro = (r, u) => u.id === message.author.id
                collector = msg.createReactionCollector(filtro, { max: 1 })

                collector.on('collect', async (r) => {

                    switch (r.emoji.name) {

                        case "🙇":

                            var msg1 = await message.reply('Qual será o novo nome do canal?')

                            var filtro = (m) => m.author.id === message.author.id
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                            collector.on('collect', async (msg) => {

                                message.guild.channels.cache.get(snap.val().canal).edit({ name: msg.content })
                                message.reply('O nome do seu canal foi alterado, vai lá dar uma olhada :)')

                            })

                            break;
                        case "🙋":

                            var msg1 = await message.reply('Qual é o membro que você quer adicionar ao canal? (Mencione-o)')

                            var filtro = (m) => m.author.id === message.author.id
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                            collector.on('collect', async (msg) => {

                                let membro = message.guild.member(msg.mentions.users.first())
                                if (!membro) return message.reply('Você não adicionou um membro, tente novamente após executar o comando.')

                                message.guild.channels.cache.get(snap.val().canal).updateOverwrite(membro, { "CONNECT": true, "SPEAK": true })

                                message.reply('Membro adicionado com sucesso ao seu canal.')

                            })

                            break;
                        case "🤦":

                            var msg1 = await message.reply('Qual é o membro que você quer remover do canal? (Mencione-o)')

                            var filtro = (m) => m.author.id === message.author.id
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                            collector.on('collect', async (msg) => {

                                let membro = message.guild.member(msg.mentions.users.first())
                                if (!membro) return message.reply('Você não adicionou um membro, tente novamente após executar o comando.')

                                message.guild.channels.cache.get(snap.val().canal).updateOverwrite(membro, { "CONNECT": false })

                                message.reply('Membro removido com sucesso do seu canal.')

                            })

                            break;
                        case "🔈":

                            var msg1 = await message.reply('Qual é o limite de usuários que você deseja colocar? (Máximo 99)')

                            var filtro = (m) => m.author.id === message.author.id
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })

                            collector.on('collect', async (msg) => {

                                if (isNaN(msg.content)) return message.reply('Retorne somente uma mensagem com números válidos.')
                                if (msg.content > 99) return message.reply('Insira um limite de até 99 pessoas.')

                                message.guild.channels.cache.get(snap.val().canal).setUserLimit(msg.content)

                                message.reply('Limite adicionado com sucesso.')

                            })

                            break;

                    }

                })

            }

        } else {

            message.reply('Você precisa dar boost no servidor para poder usar esse comando.')

        }


    }
}