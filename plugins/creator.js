let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '59898310750', 'Gastón Vainstein (Hainjku)', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|dueño)$/i
handler.limit = true

module.exports = handler
