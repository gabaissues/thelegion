const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    aliases: ['kick', 'expulsar'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Expulsar membros.**')

        let motivo = args[1]
        if(!args[1]) motivo = "Não informado."

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply('Você não inseriu o membro no qual deseja expulsar.')

        if(membro.roles.highest.rawPosition > message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo maior que o seu, serei incapaz de expulsar.')
        if(membro.roles.highest.rawPosition === message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo igual ao seu, serei incapaz de expulsar.')

        membro.kick({ reason: motivo }).then((membro) => {
            
            message.reply('O usuário foi expulso com sucesso.')
            message.guild.channels.cache.get('739640263055769632').send(`O usuário ${membro.user.tag} foi expulso com sucesso, pelo **${message.author.tag}**`)
            
        }).catch(err => {

            message.reply('O usuário não pode ser expulso, eu não possuo permissão ou ele possui um cargo maior que o do bot.')

        })


    }
}