 let fs = require('fs')
 
 let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
   let totalreg = Object.keys(global.db.data.users).length
    
   let ehe = `${ucapan()}
   `
   
    let inpo = `
╭─❒〘 *I N F O B O T* 〙
├◌ *Creator* : ${global.naown}
├◌ *Api* : wa.me/${global.owner[0]}
├◌ *Name Bot* : ${global.namebot}
├◌ *Api* : wa.me/${global.nobot[0]}
╰─❒

╭─❒〘 *I N F O  D A T A* 〙
├◌ *Version* : 4.4.1
├◌ *Library* : Baileys-MD
├◌ *Language* : JavaScript
├◌ *Database* : MongoDB
╰─❒

╭─❒〘 *T O D A Y* 〙
├◌ *Active* : ${uptime}
├◌ *Time* : ${wib} WIB
├◌ *Date* : ${week}, ${date}
╰─❒

╭─❒〘 *S T A T U S  B O T* 〙
├◌ *Register* : ${rtotalreg} User
├◌ *Prefix* : [ Multi Prefix ]
├◌ *Mode* : ${global.opts['self'] ? 'Self' : 'public'}
├◌ *User* : ${Object.keys(global.db.data.users).length} User
├◌ *Chat ban* : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
├◌ *User ban* : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
╰─❒ `.trim()

    const sections = [
   {
	title: `INFORMATION ✦-------`,
	rows: [
	    {title: "📌 STATUS BOT", rowId: '.statusbot'},
	    {title: "📌 SPEED", rowId: '.ping'},
	{title: "📌 SEWA", rowId: '.sewa'},
	{title: "📌 DONASI", rowId: '.donasi'},
	{title: "📌 MENU", rowId: '.menu'},
  ]},]
  const listMessage = {
  text: ehe,
  footer: inpo,
  title: '',
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m })

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot|botinfo)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Simple Bot Whatsapp"
  if (time >= 4) {
      res = "Simple Bot Whatsapp"
  }
  if (time >= 12) {
      res = "Simple Bot Whatsapp"
  }
  if (time >= 15) {
      res = "Simple Bot Whatsapp"
  }
  if (time >= 19) {
      res = "Simple Bot Whatsapp"
  }
  return res

}
