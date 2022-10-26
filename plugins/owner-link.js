let handler = function (m) {
  // this.sendContact(m.chat, '62895327934887', 'OwnerKu', m)
  conn.sendContact(m.chat, '62895327934887', 'OWNER STORE', m)
  m.reply('wa.me/62895327934887?text=Banh+Order+Kuy')
}

handler.command = /^ownerlink$/i

module.exports = handler
