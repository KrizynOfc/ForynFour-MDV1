let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = `TES TES NDAS MU BOTAK 🤪`

conn.sendBut( m.chat, krizyn, wm, `Menu`, `.menu`.trim(), m)
let mentionedJid = [m.sender]
}
handler.customPrefix = /^(tst|tes|tes bot|tc|tess)$/i // ketik bot (tanpa prefix)
handler.command = new RegExp

handler.fail = null
module.exports = handler
