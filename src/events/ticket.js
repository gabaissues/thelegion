const Cooldown = new Set()

module.exports = (client) => {

    client.on('messageReactionAdd', async (r, u) => {

        if (r.message.partial) await r.message.fetch()
        if (r.partial) await r.fetch()

        if (u.bot) return;
        if (!r.message) return;

        if (r.message.channel.id === "737885389997735977") {

            if (Cooldown.has(u.id)) {

                r.users.remove(u.id)
                u.send('Você abriu um ticket recentemente, não poderá abrir outro dentro de 1 minuto.').catch(err => { return });

            } else {

                r.users.remove(u.id)

                switch (r.emoji.name) {

                    case "🙇":

                        var canal = await r.message.guild.channels.create(`dúvida-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe a sua dúvida para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma dúvida seria, caso ao contrario, será punido. Não quer mais enviar a dúvida? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe a sua dúvida para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma dúvida seria, caso ao contrario, será punido. Não quer mais enviar a dúvida? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Dúvida:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                        break;
                    case "🐛":

                        var canal = await r.message.guild.channels.create(`bugs-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o bug para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é um bug serio, caso ao contrario, será punido. Não quer mais enviar o bug? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o bug para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é um bug serio, caso ao contrario, será punido. Não quer mais enviar o bug? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Bug:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                        break;
                    case "🛠️":

                        var canal = await r.message.guild.channels.create(`denúncia-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o usuário que deseja denúnciar para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma denúncia seria, caso ao contrario, será punido. Não quer mais enviar a denúncia? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o uusário que deseja denunciar para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma denúncia seria, caso ao contrario, será punido. Não quer mais enviar a denúncia? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Usuário:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                        break;
                    case "🎥":

                        var canal = await r.message.guild.channels.create(`youtuber-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o link do seu canal do Youtube para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é a solicitação da tag seja seria, caso ao contrario, será punido. Não quer mais enviar a solicitação? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe o link do seu canal do Youtube para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma solicitação de tag seria, caso ao contrario, será punido. Não quer mais enviar a solicitação? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Link:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                        break;
                    case "📰":

                        var canal = await r.message.guild.channels.create(`formulário-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var embed = {
                            title: 'THE LEGION - APLICAÇÃO',
                            description: `Bem-vindo ao formulário **The Legion**, esteja ciente que para ingressar em nossa equipe administrativa,você deve concordar com os nossos **Termos de Serviço**, mediante a isso, levamos bem a sério a ingressãopara nossa equipe, procurando as melhores qualificações possíveis.\n\nEsteja ciente que você não poderá mentir sobre informações pessoais pedidas, alguns cargos só poderá ser adquiridocom uma idade miníma e tempo de trabalho diários. Certas exceções poderão aparecer para subir seu cargo, fazendo um ótimotrabalho a idade miníma não seria um empecilho.\n\nNenhuma informação pessoal será distribuída, vendida ou até mesmo exposta, garantimos total sigilo sobre seus dados e a sua segurança.\n\nEscreva abaixo algumas informações pessoais para prosseguir com o **Formulário**, esteja ciente que não poderá mentir, omitir ou até mesmo utilizar informações de terceiros para se ingressar em nossa equipe administrativa.\n\n\`1\`. Seu nome completo (Exemplo: Brendo Tenente)\n\`2\`. Sua idade e data de seu aniversário. (Exemplo: 20 anos - 06/12/2000)\n\`3\`. Estado onde mora (Exemplo: RJ - Rio de Janeiro)\n\nAtenciosamente,\nEquipe **The Legion**.`,
                            color: 'e67e22',
                            footer: {
                                text: 'Primeira pergunta.'
                            }
                        }

                        var msg = await canal.send({ embed: embed })

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (msg) => {

                            var embed = {
                                title: 'THE LEGION - APLICAÇÃO',
                                description: 'Quanto tempo em média estaria disposto a dedicar a nossa equipe? Tanto in-game quanto em nossas outras plataformas, mediante a isso, você possui algum tipo de trabalho e/ou horário escolar que impossibilitaria sua atividade em horários específicos?\n\nAtenciosamente,\nEquipe **The Legion**.',
                                color: 'e67e22',
                                footer: {
                                    text: 'Segunda pergunta.'
                                }
                            }

                            var msg1 = await canal.send({ embed: embed })

                            var mfiltro = (m) => m.author.id === u.id
                            mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                            mcollector.on('collect', async (msg1) => {

                                var embed = {
                                    title: 'THE LEGION - APLICAÇÃO',
                                    description: 'Descreva todas suas experiências anteriores de outras equipes que você participou e todas suas áreas de atuação que permaneceu nessas equipes administrativas.\n\nAtenciosamente\nEquipe **The Legion**.',
                                    color: 'e67e22',
                                    footer: {
                                        text: 'Terceira pergunta.'
                                    }
                                }

                                var msg2 = await canal.send({ embed: embed })

                                var mfiltro = (m) => m.author.id === u.id
                                mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                mcollector.on('collect', async (msg2) => {

                                    var embed = {
                                        title: 'THE LEGION - APLICAÇÃO',
                                        description: 'Nos diga suas motivações para entrar em nossa equipe e qual seria seu diferencial para juntar-se a ela, e qual seria seu diferencial para se juntar em nossa equipe?\n\nAtenciosamente,\nEquipe **The Legion**.',
                                        color: 'e67e22',
                                        footer: {
                                            text: 'Quarta pergunta.'
                                        }
                                    }

                                    var msg3 = await canal.send({ embed: embed })

                                    var mfiltro = (m) => m.author.id === u.id
                                    mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                    mcollector.on('collect', async (msg3) => {

                                        var embed = {
                                            title: 'THE LEGION - APLICAÇÃO',
                                            description: 'Iremos um pouco mais a fundo, explique como você se sente ou se vê em relação ao mundo e todo seu contexto e quais seriam suas motivações diante dele e suas adversidades?\n\nAtenciosamente,\nEquipe **The Legion**.',
                                            color: 'e67e22',
                                            footer: {
                                                text: 'Quinta pergunta.'
                                            }
                                        }

                                        var msg4 = await canal.send({ embed: embed })

                                        var mfiltro = (m) => m.author.id === u.id
                                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                        mcollector.on('collect', async (msg4) => {

                                            var embed = {
                                                title: 'THE LEGION - APLICAÇÃO',
                                                description: 'Iremos criar uma ideia hipotética para você resolver, mediante a isso, entenda que não possui uma resposta correta ou errada, apenas queremos saber sua interpretação sobre a frase abaixo.\n\n`"Muitas vezes é mais confiável acreditar em um demônio que assume seus pecados do que um anjo que crer que está sempre no caminho da luz."`\n\nAtenciosamente,\nEquipe **The Legion**.',
                                                color: 'e67e22',
                                                footer: {
                                                    text: 'Sexta pergunta.'
                                                }
                                            }

                                            var msg5 = await canal.send({ embed: embed })

                                            var mfiltro = (m) => m.author.id === u.id
                                            mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                            mcollector.on('collect', async (msg5) => {

                                                var embed = {
                                                    title: 'THE LEGION - APLICAÇÃO',
                                                    description: 'Em outra situação hipotética que também iremos querer saber sua interpretação, desejamos que você se limite a escolher entre duas resposta,dando sua justifcativa da escolha.\n\n`"Um trem vai atingir 5 pessoas que trabalham desprevenidas sobre a linha. Mas você tem a chance de evitar a tragedia`\n`acionando uma alavanca que leva o trem para outra linha, onde ele atingirá apenas uma pessoa. Você mudaria o trajeto,` \n`salvando as 5 e matando 1?"`\n\nResponda abaixo se você mudaria salvando as 5 pessoas e matando apenas 1, logo após, sua justificativa.\n\nAtenciosamente,\nEquipe **The Legion**.',
                                                    color: 'e67e22',
                                                    footer: {
                                                        text: 'Setima pergunta.'
                                                    }
                                                }

                                                var msg6 = await canal.send({ embed: embed })

                                                var mfiltro = (m) => m.author.id === u.id
                                                mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                                mcollector.on('collect', async (msg6) => {

                                                    var embed = {
                                                        title: 'THE LEGION - APLICAÇÃO',
                                                        description: 'Novamente no dilema do trem, se limite a escolher entre duas respostas, dando sua justificativa da escolha.\n\n`Um trem em disparada irá atingir 5 trabalhadores desprevenidos nos trilhos. Agora, porém, há uma linha só. O trem pode ser` \n`parado por algum objeto pesado jogado em sua frente. Um homem com uma mochila muito grande está ao lado da ferrovia.`\n`Se você empurrá-lo para a linha, o trem vai parar, salvando as 5 pessoas, mas liquidando uma.`\n`Você empurraria o homem da mochila para a linha?`\n\nResponda abaixo se você empurraria o homem ou não para salvar as 5 pessoas, logo após, sua justificativa.\n\nAtenciosamente,\nEquipe **The Legion**.',
                                                        color: 'e67e22',
                                                        footer: {
                                                            text: 'Oitava pergunta.'
                                                        }
                                                    }

                                                    var msg7 = await canal.send({ embed: embed })

                                                    var mfiltro = (m) => m.author.id === u.id
                                                    mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                                    mcollector.on('collect', async (msg7) => {

                                                        var embed = {
                                                            title: 'THE LEGION - APLICAÇÃO',
                                                            description: 'Voltando para aspectos mais amplos em nossa área de atuação, nos diga seu diferencial em áreas academicas e de especialização, podendo ser cursos de TI, Programação, Design, conhecimento amplo sobre nossas áreas de atuação, dentre outros, esteja ciente em manter a coerência com a realidade e não mentir.\n\nAtenciosamente,\nEquipe **The Legion**.',
                                                            color: 'e67e22',
                                                            footer: {
                                                                text: 'Nona pergunta.'
                                                            }
                                                        }

                                                        var msg8 = await canal.send({ embed: embed })

                                                        var mfiltro = (m) => m.author.id === u.id
                                                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                                        mcollector.on('collect', async (msg8) => {

                                                            var embed = {
                                                                title: 'THE LEGION - APLICAÇÃO',
                                                                description: 'Sabemos que nada do mundo é perfeito, sempre buscamos beirar a perfeição daquilo que nos empenhamos, com suas palavras nos diga, quais falhas você vê em todo nosso projeto e como sua experiência mudaria isso?\n\nAtenciosamente,\nEquipe **The Legion**.',
                                                                color: 'e67e22',
                                                                footer: {
                                                                    text: 'Décima pergunta.'
                                                                }
                                                            }

                                                            var msg9 = await canal.send({ embed: embed })

                                                            var mfiltro = (m) => m.author.id === u.id
                                                            mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                                                            mcollector.on('collect', async (msg9) => {

                                                                var embed = {
                                                                    title: 'Você realmente quer enviar este formulário?',
                                                                    color: 'e67e22'
                                                                }

                                                                var msg10 = await canal.send({ embed: embed })
                                                            
                                                                msg10.react('✅')
                                                                await msg10.react('❎')

                                                                var rfiltro = (r, user) => user.id === u.id
                                                                rcollector = msg10.createReactionCollector(rfiltro, { max: 1 })

                                                                rcollector.on('collect', async (r) => {

                                                                    switch(r.emoji.name) {

                                                                        case "✅":

                                                                            var embed = {
                                                                                title: '📰 ● Formulário enviado, desejo boa sorte ;)',
                                                                                color: 'GREEN'
                                                                            }

                                                                            canal.send({ embed: embed })

                                                                            canal.send('🔒 ● Canal sendo deletado...')

                                                                            var embed = {
                                                                                author: {
                                                                                    name: `Formulário de ${u.tag}`,
                                                                                    icon_url: r.message.guild.iconURL()
                                                                                },
                                                                                color: 'e67e22',
                                                                                description: `1: ${msg.content}\n2: ${msg1.content}\n3: ${msg2.content}\n4: ${msg3.content}\n5: ${msg4.content}\n6: ${msg5.content}\n7: ${msg6.content}\n8: ${msg7.content}\n9: ${msg8.content}\n10: ${msg9.content}\n\n📰 › **Deseja passar este usuário?**`
                                                                            }

                                                                            var msg11 = await client.channels.cache.get('808436578937733211').send({ embed: embed })

                                                                            msg11.react('✅')
                                                                            await msg11.react('❎')

                                                                            rcollector = msg11.createReactionCollector(rfiltro, { max: 1 })

                                                                            rcollector.on('collect', async (r) => {

                                                                                switch(r.emoji.name) {

                                                                                    case "✅":

                                                                                        r.message.channel.send('Usuário passado.')

                                                                                    break;
                                                                                    case "❎":

                                                                                        r.message.channel.send('Usuário reprovado.')

                                                                                    break;

                                                                                }

                                                                            })

                                                                            setTimeout(() => {

                                                                                canal.delete()

                                                                            }, 3000)

                                                                        break;
                                                                        case "❎":

                                                                            var embed = {
                                                                                title: '📰 ● Que pena, por que desistiu? Estava incrivel...',
                                                                                color: 'e67e22'
                                                                            }

                                                                            canal.send({ embed: embed })

                                                                        break;

                                                                    }

                                                                })//Voltar


                                                            })

                                                        })

                                                    })

                                                })

                                            })

                                        })

                                    })

                                })

                            })

                        })

                        break;
                    case "📋":

                        var canal = await r.message.guild.channels.create(`revisão-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe as provas da sua punição, e o motivo da revisão ser aceita para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma revisão seria, caso ao contrario, será punido. Não quer mais enviar a revisão? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe as provas da sua punição, e o motivo da revisão ser aceita para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma revisão seria, caso ao contrario, será punido. Não quer mais enviar a revisão? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Revisão:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                        break;
                    case "🎮":

                        var canal = await r.message.guild.channels.create(`parceiro-${u.discriminator}`, { type: 'text', parent: "728893551366111242", reason: 'Dúvida * Ticket' })

                        canal.updateOverwrite(r.message.guild.roles.everyone, { "VIEW_CHANNEL": false, "SEND_MESSAGES": true, "ATTACH_FILES": true })
                        canal.updateOverwrite(u.id, { "VIEW_CHANNEL": true })

                        var embed = {
                            author: {
                                name: 'The Legion › Central de Atendimentos',
                                icon_url: r.message.guild.iconURL()
                            },
                            color: 'e67e22',
                            description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe qual é o seu canal/servidor, para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma solicitação de parceria seria, caso ao contrario, será punido. Não quer mais enviar a solicitação? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**`
                        }

                        canal.send(`${u}`).then(msg => msg.delete({ timeout: 5000 }))

                        var msg = await canal.send({ embed: embed })

                        msg.react('🔒')

                        var mfiltro = (m) => m.author.id === u.id
                        mcollector = msg.channel.createMessageCollector(mfiltro, { max: 1 })

                        mcollector.on('collect', async (message) => {

                            message.channel.bulkDelete(100)

                            var embed = {
                                author: {
                                    name: 'The Legion › Central de Atendimentos',
                                    icon_url: r.message.guild.iconURL()
                                },
                                color: 'e67e22',
                                description: `Olá, seja bem vindo ao chat com a equipe. Primeiro, nós informe qual é o seu canal/servidor, para que possamos prosseguir para um atendimento.\n\nAo inserir, iremos abrir o chat para a equipe. Tenha certeza que é uma solicitação de parceria seria, caso ao contrario, será punido. Não quer mais enviar a solicitação? Simples, clique nesse cadeado e não fale **nada** no chat.\n\n**Uso inadequado resultará em punições.**\n\n🎟️ **› Canal/Servidor:**\`\`\`${message.content}\`\`\``
                            }

                            var msg = await canal.send({ embed: embed })

                            canal.updateOverwrite(message.guild.roles.cache.get('727283319892344874'), { "VIEW_CHANNEL": true })

                            msg.react('🔒')
                            rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                            rcollector.on('collect', async (r) => {

                                canal.send('🔒 ● Canal sendo deletado...')

                                setTimeout(() => {

                                    canal.delete()

                                }, 3000)

                            })

                        })

                        var rfiltro = (r, user) => user.id === u.id
                        rcollector = msg.createReactionCollector(rfiltro, { max: 1 })

                        rcollector.on('collect', async (r) => {

                            canal.send('🔒 ● Canal sendo deletado...')

                            setTimeout(() => {

                                canal.delete()

                            }, 3000)

                        })

                    break;

                }

                Cooldown.add(u.id)
                setTimeout(() => {

                    Cooldown.delete(u.id)

                }, 60000)

            }

        } else {

            return;

        }

    })

}