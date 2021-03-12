const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')
let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, fs.readFileSync('src/replyu.mp3'), MessageType.audio, { mimetype: "audio/mp4", ptt: true, quoted: m })
}

handler.customPrefix = /^(bot malo|bot de mierda|bot gei|bot puto|bot no sirve|bot gay)$/i
handler.command = new RegExp

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
