let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Hei @${orang.replace(/@.+/, '')} mau gak jadi pacar gw? 😌`.trim()
    let mentionedJid = [orang]
    await conn.sendBut(m.chat, jawab, '📮 Silahkan cari Pacar Lagi', `Cari Pacar`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['caripacar']
handler.tags = ['fun']
handler.command = /^pacar|pcr|caridoi|doi|caripacar$/i
handler.group = true

module.exports = handler
