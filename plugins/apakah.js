let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
*Respuesta:* ${pickRandom(['Si','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
`.trim(), m)
}
handler.help = ['pregunta <pregunta>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^pr$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.exp = 10

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
