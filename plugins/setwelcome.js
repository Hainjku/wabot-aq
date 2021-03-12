let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('La bienvenida se configuró correctamente\n@user (Mención)\n@subject (Título del grupo)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <texto>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
handler.limit = true
module.exports = handler
