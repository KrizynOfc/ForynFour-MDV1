/*let levelling = require('../lib/levelling')
let fs = require('fs')
let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        //let buttons = [{buttonId: `.my`, buttonText: {displayText: 'My Profile'}, type: 1}]
        
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        let krizyn
        try {
        krizyn = await (await fetch('https://telegra.ph/file/844724f0712b24d1d2a76.jpg')).buffer()
        } catch (e) {
        } finally {
     
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

             
                if (before !== user.level) {
                        await this.reply(m.chat, krizyn , `╭───◪〔 L E V E L  U P 〕◪─\n┃⬡ Name : @${m.sender.split('@')[0]}\n\n┃⬡ Level Sebelum : *${before}*\n┃⬡ Level up : *${user.level}*\n╰───────────────⬣\n╭───◪〔 N O T I C E 〕◪──\n│⬣ Terus berinteraksi dengan bot\n│⬣ Supaya naik level selenajutnya\n╰─────────────────⬣`, m, { mentions: [m.sender] })
                        //await this.sendMessage(m.chat, { caption: `*@${m.sender.split('@')[0]} Naik Level!*\n\n*${before}* ➞ *${user.level}*\n\nTekan tombol dibawah Untuk mengecek!\n*.disable autolevelup* Untuk mematikan auto levelup`, location: { jpegThumbnail: b }, buttons: buttons, footer: `AUTOLEVELUP📌\n${wm}`, headerType: 'LOCATION', mentions: [m.sender] })
                }
        }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}*/

let levelling = require('../lib/levelling')
let fs = require('fs')
let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m) {
        let user = global.db.data.users[m.sender]
        if (!user.autolevelup) return !0
        let users = Object.entries(global.db.data.users).map(([key, value]) => {
                return { ...value, jid: key }
        })
        //let buttons = [{buttonId: `.my`, buttonText: {displayText: 'My Profile'}, type: 1}]
        let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
        let usersLevel = sortedLevel.map(enumGetKey)
        let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
        let a
        try {
        a = await (await fetch(fla + 'Selamat Naik Level!')).buffer()
        } catch (e) {
        } finally {
     
                let before = user.level * 1
                while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

             
                if (before !== user.level) {
                        await this.reply(m.chat, `*@${m.sender.split('@')[0]} Naik Level!*\n\n*${before}* ➞ *${user.level}*\n\nGunakan *.my* Untuk mengecek!\n*.disable autolevelup* Untuk mematikan auto levelup`, m, { mentions: [m.sender] })
                        //await this.sendMessage(m.chat, { caption: `*@${m.sender.split('@')[0]} Naik Level!*\n\n*${before}* ➞ *${user.level}*\n\nTekan tombol dibawah Untuk mengecek!\n*.disable autolevelup* Untuk mematikan auto levelup`, location: { jpegThumbnail: b }, buttons: buttons, footer: `AUTOLEVELUP📌\n${wm}`, headerType: 'LOCATION', mentions: [m.sender] })
                }
        }
}
module.exports = handler

function sort(property, ascending = true) {
        if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
        else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
        if (property) return (a, i, b) => {
                return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
        }
        else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
        return a.jid
}
