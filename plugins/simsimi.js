let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix }) => {
    if (!text) throw `Uhm ... ¿Dónde está el texto?\nejemplo: ${usedPrefix}s hola amigo`
        try {
            let res = await fetch('https://simsumi.herokuapp.com/api?text=' + encodeURIComponent(text))
            let json = await res.json()
            m.reply('Simi: ' + json.success)
        } catch (e) {
            console.log(e)
            m.reply('En reparación!')
        }
}
handler.help = ['simi'].map(v => v + ' <mensaje>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih|s|s1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.limit = true

handler.limit = false
handler.fail = null

handler.maintenance = false

module.exports = handler
