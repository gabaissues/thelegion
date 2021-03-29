const Discord = require('discord.js')

module.exports = {
    name: 'staff',
    aliases: ['staff', 'equipe'],
    run: async(client, message, args) => {

        var embed = {
            title: '🛠️ ● Nossa equipe.',
            description: `👑 **Fundadores:** ${message.guild.roles.cache.get('727282405731205283').members.map(a => a.user.tag).join(', ') || "Não há ninguem online deste cargo, ou não possue nínguem nessa área."}\n🔨 **Diretores:** ${message.guild.roles.cache.get('814970923102240768').members.map(a => a.user.tag).join(', ') || "Não há ninguem online deste cargo, ou não possue nínguem nessa área."}\n🚓 **Administradores:** ${message.guild.roles.cache.get('727283317119909948').members.map(a => a.user.tag).join(', ') || "Não há ninguem online deste cargo, ou não possue nínguem nessa área."}\n💼 **Moderadores:** ${message.guild.roles.cache.get('727283318730653798').members.map(a => a.user.tag).join(', ') || "Não há ninguem online deste cargo, ou não possue nínguem nessa área."}\n📌 **Assistência:** ${message.guild.roles.cache.get('727283319892344874').members.map(a => a.user.tag).join(', ') || "Não há ninguem online deste cargo, ou não possue nínguem nessa área."}`,
            color: 'e67e22'
        }

        message.reply({ embed: embed })

    }
}