const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    aliases: ['ban', 'banir'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Banir membros.**')

        let motivo = args[1]
        if(!args[1]) motivo = "Não informado."

        const membro = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!membro) return message.reply('Você não inseriu o membro no qual deseja banir.')

        if(membro.roles.highest.rawPosition > message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo maior que o seu, serei incapaz de banir.')
        if(membro.roles.highest.rawPosition === message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo igual ao seu, serei incapaz de banir.')

        membro.ban({ reason: motivo }).then((membro) => {
            
            message.reply('O usuário foi banido com sucesso.')
            message.guild.channels.cache.get('739640263055769632').send(`O usuário ${membro.user.tag} foi banido com sucesso, pelo **${message.author.tag}**`)
            
        }).catch(err => {

            message.reply('O usuário não pode ser banido, eu não possuo permissão ou ele possui um cargo maior que o do bot.')

        })


    }
}