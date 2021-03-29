const Discord = require('discord.js')

module.exports = {
    name: 'unmute',
    aliases: ['unmute'],
    run: async(client, message, args) => {

        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Você não possui permissões o suficiente para poder limpar o chat. Esse comando exije a permissão **Expulsar membros.**')

        const membro = message.guild.member(message.mentions.users.first() || message.mentions.users.first())
        if(!membro) return message.reply('Você não inseriu o membro que deseja tirar o silenciamento.')

        membro.roles.remove('815659541303132160')
        message.reply('Usuário foi desmutado com sucesso.')

    }
}