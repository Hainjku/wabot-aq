let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.array.filter(v => !v.read_only && v.message).map(v => v.jid)
  for (let id of chats) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n' + readMore + '• _*MENSAJE GLOBAL*_ •')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_Mensajes de difusión enviados a ${chats.length} chat(s)_`, m)
}
handler.help = ['broadcast','bc'].map(v => v + ' <mensaje>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
