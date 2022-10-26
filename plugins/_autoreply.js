let fs = require('fs')
let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('sw cok')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]
    let setting = db.data.settings[this.user.jid]
    let user = global.db.data.users[m.sender]
    
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2But(m.chat, `┌─────*「 𝗜𝗡𝗩𝗜𝗧𝗘 𝗚𝗥𝗨𝗣 」*─────
➥ Allo mypren Kalau mau Invite Bayar ya gengs👋
➥ Jangan mau enak aja, tenang bakalan dijagain Grup lu
╔══════════════════════
║╭──❉ 「 𝗗𝗢𝗡𝗔𝗦𝗜 」 ❉──────
║│➸ *DANA* : 081360482998
║│➸ *PULSA*: 081360482998
║│➸ *GOPAY*: 081360482998
║│➸ *OVO*    : 081360482998
║╰──────────────────
╠══════════════════════
║╭──❉ 「 𝗦𝗘𝗪𝗔 𝗕𝗢𝗧 」 ❉─────
║│➸ 𝟏 ᗰIᑎGGᑌ    : _Rp._ *10.000*
║│➸ 𝟏 ᗷᑌᒪᗩᑎ       : _Rp._ *15.000*
║│➸ 𝟑 ᗷᑌᒪᗩᑎ : _Rp._ *20.000*
║│➸ ᑭEᖇᗰᗩᑎEᑎ : _Rp._ *30.000*
║╰──────────────────    
╚════════════════════
`.trim(), '📮 Silahkan Sewa Terlebih dahulu', 'Pemilik Bot', '.owner', 'Paymant', '.paymant', m)
    }

    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    	await this.send2But(m.chat, m.msg.contextInfo.expiration == 604800 ? '\n\nketik *.ephe* untuk matiin pesan sementaranya, biar tombolnya bisa dipake' : 'uhm.. iya ada apa?', wm, `${isBanned ? 'UNBAN' : 'MENU'}`, `${isBanned ? '.unban' : '.?'}`, `${!m.isGroup ? 'DONASI' : isBanned ? 'UNBAN' : 'BAN'}`, `${!m.isGroup ? '.donasi' : isBanned ? '.unban' : '.ban'}`, m)
    }
}
    
    if (/^bot$/i.test(m.text)) {
        await this.sendBut(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'aktif', wm2, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
