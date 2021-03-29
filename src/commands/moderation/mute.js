const Discord = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'mute',
    aliases: ['mute', 'silenciamento'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Expulsar membros.**')

        const membro = message.guild.member(message.mentions.users.first() || message.mentions.users.first())
        if(!membro) return message.reply('Você não inseriu o membro que deseja silenciar.')

        if(membro.roles.highest.rawPosition > message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo maior que o seu, serei incapaz de silenciar.')
        if(membro.roles.highest.rawPosition === message.member.roles.highest.rawPosition) return message.reply('Este usuário possui um cargo igual ao seu, serei incapaz de silenciar.')

        if(!args[1]) return message.reply('Você não inseriu o tempo do mute. Insira em formato (s (segundos) m (minutos) h (horas) d (dias))')
    
        membro.roles.add('815659541303132160').then(async msg => {

            message.reply('Usuário silenciado com sucesso.')
            message.guild.channels.cache.get('739640263055769632').send(`O usuário **${membro.user.tag}** foi silenciado pelo **${message.author.tag}**`)

            setTimeout(() => {
    
                membro.roles.remove('815659541303132160')
    
            }, ms(args[1]))

        })

    }
}