const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `*MENSAJE NUEVO!*\n\nDe: *http://wa.me/+${no}*\n\Mensaje: ${text}`
            conn.sendMessage('59898310750@s.whatsapp.net', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, 'Mensaje enviado exitosamente 😊', m)

        } else conn.reply(m.chat, 'Uhm ... ¿Cuál es el mensaje??\nejemplo */msg hainjku hola*', m)
    } catch (err) {
        console.log(err)
    }
}
handler.help = ['msg hainjku <mensaje>']
handler.tags = ['info']
handler.command = /^(msg|hainjku|msg hainjku)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
