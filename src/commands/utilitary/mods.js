const Discord = require('discord.js')

module.exports = {
    name: 'mods',
    aliases: ['mods', 'mod'],
    run: async(client, message, args) => {

        var mods1 = ['Mod1', 'Mod2', 'Mod3']
        var mods2 = ['Mod4', 'Mod5', 'Mod6']
        var mods3 = ['Mod7', 'Mod8', 'Mod9']

        var embed = {
            title: '🎥 ● Mods permitidos em nosso servidor.',
            description: `\`${mods1.join(', ')}\``,
            color: 'e67e22',
            footer: {
                text: 'Página 1'
            }
        }

        var msg = await message.reply({ embed: embed })
        
        msg.react('▶️')

        var filtro = (r, u) => u.id === message.author.id
        collector = msg.createReactionCollector(filtro, { max: 1 })

        collector.on('collect', async (r, u) => {

            r.users.remove(u.id)

            switch(r.emoji.name) {

                case "▶️":

                    var embed = {
                        title: '🎥 ● Mods permitidos em nosso servidor.',
                        description: `\`${mods2.join(', ')}\``,
                        color: 'e67e22',
                        footer: {
                            text: 'Página 2'
                        }
                    }

                    msg.edit({ embed: embed })

                    collector = msg.createReactionCollector(filtro, { max: 1 })
                    collector.on('collect', async (r) => {

                        r.remove()

                        switch(r.emoji.name) {

                            case "▶️":

                                var embed = {
                                    title: '🎥 ● Mods permitidos em nosso servidor.',
                                    description: `\`${mods3.join(', ')}\``,
                                    color: 'e67e22',
                                    footer: {
                                        text: 'Página 3'
                                    }
                                }

                                msg.edit({ embed: embed })

                            break;

                        }

                    })

                break;

            }

        })

    }
}