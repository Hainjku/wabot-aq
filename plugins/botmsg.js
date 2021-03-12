const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
     conn.fakeReply(m.chat, `Visite (https://gastonvainstein.online) para aprender a usar el bot y conocer todos los comandos`, '0@s.whatsapp.net', `𝑫𝒆𝒗: 𝑯𝒂𝒊𝒏𝒋𝒌𝒖 | Instɑ: @gɑstonvɑinstein`, m.chat ? m.chat : false, {
        contextInfo: {
            mentionedJid: '0@s.whatsapp.net',
            participant: '0@s.whatsapp.net'
        }
    })
    conn.sendMessage(m.chat, fs.readFileSync('src/yo.mp4'), MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m })
}

handler.customPrefix = /^(hola bot|holi bot|bot|hainjku bot|halo bot|hi bot)$/i
handler.command = new RegExp

handler.fail = null
handler.exp = 25

module.exports = handler
