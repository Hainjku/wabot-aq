const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
    try {
        if (text) {
            console.log(m)
            no = m.sender.slice(0, 14)
            let teks = `✳️ *BOT*\n\n*Atendid@ por*: *http://wa.me/+${no}*\n\n*Mensaje*: ${text}`
            conn.sendMessage('59898310750@s.whatsapp.net', teks, MessageType.text, { quoted: m })
            conn.reply(m.chat, 'Mensaje enviado ✅', m)

        } else conn.reply(m.chat, 'Uhm ... ¿Cuál es el mensaje??\nejemplo *.report error en el comando /sticker*', m)
    } catch (err) {
        console.log(err)
    }
}
handler.help = ['contact <mensaje>']
handler.tags = ['info']
handler.command = /^(contact|ct|contacto|contactar)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
