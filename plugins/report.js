const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `*REPORTE!*\n\nInforme de: *http://wa.me/+${no}*\n\Mensaje: ${text}`
            conn.sendMessage('59898310750@s.whatsapp.net', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, 'Gracias por realizar tu reporte 😊', m)

        } else conn.reply(m.chat, 'Uhm ... ¿Cuál es el mensaje??\nejemplo *.report error en el comando /sticker*', m)
    } catch (err) {
        console.log(err)
    }
}
handler.help = ['report <mensaje>']
handler.tags = ['info']
handler.command = /^(r_bug|report|reportar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
