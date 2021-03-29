const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'guilda',
    aliases: ['guilda', 'guild'],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply('Insira o nome da sua guilda como parametro. (Ex: !guilda GDI - Guilda)')
        if(args[0].length > 15) return message.reply('Opa, você só pode inserir uma guilda de até 15 caracteres.')

        const snap = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
        if(snap.val() === null) {

            message.reply('Se registre primeiro antes de gerenciar sua guilda.')

        } else {

            database.ref(`Usuários/Registros/${message.author.id}`).update({
                guilda: args.slice(0).join(' ')
            })

            message.reply('Guilda alterada com sucesso.')

        }

    }
}