let fs = require('fs')
let {
    performance
} = require('perf_hooks')
let osu = require('node-os-utils')
let handler = async (m, {
    conn,
    usedPrefix,
    DevMode
}) => {
    try {
        let NotDetect = 'Not Detect'
        let old = performance.now()
        let cpu = osu.cpu
        let cpuCore = cpu.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let OS = osu.os.platform()
        let cpuModel = cpu.model()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
            driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
            driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
            ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
            ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
            netsIn = (info.total.inputMb + ' MB'),
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
            netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])
        await conn.reply(m.chat, 'Tunggu bentar', m)
        let _ramTotal = (ramTotal + ' MB')
        let neww = performance.now()
     conn.reply(m.chat, `
┏━━〔 *STATUS BOT* 〕━⌲
◎ OS: *${OS}*
◎ CPU Model: *${cpuModel}*
◎ CPU Core: *${cpuCore} Core*
◎ CPU: *${cpuPer}%*
◎ Ram: *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
◎ Drive: *${driveUsed} / ${driveTotal} (${drivePer})*
◎ Ping: *${Math.round(neww - old)} ms*
◎ Internet IN: *${netsIn}*
◎ Internet OUT: *${netsOut}*
┗━━━━━━━━━━━━━⌲
`.trim(), m)
        console.log(OS)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Status.js error\nNo: *' + m.sender.split `@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
handler.help = ['statusbot'].map(v => 'status' + v)
handler.tags = ['info']
handler.command = /^(bot)?status(bot)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

