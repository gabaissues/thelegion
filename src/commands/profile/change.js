const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'change',
    aliases: ['changenick', 'nickchange', 'change'],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply('Insira para qual nick deseja trocar.')

        const snap = await database.ref(`Usuários/Nicks/${args[0]}`).once('value')
        
        if(snap.val() === null) {

            const ver = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
            if(ver.val() === null) {
                
                message.reply('Use **!registrar**, para depois poder usar este comando.')

            } else {

                database.ref(`Usuários/Nicks/${ver.val().nick}`).remove()

                database.ref(`Usuários/Nicks/${args[0]}`).set({
                    nick: args[0],
                    id: message.author.id
                })
    
                database.ref(`Usuários/Registros/${message.author.id}`).set({
                    nick: args[0]
                })
    
                message.reply('Nick alterado!')

            }
            
        } else {

            message.reply('Este nick já possui um usuário cadastrado.')

        }

    }
}