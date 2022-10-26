let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')

const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let krizyn = 'https://telegra.ph/file/5a7a82e7c656d7d51f2e6.jpg'
  let uname = conn.getName(m.sender)
  let totalreg = Object.keys(global.db.data.users).length
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar ${namalu}.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 90) throw 'Umur terlalu tua, bapak ngapain main hp? 😒'
  if (age < 3) throw 'Bayi bisa ngetik, mau gw block? 😖'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  user.serial = sn
  let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 0,status: 200, surface: 200, message: 'TERDAFTAR ✅', orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
  
  m.reply(`
╭─❒ 〔 DAFTAR BERHASIL 〕
❍ Terimakasih anda sudah terdaftar
❍ Di database kami
╭─────────────────╮
├❏ Nama : ${name}
├❏ Umur : ${age} tahun
├❏ SN : ${sn}
├❏ Total : ${totalreg} User
╰─────────────────╯
Gunakan Bot Secukupnya
Dont Call/Vc Bot 
`.trim())
u = '╭─❒ 〔 HALLO NEW PREN 〕\n\n❍ Jika mau ke Pengaturan Bot Klik Tombol "Rules Bot"\n❍ Jika menuju menu Klik tombol "Command"\n❍ Jika mau cari owner Klik tombol "Owner"\n\nPatuhi Rules nya,demi kenyamanan kita bersama.'
await conn.send3ButtonImg(m.chat, krizyn, u, wm, 'Donasi', '#donasi', 'Menu', '#menu', 'Owner', '#owner',  ftroli)
}
handler.help = ['daftar', 'reg'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
