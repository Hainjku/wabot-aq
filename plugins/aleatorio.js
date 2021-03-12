var fs = require('fs');

let handler = async (m, { conn }) => {
    const jdmjson = JSON.parse(fs.readFileSync('./plugins/value.json'));
    const random = Math.floor(Math.random() * jdmjson.length)
    const res = jdmjson[random]
    await conn.sendFile(m.chat, res.image, 'jdm.jpg', '𝑫𝒆𝒗: 𝑯𝒂𝒊𝒏𝒋𝒌𝒖 | Instɑ: @gɑstonvɑinstein', m)
}
handler.help = ['jdm']
handler.tags = ['random']
handler.command = /^newvalue$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
