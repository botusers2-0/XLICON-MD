const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2347032983433"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'isaacnerds@gmail.com'
global.github = 'https://github.com/'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '2347032983433' 
global.devs = '2347032983433';
global.website = 'https://github.com/' //wa.me/+2347032983433
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlVRlRuN0ZKVUJvTW9seUdnbERRN2xtUEtNOFErVzc0NkNkYVVPTTJscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTNid2tmaVJzbWVvV0luSktFZUFucFlyVjQrN1JHVVF6UVMzdGNFU2QxZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRnczdVVoeDhuak9idGtBWm44Q3BnaGJmMExEdXRFN3hHcy9BNThFd0ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZFNpM1VCUnpkaUpyNGQvTEpqRVlvbnhOc25taFZobWNLYlFEVzhORUhZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIcjY1VWFVaFNRUmViZWd1WVRPNXZnajFLR1N0Z1ZJa2RoMVRLVVhpR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill0dDhEdkM4OEtrZ1BuZzdJdW1lZGZrWWxKb2YzL2xlNlVUUEJZYms0bGs9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvcmlWVW96UTU5elJrQlFFaXpUcDVZMDB4YjFqdDFXU2x6c1NGWU93V3JjZ1BQSjJvc0hZYnQ1Rm9qV0FmdmxUTlN4VmRZalo4eWYxd1Rwbmp0WWRBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI5LCJhZHZTZWNyZXRLZXkiOiJZS1liWHp4M2lEOHdOQVorQkdJZE83QWJaU3duelpWRkpzZGZHS2VUMHpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4YlAwUm5jMFRDU3JCZldROW10SzZRIiwicGhvbmVJZCI6IjhlYTEyNDYzLWY4NjgtNDI4Mi1hZTM5LTJkYWE4NGVjYTg4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSktCUXFMSUkvL2dhM1NPNGFZYzkyYW1UeVE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIxZ0VsT1lhL3Qyb3NnekJzZFlkZzBXeUQzUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lpOXF0QUdFTlhQNTdrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNyeC95WE1hd3V5SlFsMXdXWlBjMkxBa3pXeXlLeUhVQWJuR2RKMlFlVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlVNWRpM2t4MmZnT29PK0lSajV5OUNPK0tHcDBOR2YvcFpXckVpRmRPT1IrdTR4ak9mSWdwcTNkT1hzU3VNcW5SNlBJRElhUmhMUWk4bTFHM3pkckFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPYTNWc0ZLakRHa0lOaERSNjA1bmZhckhVY29VcXQyTkovQ3Z2eHpUT0IwTldtRGlrTjNIVUIvd05UR2UycjBFRUF4d2s0aEF5NXgzS3hNc1ZBUWJDUT09In0sIm1lIjp7ImlkIjoiMjM0NzAzMjk4MzQzMzo2OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDMyOTgzNDMzOjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhLOGY4bHpHc0xzaVVKZGNGbVQzTml3Sk0xc3Npc2gxQUc1eG5TZGtIazgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE4NDgxNTN9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Tife-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Tife' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
