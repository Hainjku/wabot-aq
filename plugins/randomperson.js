var fs = require('fs');

let handler = async (m, { conn }) => {
    const jdmjson = JSON.parse(fs.readFileSync('./plugins/person.json'));
    const random = Math.floor(Math.random() * jdmjson.length)
    const res = jdmjson[random]
    await conn.sendFile(m.chat, res.image, 'jdm.jpg', '𝑫𝒆𝒗: 𝑯𝒂𝒊𝒏𝒋𝒌𝒖 | Esta persona no existe, es generada por inteligencia artificial', m)
}
handler.help = ['person']
handler.tags = ['internet']
handler.command = /^person$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
