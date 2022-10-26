// POWERED By KrizynOfc

let fs = require('fs')
let fetch = require('node-fetch')
let knights = require('knights-canvas')
const moment = require('moment-timezone')

let handler = m => m
handler.all = async function (m) {
	let name = await conn.getName(m.sender)
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
//global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        global.u = await conn.clockString(_uptime)
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'github.com/krizynofc', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'mhdfakri14@gmail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { showAdAttribution: true,// Bagian ini sesuka kalian berkreasi :'v
					title: "Runtime : " + global.u,
					body: wm,
					previewType: "PHOTO",
					thumbnail: await (await fetch(media)).buffer(),
					sourceUrl: `${pickRandom([`https://vt.tiktok.com/ZSRBqB9q1/`, `https://www.instagram.com/mhdfakri_`, `https://youtube.com/hokenbeusz`])}`,
				}
			}
		}
		
//----------[ FAKE TOKO ]--------//
global.ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync('./media/krizyn.jpg') //Gambarnye
					},
					"title": tb, //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "Ghost",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
		
//----------[ FAKE TROLI ]--------//
global.ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'KrizynOfc', //Kasih namalu
                            orderTitle: tb,
                            thumbnail: fs.readFileSync('./media/krizyn.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//----------[ FAKE LOKASI ]--------//
global.flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Aceh Utara',
                    jpegThumbnail: fs.readFileSync('./media/krizyn.jpg')
                          }
                        }
                      }
                      
global.floc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "locationMessage": { "title":"Aceh","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')}}
	}
	
global.fliveLoc = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat  ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "caption":"ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')}}
	}
global.fliveLoc2 = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "liveLocationMessage": { "title": "ANTIBOT","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')}}
	}
		
//FAKEREPLY KONTAK
 global.fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"krizyn","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')}}
	}
	
 global.fcona = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactsArrayMessage": { "title":"antibot","h": `aloo`, 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')}}
	}
global.bugcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "contactMessage": { "vcard": ""}}}
	
//----------[ FAKE DOC ]--------//
global.fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: tb, 
                    jpegThumbnail: fs.readFileSync('./media/krizyn.jpg')
                          }
                        }
                      }
//----------[ FAKE VIDEO ]--------//
global.fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"Hai kak",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')
                        }
                       }
	                  }
//----------[ FAKE GC ]--------//
global.fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Hai kak", 
            'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')
		}
	}
}
//----------[ FAKE GIF  ]--------//
global.fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"Hai kak",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Hai kak',
                 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')
                        }
                       }
	                  } 
		
//----------[ FAKE TEXT  ]--------//
global.ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"Hai kak",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./media/krizyn.jpg')
                        }
	                  } 
                     }
//----------[ FAKE VN  ]--------//
global.fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "0-1625305606@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }


	}
}

//----------[ FAKE PAYMANT  ]--------//
global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": wm,
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "Hai Kak " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": wm
						}
					}
				}
			}
		
//----------[ FAKE INSTAGRAM  ]--------//
global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: instagram,
            mediaType: "VIDEO",
            description: instagram, 
            title: tb,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: gc
    }
    } }

//----------[ FAKE FACEBOOK  ]--------//
global.fakefb = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: fb,
            mediaType: "VIDEO",
            description: fb, 
            title: tb,
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: gc
    }
    } }

//----------[ FAKE IMG ]--------//
       global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: logo,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
				}
			}
		}

//----------[ FAKE IMGV ]--------//
		global.fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: logo,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
						viewOnce: true
					}
				}
			}
       
                            
// Random Pick Fake
                             
let pft = [globa.fakefb, global.fakeig, global.fimg, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]	                   
// Pick Random                    
global.fall = pft.getRandom()
		        

// FAKE LURUS🤗
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./media/krizyn.jpg'), thumbnail: require('fs').readFileSync('./media/krizyn.jpg'),sendEphemeral: true}}}

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
