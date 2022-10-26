let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/65289acb075702f9bb306.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nIya ada perlu apa dengan bot? ", '📮 Silahkan Pilih Button dibawah ini', 'Group', '.allgc', 'Menu', '.menu', 'Store', '.store', m)
                        
}
handler.customPrefix = /(@+6289526416801)/i
handler.command = new RegExp

module.exports = handler
