const { MessageType } = require("@adiwajshing/baileys")

let handler = async (m, { conn }) => {
    const from = m.key.remoteJid
    const groupMetadata = await conn.groupMetadata(from)
    const groupId = groupMetadata.id
    conn.sendMessage(from, 'Adiós!', MessageType.text, {quoted:m})
    await conn.groupLeave(groupId)
}
handler.help = ['leave']
handler.tags = ['owner']
handler.owner = true
handler.group = true
handler.command = /^(leave)$/i
handler.limit = true

module.exports = handler
