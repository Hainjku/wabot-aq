let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Ingrese el número de coins que se darán'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tagea el que lo recibirá con @'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Solo números debes ingresar'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (limit < 1) throw 'Mínimo 1 puedes enviar'
    let users = global.DATABASE._data.users
    if (limit > users[m.sender].limit) throw 'Coins insuficiente para transferir'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`(${-poin} coins) + (${-pjk} coins (Impuesto 2%) = ( ${-limit} coins)`)
    conn.fakeReply(m.chat, `+${poin} coin(s)`, who, m.text)
}
handler.help = ['paycoins @user <monto>']
handler.tags = ['xp']
handler.command = /^paycoins|paycoin$/
handler.rowner = false

module.exports = handler
