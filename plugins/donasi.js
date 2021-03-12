let handler = async m => m.reply(`
┏━━━━┣ Donaciones ┫
┣⊱  No necesito dinero pero un
┣⊱  mensajito me hace felíz :D
┣⊱  https://wa.me/59898310750
┣━━━━━
`.trim()) // Donar dinero información
handler.help = ['donar']
handler.tags = ['info']
handler.command = /^dona(te|r)$/i
handler.limit = true

module.exports = handler
