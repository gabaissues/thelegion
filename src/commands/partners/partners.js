const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'partners',
    aliases: ['parceiros', 'partners'],
    run: async(client, message, args) => {

        if(message.member.roles.cache.has('808431838775083018')) {

            const snap = await database.ref(`Beneficios/${message.author.id}/Partner`).once('value')

            if(snap.val() === null) {
    
                var canal = await message.guild.channels.create(`${message.author.tag}`, { type: 'text', parent: '734386109752016901' })
    
                canal.updateOverwrite(message.guild.roles.everyone, { "SEND_MESSAGES": false, "VIEW_CHANNEL": true })
                canal.updateOverwrite(message.author, { "SEND_MESSAGES": true, "VIEW_CHANNEL": true, "MANAGE_MESSAGES": true })
    
                database.ref(`Beneficios/${message.author.id}/Partner`).set({
                    canal: canal.id
                })
    
                canal.send(`Seu canal de anúncio de parceiro ( delete essa mensagem após a visualização )`)
                message.reply('Seu canal acabou de ser criado com sucesso, aproveite e configure ele utilizando o comando novamente ;)')
    
            } else {

                if(!message.guild.channels.cache.get(snap.val().canal)) {
                       
                    message.reply('Execute o comando novamenete.')
                    database.ref(`Beneficios/${message.author.id}/Partner`).remove()
                    return;

                }

                var embed = {
                    author: {
                        name: `TheLegion › Configurações de beneficios`,
                        icon_url: message.guild.iconURL()
                    },
                    description: `> 🙇 **Mudar o nome do canal.** | Não está mais gostando desse nome? Você pode mudar agora!\n> 🙋 **Enviar mensagem no canal.** | Tá afim de mandar mensagem para todos os membros do servidor verem no seu canal? Experimente.`,
                    color: 'e67e22',
                }
    
                var msg = await message.reply({ embed: embed })
    
                msg.react('🙇')
                await msg.react('🙋')
    
                var filtro = (r, u) => u.id === message.author.id
                collector = msg.createReactionCollector(filtro, { max: 1 })
    
                collector.on('collect', async (r) => {
    
                    switch(r.emoji.name) {
    
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
    
                            var msg1 = await message.reply('Qual é a mensagem que você deseja anúnciar?')
    
                            var filtro = (m) => m.author.id === message.author.id 
                            collector = msg.channel.createMessageCollector(filtro, { max: 1 })
    
                            collector.on('collect', async (msg) => {

                                msg.delete()
    
                                message.guild.channels.cache.get(snap.val().canal).send(msg.content)
                                message.reply('Mensagem enviada com sucesso.')
    
                            })
    
                        break;
    
                    }
    
                })
    
            }

        } else {

            message.reply('Você precisa ter o cargo de parceiro para poder usar este comando.')

        }

    }
}