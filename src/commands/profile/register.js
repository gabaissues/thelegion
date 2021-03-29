const Discord = require('discord.js')
const { database } = require('../../services/database')

module.exports = {
    name: 'register',
    aliases: ['register', 'registrar'],
    run: async(client, message, args) => {

        if(!args[0]) return message.reply('Por favor, insira seu nick como parametro.')

        const snap = await database.ref(`Usuários/Nicks/${args[0]}`).once('value')
        
        if(snap.val() === null) {

            const ver = await database.ref(`Usuários/Registros/${message.author.id}`).once('value')
            if(ver.val() === null) {
             
                database.ref(`Usuários/Nicks/${args[0]}`).set({
                    nick: args[0],
                    id: message.author.id,
                })
    
                database.ref(`Usuários/Registros/${message.author.id}`).set({
                    nick: args[0],
                    guilda: 'Nenhuma',
                    imagem: 'https://media.discordapp.net/attachments/712137344286720041/731203439241199767/advancement.png?width=432&height=86',
                    mensagem: 'Nenhuma'
                })
    
                message.reply('Usuário registrado.')
                
            } else {

                message.reply('Você já está registrado.') 

            }
            
        } else {

            message.reply('Este nick já possui um usuário cadastrado.')

        }


    }
}