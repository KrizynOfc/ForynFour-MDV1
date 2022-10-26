let util = require('util')
let path = require('path')
let fs = require('fs')

let handler = async (m, { conn }) => {
let vn = './sound/Ara.mp3'
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 5032,status: 200, thumbnail: fs.readFileSync('./media/IMG_20220320_185112_420.jpg'), surface: 200, message: `Ara-Ara`, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
conn.sendFile(m.chat, vn, 'ara.mp3', null, ftroli, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true,
seconds: 9999,
fileLength: 99999// true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /^ara/i
handler.command = new RegExp
module.exports = handler
