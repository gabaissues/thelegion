const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'image',
    aliases: ['image', 'imagem'],
    run: async(client, message, args) => {

        let imagem = message.attachments.first()
        if(!imagem) return message.reply('Insira a imagem')

        const snap = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
        if(snap.val() === null) {

            message.reply('Você não pode trocar a imagem se não tiver um perfil.')

        } else {

            database.ref(`Usuários/Registros/${message.author.id}`).update({
                imagem: imagem.url
            })

            message.reply('Imagem alterada com sucesso.')

        }

    }
}