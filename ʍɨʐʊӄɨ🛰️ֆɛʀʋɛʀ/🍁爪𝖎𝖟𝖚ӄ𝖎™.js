// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Mizuki_Buttons = require(`./Mizuki_Buttons`);
const Mizuki_Static = require(`./Mizuki_Static`);
const LetGoChecker = require(`./LetGoChecker`);
const 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք = require(`./𝓜𝖎𝖟𝖚ӄ𝖎ᴢᴇɴ`);
const moment = require(`moment-timezone`);
const PostDataBase = require(`./postDb`);
const AutoKrakz = require(`./𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
const speed = require(`performance-now`);
const LinkList = require(`./LinkList`);
const { ʄǟռƈʏ } = require(`../ʄǟռƈʏ`);
const 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք = require(`./helper`);
const welbuts = require(`./welbuts`);
const BanList = require(`./BanList`);
const postDb = require(`./postDb`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const Kolor = require(`chalk`);
let Timestamp = speed();
const Pong = speed() - Timestamp;
const Ping = Pong.toFixed(4);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
const 𝓜𝖎𝖟𝖚ӄ𝖎sql = _𝔏𝔞𝔟_.POSTQL;
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const time2 = moment().tz(`Asia/Kolkata`).format(`HH:mm:ss`);
if (time2 < `24:59:00`) {
  var Timers = `𝐍𝐢𝐠𝐡𝐭😴`;
}
if (time2 < `19:00:00`) {
  var Timers = `𝐄𝐯𝐞𝐧𝐢𝐧𝐠🌞`;
}
if (time2 < `18:00:00`) {
  var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧🌄`;
}
if (time2 < `15:00:00`) {
  var Timers = `𝐀𝐟𝐭𝐞𝐫𝐧𝐨𝐨𝐧☀️`;
}
if (time2 < `11:00:00`) {
  var Timers = `𝐌𝐨𝐫𝐧𝐢𝐧𝐠🌅`;
}
if (time2 < `05:00:00`) {
  var Timers = `𝐍𝐢𝐠𝐡𝐭💤`;
}
const version = vers.vers;
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ӄʀǟӄɨռʐ = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.WhatsApp;
ӄʀǟӄɨռʐ.logger.level = `error`;
async function 爪𝖎𝖟𝖚ӄ𝖎() {
  var ꜱɪᴛʀᴀᴘ = new Map();
  var commandUsage = new Map();
  console.log(Kolor.yellow(`🍁INFO ⬰ 𝐒𝐲𝐦𝐥𝐢𝐧𝐤𝐢𝐧𝐠 𝐖𝐢𝐭𝐡 𝐌𝐢𝐳𝐮𝐤𝐢 𝐒𝐲𝐬𝐭𝐞𝐦...\n✔️`));
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  if (_𝔏𝔞𝔟_.HEROKU_API === `Null` || _𝔏𝔞𝔟_.HEROKU_BOT_NAME === `Null`) {
    console.log(
      Kolor.yellow(
        `❌ERROR ⬰  𝐒𝐞𝐞𝐦𝐬 𝐥𝐢𝐤𝐞 𝐇𝐞𝐫𝐨𝐤𝐮 𝐯𝐚𝐫𝐬 𝐚𝐫𝐞 𝐢𝐧𝐯𝐚𝐥𝐢𝐝.𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐚𝐧𝐝 𝐫𝐞𝐭𝐫𝐲!`
      )
    );
    process.exit(0);
  }
  console.log(
    Kolor.yellow(
      `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
    )
  );
  console.log(Kolor.yellow(`🍁INFO ⬰ Checking For 🍁爪𝖎𝖟𝖚ӄ𝖎™Updates ...\n✔️`));
  await AutoKrakz();
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  try {
    var session = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.Mee6reignite(_𝔏𝔞𝔟_.Mee6);
    ӄʀǟӄɨռʐ.loadAuthInfo(session);
  } catch (ℓαвєяяσя) {
    if (
      ℓαвєяяσя instanceof Typeℓαвєяяσя ||
      ℓαвєяяσя.message === `given authInfo is null` ||
      ℓαвєяяσя instanceof Syntaxℓαвєяяσя
    ) {
      console.log(
        Kolor.red(`𝗜𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗦𝘁𝗿𝗶𝗻𝗴. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝗮𝗴𝗮𝗶𝗻!`)
      );
      process.exit(0);
    } else {
      console.log(Kolor.red(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`connecting`, async () => {
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    console.log(
      Kolor.yellow(`🍁INFO ⬰ Connecting to 🍁爪𝖎𝖟𝖚ӄ𝖎™ Whatsapp...🛸`)
    );
    console.log(Kolor.yellow(`🍁INFO ⬰ 🍁爪𝖎𝖟𝖚ӄ𝖎™ Connected✔️`));
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`open`, async () => {
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    console.log(Kolor.green(`🍁INFO ⬰ 𝐋𝐢𝐧𝐤𝐢𝐧𝐠 𝐌𝐢𝐳𝐮𝐤𝐢 𝐖𝐢𝐭𝐡 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞...✔️`));
    try {
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.authenticate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.validate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql
        .sync()
        .then(console.log(Kolor.yellow(`🍁INFO ⬰ 🍁爪𝖎𝖟𝖚ӄ𝖎™ Connected✔️`)));
    } catch (ℓαвєяяσя) {
      console.ℓαвєяяσя(
        `❌ERROR ⬰  𝗨𝗻𝗮𝗯𝗹𝗲 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲:`,
        ℓαвєяяσя
      );
    }
    console.log(
      Kolor.red(`
⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡
███╗   ███╗██╗███████╗██╗   ██╗██╗  ██╗██╗
████╗ ████║██║╚══███╔╝██║   ██║██║ ██╔╝██║
██╔████╔██║██║  ███╔╝ ██║   ██║█████╔╝ ██║
██║╚██╔╝██║██║ ███╔╝  ██║   ██║██╔═██╗ ██║
██║ ╚═╝ ██║██║███████╗╚██████╔╝██║  ██╗██║
╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`)
    );
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    const ᴍɪᴢᴜᴋɪɢɪ = require(`simple-git`)();
    await ᴍɪᴢᴜᴋɪɢɪ.fetch();
    var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋ = await ᴍɪᴢᴜᴋɪɢɪ.log([`KrakinzLab..origin/KrakinzLab`]);
    await ӄʀǟӄɨռʐ.sendMessage(
      ӄʀǟӄɨռʐ.user.jid,
      {
        url: _𝔏𝔞𝔟_.MEE,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `(ƈ)𝐌𝐢𝐳𝐮𝐤𝐢🍹𝐁𝐨𝐭 _${version}_

┌━━━━━━━★
│🍁ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
│🛰️𝐏𝐢𝐧𝐠: ${Ping}s
│📅𝐃𝐚𝐭𝐞: ${Clock}
│🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}
│💀 𝐎𝐥𝐝 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.verold}_
│🧈 𝐍𝐞𝐰 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${version}_
│🧃 𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞𝐬: _${ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋ.total}_
└───────〇`,
      }
    );
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  await ӄʀǟӄɨռʐ.connect().then(ʄǟռƈʏ(ꜱɪᴛʀᴀᴘ, commandUsage));
  ӄʀǟӄɨռʐ.on(`group-update`, async (update) => {
    try {
      const groupupdateID = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
      if (update.announce == `false`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*

┌━━━━━━━★
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Open For All*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘰𝘱𝘦𝘯𝘦𝘥 𝘣𝘺 𝘢𝘥𝘮𝘪𝘯 
⬡ 𝘕𝘰𝘸 𝘢𝘭𝘭 𝘮𝘦𝘮𝘣𝘦𝘳𝘴 𝘤𝘢𝘯 𝘴𝘦𝘯𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.announce == `true`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━★
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Admins-Only*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘤𝘭𝘰𝘴𝘦𝘥 𝘣𝘺 𝘈𝘥𝘮𝘪𝘯𝘴
⬡ 𝘕𝘰𝘸 _only_ 𝘈𝘥𝘮𝘪𝘯𝘴 𝘤𝘢𝘯 𝘴𝘦𝘯𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (!update.desc == ``) {
        tag = update.descOwner.split(`@`)[0] + `@s.whatsapp.net`;
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              contextInfo: {
                mentionedJid: [tag],
              },
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━★
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*New Description Added*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│🍌𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐁𝐲: @${update.descOwner.split(`@`)[0]}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

★━━━━━★ 𝐍𝐞𝐰 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 ★━━━━━★
${update.desc}`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.restrict == `false`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━★
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Info Edit Allowed For All*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰 𝘌𝘥𝘪𝘵 𝘏𝘢𝘴 𝘉𝘦𝘦𝘯 𝘖𝘱𝘦𝘯𝘦𝘥 𝘍𝘰𝘳 𝘌𝘷𝘦𝘳𝘺𝘰𝘯𝘦
⬡ 𝘕𝘰𝘸 𝘈𝘭𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴 𝘊𝘢𝘯 𝘌𝘥𝘪𝘵 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.restrict == `true`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━★
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Info Edit Allowed For Admins-Only*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰 𝘌𝘥𝘪𝘵 𝘏𝘢𝘴 𝘉𝘦𝘦𝘯 𝘊𝘭𝘰𝘴𝘦𝘥 𝘍𝘰𝘳 𝘌𝘷𝘦𝘳𝘺𝘰𝘯𝘦
⬡ 𝘕𝘰𝘸 𝘈𝘭𝘭 𝘈𝘥𝘮𝘪𝘯𝘴 𝘊𝘢𝘯 𝘌𝘥𝘪𝘵 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
      }
    } catch {}
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
    try {
      var GroupID = update.jid;
      const GroupMemData = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
      const GroupMemG = GroupMemData.participants.length;
      const GroupMemBio = await ӄʀǟӄɨռʐ.getStatus(
        update.participants[0],
        MessageType.text
      );
      const MemNum = update.participants[0];
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (update.action == `add` && MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
        console.log(`⬡••••••••⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁Added    ⬡••••••••⬡`);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          GroupID,
          { url: _𝔏𝔞𝔟_.MEE },
          MessageType.image,
          { mimetype: Mimetype.png }
        );
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            GroupID,
            {
              contentText: `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 ${Timers} ᴇᴠᴇʀʏᴏɴᴇ.
ʙᴏᴛ ɪꜱ ʀᴇᴀᴅʏ ᴛᴏ ᴀꜱꜱɪꜱᴛ ʏᴏᴜ!
ᴛʏᴘᴇ *${ᴋᴇɪ}help* ᴛᴏ ᴋɴᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!

┌━━━━━━━★
│
│🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
└───────〇`,
              footerText: `(ƈ)𝐌𝐢𝐳𝐮𝐤𝐢🍹𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}help`,
                  buttonText: { displayText: `${ᴋᴇɪ}help` },
                  type: 1,
                },
                {
                  buttonId: `${ᴋᴇɪ}mizuki`,
                  buttonText: { displayText: `${ᴋᴇɪ}mizuki` },
                  type: 1,
                },
                {
                  buttonId: `${ᴋᴇɪ}faq`,
                  buttonText: { displayText: `${ᴋᴇɪ}faq` },
                  type: 1,
                },
              ],
              headerType: 4,
              imageMessage: media.message.imageMessage,
            },
            MessageType.buttonsMessage
          )
          .then(async (ℓαвєяяσя) => {
            await PostDataBase.setWelcome(
              GroupID,
              `𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 ⬡ ʙᴏᴛ ɪꜱ ʀᴇᴀᴅʏ ᴛᴏ ᴀꜱꜱɪꜱᴛ ʏᴏᴜ!

┌──────────────★
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│🐙 𝐆𝐑𝐎𝐔𝐏: _${ᴋᴇɪ}what_
│🦞 𝐆𝐢𝐭𝐡𝐮𝐛: _${ᴋᴇɪ}repo_
│🍾 𝐆𝐞𝐭 𝐌𝐢𝐳𝐮𝐤𝐢: _${ᴋᴇɪ}request_
└───────〇

🌱𝗣𝗿𝗲𝘀𝘀 𝗯𝗲𝗹𝗼𝘄 𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗦𝘁𝗮𝗿𝘁 𝘂𝘀𝗶𝗻𝗴 𝗠𝗶𝘇𝘂𝗸𝗶👇🏽‍ `
            );
            if (ℓαвєяяσя) console.log(ℓαвєяяσя);
          })
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (update.action === `add` && !MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
        var enable = await postDb.checkSettings(GroupID, `setwelcome`);
        if (enable === false || enable === `OFF`) {
          return;
        } else {
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
          return welbuts
            .welbuts(
              ӄʀǟӄɨռʐ,
              GroupID,
              GroupMemData,
              GroupMemG,
              GroupMemBio,
              MemNum
            )
            .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (update.action === `remove`) {
        return;
      }
    } catch (ℓαвєяяσя) {
      console.log(ℓαвєяяσя);
    }
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) return;
    if (!chat.messages) return;
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    chat = chat.messages.all()[0];
    const sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ӄʀǟӄɨռʐ.groupMetadata(chat.key.remoteJid)
      : ``;
    var 𝓜𝖎𝖟𝖚ӄ𝖎 = 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
    console.log(chat);
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isCmd) {
      var CheckBans = await BanList.getBanlistUser(
        𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (CheckBans === true && !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) return;
      const jsoncool = JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https://yout`) &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https:/google`) &&
        𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https://chat.whatsapp`)
      ) {
        var CheckLinks = await LinkList.getLinklistUser(
          𝓜𝖎𝖟𝖚ӄ𝖎.sender,
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId
        );
        const REMOVE = chat.key.fromMe
          ? ӄʀǟӄɨռʐ.user.jid
          : 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
          ? chat.participant
          : chat.key.remoteJid;
        console.log(
          Kolor.green(
            `🍁INFO ⬰ Antilink ${CheckLinks} in > ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}.`
          )
        );
        if (CheckLinks === true) {
          Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `
┌────★ 📍𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤-𝐀𝐜𝐭𝐢𝐯𝐞
│
│ᴛʜɪꜱ ɢʀᴏᴜᴘ ᴡɪʟʟ ᴋɪᴄᴋ ᴀɴʏ ɴᴏɴ-ᴀᴅᴍɪɴ ᴍᴇᴍʙᴇʀ ᴡʜᴏ ᴡɪʟʟ ꜱᴇɴᴅ ʟɪɴᴋ.
└──────★`,
            `./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`
          );
          return await ӄʀǟӄɨռʐ
            .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [REMOVE])
            .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var persCheck = jsoncool.includes(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      console.log(persCheck);
      if (persCheck === true) {
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🚏CoolDown:* _Wait For 10sec!_`,
          MessageType.text,
          {
            quoted: chat,
          }
        );
      } else {
        console.log(
          Kolor.yellow(
            `🍁INFO ⬰ ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName} Executed By ${𝓜𝖎𝖟𝖚ӄ𝖎.sender}`
          )
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
        await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
        var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
          `KrakinzLab..origin/KrakinzLab`,
        ]);
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
          require(`simple-git`)()
            .exec(async () => {
              console.log(
                Kolor.green(
                  `⬡==========================⬡    🍁Starting Mizuki pull...`
                )
              );
            })
            .pull(async (ℓαвєяяσя, update) => {
              if (ℓαвєяяσя) {
                try {
                  const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
                  console.log(`Merged ${mergeSummary.merges.length} files`);
                } catch (ℓαвєяяσя) {
                  console.error(
                    `Merge resulted in ${Kolor.red(ℓαвєяяσя)} conflicts`
                  );
                }
                // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
              } else if (update && update.summary.changes) {
                var child = require(`child_process`).exec(
                  `python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`
                );
                child.stdout.pipe(process.stdout);
                child.on(`exit`, async function () {
                  process.exitCode = 1;
                });
              }
            });
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const ᴍɪᴢᴜᴋɪᴄᴏᴍᴍᴀɴᴅ = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        var Needs = 𝓜𝖎𝖟𝖚ӄ𝖎.body.trim().split(/\s+/).slice(1);
        if (!ᴍɪᴢᴜᴋɪᴄᴏᴍᴍᴀɴᴅ) {
          return await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*❌Wrong Command Executed! Type ${ᴋᴇɪ}help*`,
            MessageType.text,
            {
              quoted: chat,
            }
          );
        } else {
          return ᴍɪᴢᴜᴋɪᴄᴏᴍᴍᴀɴᴅ.handle(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            Needs,
            ꜱɪᴛʀᴀᴘ,
            Clock,
            Ping,
            Timers,
            version
          );
        }
      }
    }
  });
}
module.exports = { 爪𝖎𝖟𝖚ӄ𝖎 };
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
