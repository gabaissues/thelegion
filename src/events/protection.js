const ms = require('ms')
const flood = new Set()

module.exports = (client) => {

    client.on('message', (message) => {


        if(!message.guil) return;
        if (message.author.bot) return;

        function antiSpam() {

            var mensagem = message.content.split('')

            if (mensagem.filter(a => a).length > 12 && message.content.length > 50) {

                var canal = message.guild.channels.cache.get('739640263055769632')
                canal.send(`O usuário **${message.author.tag}** foi silenciado por fazer spam em **${message.channel.name}**, com a mensagem **${message.content}** tendo mais de 12 caracteres iguais.`)

                var cargo = message.guild.roles.cache.get('815659541303132160')

                message.member.roles.add(cargo)
                setTimeout(() => {

                    message.member.roles.remove(cargo)
                 
                }, ms('30m'))

            } else {

                return;

            }

        }

        function antiFlood() {

            var mensagem = message.content

            if (flood.has(mensagem)) {

                var canal = message.guild.channels.cache.get('808433451111153664')
                canal.send(`O usuário **${message.author.tag}** foi silenciado por fazer flood em **${message.channel.name}.**`)

                var cargo = message.guild.roles.cache.get('815659541303132160')

                message.member.roles.add(cargo)
                setTimeout(() => {

                    message.member.roles.remove(cargo)
                 
                }, ms('30m'))

            } else {

                flood.add(mensagem)
                setTimeout(() => {

                    flood.delete(mensagem)

                }, 10000)

            }

        }

        function antiLinks() {

            let regex = /(https?:\/\/)?(http?:\/\/)?(www\.)?\/.+[a-z]/g
            let resultRegex = regex.exec(message)
            if (resultRegex == null) return;

            message.delete().catch(() => { return; })
            
            var canal = message.guild.channels.cache.get('808433451111153664')
            canal.send(`O usuário **${message.author.tag}** foi silenciado por enviar link em **${message.channel.name}.**`)

            
            var cargo = message.guild.roles.cache.get('815659541303132160')
            message.member.roles.add(cargo)
            
            setTimeout(() => {

                message.member.roles.remove(cargo)
                            
            }, ms('30m'))

        }


        antiSpam()
        antiFlood()
        antiLinks()


    })

}