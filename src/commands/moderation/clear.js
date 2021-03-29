const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    aliases: ['clear', 'limpar'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Gerenciar mensagens.**')

        if(!args[0]) return message.reply('Insira a quantidade de mensagens que deseja apagar.')
        if(isNaN(args[0])) return message.reply('Insira uma quantidade válida de mensagens para que eu possa apagar.')

        if(args[0] < 2 || args[0] > 100) return message.reply('O Discord permite que eu limpe somente entre 2 a 100 mensagens, se você limpar mais, está cometendo um abuso de api.')

        message.channel.bulkDelete(args[0]).then(msg => { 
            
            message.channel.send(`${args[0]} mensagens foram limpas neste chat, pelo staffer **${message.author.tag}**`)
            
        })

    }
}