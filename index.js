require('dotenv').config();
const Discord = require('discord.js');
const { Server } = require('@fabricio-191/valve-server-query');


const { Client, GatewayIntentBits } = require('discord.js');




var cooldown = 60
var mapChannelID = "1168671212902305956"
var plrChannelID = "1168671523217887322"
var ippChannelID = "1169354255061225472"


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ],
});



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function UpdateChannels(map, plr, plrm, address) {
    var MapChannel = client.channels.cache.get(mapChannelID)
    var PlrChannel = client.channels.cache.get(plrChannelID)
    var IppChannel = client.channels.cache.get(ippChannelID)

    MapChannel.setName("🌍 " + map);
    PlrChannel.setName("🎮 " + plr + " / " + plrm);
    IppChannel.setName("🛬 " + address);
}


const interval = setInterval(async function () {
    try {
        const server = await Server({
            ip: process.env.PRIV_IP,
            port: parseInt(process.env.PRIV_PORT, 10),
            timeout: 3000,
        });
        const info = await server.getInfo();
        UpdateChannels(info.map, info.players.online, info.players.max, info.address)
    } catch {
        console.log("Timeout")
    }
}, cooldown * 1000);


client.login(process.env.CLIENT_TOKEN); 