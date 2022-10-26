let {
    MessageType,
    MessageOptions,
    Mimetype
} = require('@adiwajshing/baileys')
let limit = 9999999999999
const {
    servers,
    yta
} = require('../lib/y2mate')
let handler = async (m, {
    conn,
    args,
    isPrems,
    isOwner
}) => {
    if (!args || !args[0]) return m.reply('Uhm... urlnya mana?')
    let chat = global.db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let {
        dl_link,
        thumb,
        title,
        filesize,
        filesizeF
    } = await yta(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : wait)
    if (!isLimit)
        await conn.sendMessage(
            m.chat, {
                document: {
                    url: dl_link
                },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`
            }, {
                quoted: m
            })
}
handler.help = ['ytmp3'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
