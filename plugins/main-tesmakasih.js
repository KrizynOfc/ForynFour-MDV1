let fs = require('fs')
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/90d76289e9643fd3b38ba.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "SAMA SAMA, SEMOGA HARI HARI MU MENYENANGKAN 🤗", wm, 'Donasi', '.donasi', 'Menu', '.menu', 'Sewa', '.sewa', m)
                 
}
handler.customPrefix = /^(tq bre|tq bro|thanks ngab|tq ngab|makasi|tengkyu|makasii|makasihh|thnks|terimakasih|terima kasih|mksih|makasih|tq|thanks|thank you|mksh|maksih|mkasih|makaseh|)$/i
handler.command = new RegExp

module.exports = handler

