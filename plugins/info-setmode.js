function handler(m) {
  m.reply('Mau matikan?\nMau hidupkan?')
  this.send2But(m.chat, `╭─〔  SET MODE  〕─⬡
  
⊙ Mode : ${global.opts['self'] ? 'Self' : 'Publik'}`, 'Click Here', 'BOT ONLINE', '.public', 'BOT OFFLINE', '.self')
}
handler.help = [ 'setmode']
handler.tags = ['main']

handler.command = /^(mode|setmode)$/i
handler.owner = false

module.exports = handler
