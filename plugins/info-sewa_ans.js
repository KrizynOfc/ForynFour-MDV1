let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 1 ) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    let teks = `*ORDER SEWA*\n *ORDER :* ${text}\n* NAME :* @${m.sender.split`@`[0]}`
    conn.reply(`${global.owner}` + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`✅ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_`)
}
handler.command = /^(orsewa)$/i

module.exports = handler
