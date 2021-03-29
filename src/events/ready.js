module.exports = async (client) => {

    client.on('ready', async () => {

        console.log(` _____________________________________________`)
        console.log('|                                             |')
        console.log(`| Olá, estou online com atualmente ${client.commands.size} comando. |`)
        console.log(`|_____________________________________________|`)

        var embed = {
            title: '✅ ● Sistema de captcha.',
            description: 'Para ter acesso ao nosso servidor, por favor, reaja nesta mensagem para verificarmos que você não é um robô.',
            color: 'e67e22'
        }

        client.channels.cache.get('727315516145926144').bulkDelete(100)

        var msg = await client.channels.cache.get('727315516145926144').send({ embed: embed })
        msg.react('✅')

        var embed = {
            author: {
                name: 'The Legion › Central de Atendimentos',
                icon_url: client.guilds.cache.get('514493574516047892').iconURL()
            },
            description: `Clique nas reações abaixo para o atendimento que deseja.\n\n🙇 › Dúvidas? Fale diretamente com nossa equipe administrativa;\n🐛 › Caso encontre algum bug/falhas reporte para nossa equipe;\n🛠️ › Faça sua denúncia completa para enviar para nossa equipe;\n🎥 › Deseja se tornar youtuber? Fale diretamente com nossa equipe;\n📰 › Aplicação para se tornar parte da equipe administrativa do The Legion;\n📋 › Punição injusta/incorreta? Faça uma Revisão;\n🎮 › Quer se tornar um de nossos parceiros? Fale com nossa equipe;\n\nAtenciosamente,\nEquipe **The Legion**.`,
            color: 'e67e22'
        }

        client.channels.cache.get('737885389997735977').bulkDelete(100)

        var msg = await client.channels.cache.get('737885389997735977').send({ embed: embed })
        
        var emotes = ["🙇", "🐛", "🛠️", "🎥", "📰", "📋", "🎮"]
        for(let i in emotes) msg.react(emotes[i])

    })

}