let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat, text, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
}
handler.help = ['anuncio','hidetag'].map(v => 'o' + v + ' [texto]')
handler.tags = ['owner']
handler.command = /^(anuncio|oannounce|ohiddentag|ohidetag)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
