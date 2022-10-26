const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const { servers, yta, ytv } = require('../lib/y2mate')
let fs = require('fs')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} california`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Konten Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
let anu =  `╭───〔 YOUTUBE DOWNLOAD 〕──⬣
⫹⫺ *Judul:* ${title}
⫹⫺ *Ukuran File Audio:* ${filesizeF}
⫹⫺ *Ukuran File Video:* ${yt2.filesizeF}
⫹⫺ *Server y2mate:* ${usedServer}
⫹⫺ *Link Sumber:* ${vid.url}
╰──────────⬣`
     let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(thumb)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: anu,
            hydratedFooterText: wm, 
            hydratedButtons: [{
             urlButton: {
               displayText: 'MyWeb',
               url: 'https://lynk.id/kri.com'
             }

           },
              {
             urlButton: {
               displayText: 'Saweria',
               url: 'https://saweria.co/Kricom'
             }

           },
               {
             quickReplyButton: {
               displayText: '🎵 Audio',
               id: `.ytmp3 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: '📽 Video',
               id: `.ytmp4 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: '🔎 Search',
               id: `.yts ${vid.url}`,
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler

