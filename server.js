//AŞAGİYA ELLEME! 
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
require('http').createServer(function (req, res) {res.write('');res.end();}).listen(8080);

const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "", // " İCİNE BOT TOKENİNİ YAZ!
    prefix: "", // " İCİNE PREFİXİNİ YAZ
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") //you can change this to any directory you want
//Ping Komutu Elleme!
bot.command({
name: "ping",
code: `
$title[1;$userTag[$clientID] | Ping]
$description[1;
Bot Gecikmesi: $ping 
Mesaj Gecikmesi: $messagePing
Veritabanı Gecikmesi: $dbPing]
$footer[1;$userTag[$clientID] Tüm Hakları Saklıdır]
`
})

bot.variables ({
  abonerol:"",// ABONE OLANLARA VERİLECEK ROLU " İCİNE ABONE ROL ID YAZ!
  aboneyetkilisi:"" // ABONE YETKİLİSİ ROLU " İCİNE ABONE YETKİLİSİ ROL ID YAZ!
  
})
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
