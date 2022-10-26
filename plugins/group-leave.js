let handler = async function(m, {
    conn,
    args,
    isPrems,
    isOwner
}) {

    const bot = m.key.remoteJid
    const sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    this.reply(m.chat, 'Bye Semuaa 😞', m)
    await sleep(5000)
    await conn.groupLeave(bot)
}
handler.help = ['out']
handler.tags = ['group']
handler.command = /^(out)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
