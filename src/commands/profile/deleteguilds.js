const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'deleteguild',
    aliases: ['deleteguild'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não tem permissão para usar esse comando')
        if(!args[0]) return message.reply('Você precisa inserir a guilda que deseja deletar. (Ex: !deleteguild GDI - Guilda)')

        database.ref(`Clãs/${args[0].slice(0).join(' ')}`)
        message.reply('Guilda deletada com sucesso.')

    }
}