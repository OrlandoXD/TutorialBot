const Discord = require('discord.js')
const fs      = require('fs')
const config  = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const colors  = JSON.parse(fs.readFileSync('colors.json', 'utf8'))



var client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}...`)
    if(config.activity.streaming == true) {
        client.user.setActivity(config.activity.streamgame, {url: config.activity.url})
    } else if(config.activity.streaming != true) {
        client.user.setActivity(config.activity.game, {type: 'PLAYING'})
    }
    client.user.setStatus('online')
})

client.on('message', (msg) => {
var cont    = msg.content,
    member  = msg.member,
    channel = msg.channel,
    guild   = msg.guild

    
    
        if(member.id != client.user.id && cont.startsWith(config.prefix + "help")) {
            let embed1 = new Discord.RichEmbed()
                .setColor(colors.blau)
                .setThumbnail("https://yt3.ggpht.com/a/AGF-l789PaUprgfCLjFK-nrSsV8BVb_OKaPlGg_cug=s288-mo-c-c0xffffffff-rj-k-no")
                .addField("!test", `Damit bekommst du Die tester Rolle!`, true);
            channel.sendEmbed(embed1)
        } if(member.id != client.user.id && cont.startsWith(config.prefix + "test")) {
            member.addRole('603218031463759901')
            let embed2 = new Discord.RichEmbed()
                .setColor(colors.weiß)
                .addField("Dir wurde die Rolle **test** hinzugefügt!", `requsted by ${member.displayName}`);
            channel.sendEmbed(embed2)
        } if(member.id != client.user.id && member.hasPermission('ADMINISTRATOR') && cont.startsWith(config.adminprefix + "stream-ac")) {
            client.user.setActivity(config.activity.streamgame, {url: config.activity.url})
            let embed3 = new Discord.RichEmbed()
                .setColor(colors.weiß)
                .addField(`Die Aktivität wurde auf **${config.activity.streamgame}** gesetzt!`, `requsted by ${member.displayName}`);
            channel.sendEmbed(embed3)
        } if(member.id != client.user.id && member.hasPermission('ADMINISTRATOR') && cont.startsWith(config.adminprefix + "normal-ac")) {
            client.user.setActivity(config.activity.game, {type: 'PLAYING'})
            let embed4 = new Discord.RichEmbed()
                .setColor(colors.weiß)
                .addField(`Die aktivität wurde erfolgreich auf **${config.activity.game}** gesetzt!`, `requsted by ${member.displayName}`);
            channel.sendEmbed(embed4)
        } if(member.id != client.user.id && member.hasPermission('ADMINISTRATOR') && cont.startsWith(config.adminprefix + "offline")) {
            client.user.setStatus('invisible')
            let embed5 = new Discord.RichEmbed()
                .setColor(config.weiß)
                .addField(`Der Status wurde Auf **OFFLINE** gesetzt`, `requsted by ${member.displayName}`)
            channel.sendEmbed(embed5)
        } if(member.id != client.user.id && member.hasPermission('ADMINISTRATOR') && cont.startsWith(config.adminprefix + "online")) {
            client.user.setStatus('online')
            let embed6 = new Discord.RichEmbed()
                .setColor(config.weiß)
                .addField(`Der Status wurde Auf **ONLINE** gesetzt`, `requsted by ${member.displayName}`)
            channel.sendEmbed(embed6)
        }
})




client.login(config.token)
