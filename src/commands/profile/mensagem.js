const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'mensagem',
    aliases: ['mensagem', 'message'],
    run: async(client, message, args) => {

        let msg = args.slice(0).join(' ')
        if(!msg) return message.reply('Insira a mensagem')

        const snap = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
        if(snap.val() === null) {

            message.reply('Você não pode trocar a mensagem se não tiver um perfil.')

        } else {

            database.ref(`Usuários/Registros/${message.author.id}`).update({
                mensagem: msg
            })

            message.reply('Mensagem alterada com sucesso.')

        }

    }
}