let handler = async (m, { usedPrefix, command, text, args }) => {
  let isEnable = /true|enable|(turn)?on/i.test(command)
  let chat = global.DATABASE._data.chats[m.chat]
  let type = (args[0] || '').toLowerCase()
  switch (type) {
    case 'welcome':
      chat.welcome = isEnable
      break
    case 'delete':
      chat.delete = isEnable
      break
    default:
      return m.reply(`
Lista de opciones: welcome | delete

Ejemplo:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
  }
  m.reply(`
*${type}* fue *${isEnable ? 'activado' : 'desactivado'}* exitosamente
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <opción>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff))$/i
handler.limit = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

module.exports = handler
