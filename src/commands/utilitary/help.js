const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['help', 'ajuda', 'comandos'],
    run: async(client, message, args) => {

        var embed = {
            title: '🤖 ● Meus comandos.',
            fields: [
                {
                    name: '📌 Comandos úteis:',
                    value: "`avatar, sugerir, divulgar, ip, mods e equipe.`"
                },
                {
                    name: '⚙️ Comandos do usuário:',
                    value: "`changenick, guilda, register, setguilda, userinfo, vantagens, partners, mensagem, e imagem.`"
                },
                {
                    name: '🛠️ Comandos de moderação:',
                    value: "`anunciar, ban, clear, kick, mute, e unmute.`"
                },
            ],
            color: 'e67e22'
        }

        message.reply({ embed: embed })

    }
}