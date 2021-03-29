const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'setguilda',
    aliases: ['setguilda', 'addguilda'],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply('Insira qual será o nome da sua **GUILDA.**')

        const snap = await database.ref(`Clãs/${args.slice(0).join(' ')}`).once('value')
        if(args.slice(0).join(' ').length > 16) return message.reply('O nome da sua guilda só pode ter até 16 caracteres.')

        if(snap.val() === null) {

            database.ref(`Clãs/${args.slice(0).join(' ')}`).set({
                dono: message.author.id
            })

            message.reply('Guilda registrada com sucesso.')

        } else {

            message.reply('Já existe uma guilda com este nome.')

        }

    }
}