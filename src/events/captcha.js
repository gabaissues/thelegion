const Cooldown = new Set()

module.exports = (client) => {

    client.on('messageReactionAdd', async (r, u) => {

        if (r.message.partial) await r.message.fetch()
        if (r.partial) await r.fetch()

        if (u.bot) return;
        if (!r.message) return;

        if(r.message.channel.id == 727315516145926144) {

            r.users.remove(u.id)

            r.message.guild.members.cache.get(u.id).roles.add(r.message.guild.roles.cache.get('727314982399901817')).catch(err => {
    
                r.message.channel.send('Eu não tenho permissão para colocar cargos em você.').then(msg => msg.delete({ timeout: 15000 }))
    
            })

        }

    })

}