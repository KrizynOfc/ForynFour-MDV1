let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '15'
let sp = '20'
let sv = '30'
//premium
let ph = '5'
let pn = '10'
let pp = '15'
let pv = '20'
let ppm = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat :* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal :* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar :* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro :* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip :* _${sv}k/grup (Unlimited)_
╰═══┅═══━

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat :* _${ph}k (1 minggu)_
┊⫹⫺ *Normal :* _${pn}k (1 bulan)_
┊⫹⫺ *Pro :* _${pp}k (4 bulan)_
┊⫹⫺ *Vip :* _${pv}k (8 bulan)_                                               
┊⫹⫺ *Permanent :* _${ppm}k (Unlimited)_
╰═══┅═══━

📌 *KEBIJAKAN :*
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL`
const sections = [
   {
	title: ` SEWA ✦-------`,
	rows: [
	    {title: "💰 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Sewa', description: 'PRICE : ' + sh + 'k (1 minggu)' },
	    {title: "💰 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Sewa', description: 'PRICE : ' + sn + 'k (1 bulan)' },
	{title: "💰 STANDAR", rowId: '.orsewa *Paket:* STANDAR • Sewa', description: 'PRICE : ' + ss + 'k (2 bulan)' },
	{title: "💰 PRO", rowId: '.orsewa *Paket:* PRO • Sewa', description: 'PRICE : ' + sp + 'k (4 bulan)' },
	{title: "💰 VIP", rowId: '.orsewa *Paket:* VIP • Sewa', description: 'PRICE : ' + sv + 'k (UNLIMITED)' },
	]
    }, {
    title: ` PREMIUM ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Premium', description: 'PRICE : ' + ph + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Premium', description: 'PRICE : ' + pn + 'k (1 bulan)' },
	{title: "🔖 PRO", rowId: '.orsewa *Paket:* PRO • Premium', description: 'PRICE : ' + pp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.orsewa *Paket:* VIP • Premium', description: 'PRICE : ' + pv + 'k (8 bulan)' },
	{title: "🔖 VVIP", rowId: '.orsewa *Paket:* PERMANENT • Premium', description: 'PRICE : ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: 'LIST SEWA OR RENT',
  footer: info,
  title: '',
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa(bot)?)$/i

module.exports = handler
