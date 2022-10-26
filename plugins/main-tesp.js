let handler = async (m, { conn }) => {
let caption = `Pa pe pa pe, Budayakan salam or ketik yg lebih berguna ngab 🤬`

conn.send2But( m.chat, caption, wm, `Menu`, `.menu`, `Donasi`, `.donasi`, m)
       }
handler.customPrefix = /^(ppp|pe|p|pp|pee)$/i
handler.command = new RegExp

module.exports = handler
