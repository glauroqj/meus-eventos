function setHash(code) {
  return new Promise((resolve) => {
    /* verify if code exist */
    const newCode = encrypt(code)
    console.log('Encrypt: ', newCode)
    window.localStorage.setItem('meus-eventos-code', newCode)
    resolve(true)
  })
}

function getHash() {
  return new Promise((resolve) => {
    let code = window.localStorage.getItem('meus-eventos-code')
    console.log('CODE: ', code)
    if (!code) {
      resolve(code)
    }
    const newCode = decrypt(code)
    resolve(newCode)
  })
}

function encrypt(code) {
  return btoa(code)
}

function decrypt(code) {
  return atob(code)
}

module.exports = {setHash, getHash}