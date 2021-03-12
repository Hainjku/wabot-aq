let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'es'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'Principal',
      'xp': 'Exp & Límite',
      'sticker': 'Sticker',
      'kerang': 'Bola Mágica',
      'quotes': 'Frases',
      'admin': 'Admin',
      'group': 'Grupo',
      'internet': 'Internet',
      'downloader': 'Descargador',
      'tools': 'Herramientas',
      'fun': 'Diversión',
      'jadibot': 'Ser Un Bot',
      'owner': 'Dueño',
      'host': 'Host',
      'advanced': 'Advanzado',
      'info': 'Información',
      '': 'Sin Categoría',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
┏━━━━❉ Iɴғo ❉━━━━┓
┣⊱ 📁 Dαтαвαѕe: *%totalreg números*
┣⊱ ⌚Horα: *%time*
┣⊱ 🕐 Tιeмpo de αcтιvιdαd: *%uptime*
┣⊱ ⏱️ Acтιvιdαd prιɴcιpαl: *%muptime*
┣⊱ 📆 Fecнα: *%date*
┣⊱
┣⊱ 💵• 𝖡𝗂𝗅𝗅𝖾𝗍𝖾𝗋𝖺​ •
┣⊱ ✨ Eхperιeɴcια: *%exp XP*
┣⊱ ⚠ Mᴏɴᴇᴅᴀs: *%limit coin(s)*
┣━━━━━━━━━━━━

%readmore`
    let header = conn.menu.header || '.'
    let body   = conn.menu.body   || ''
    let footer = conn.menu.footer || '.'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Coin descontable)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      exp, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
   // conn.reply(m.chat, text.trim(), m)
   conn.fakeReply(m.chat, text.trim(), '0@s.whatsapp.net', `𝑫𝒆𝒗: 𝑯𝒂𝒊𝒏𝒋𝒌𝒖 | Instɑ: @gɑstonvɑinstein`, 'status@broadcast', m.chat ? m.chat : false, {
                    contextInfo: {
                        mentionedJid: '0@s.whatsapp.net',
                        participant: '0@s.whatsapp.net'
                    }
                })
  } catch (e) {
    conn.reply(m.chat, 'Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['men','help','?']
handler.tags = ['main']
handler.command = /^(monedero|billetera|wallet)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
