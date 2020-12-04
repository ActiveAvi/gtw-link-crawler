require("dotenv").config();
const saveLinks = require("./db/insert.js");
const LinksList = require("./models/LinksList.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const BLOCKED =
    process.env.CHANNELS == "" ? process.env.CHANNELS.split(",") : "";
const { isURL } = require("validator");
const LinkList = require("./models/LinksList.js");

bot.login(TOKEN)
    .then(() => console.log("Login successful"))
    .catch((err) => console.error(err));

// On message, check for links and trigger save func
bot.on("message", async (message) => {
    let user = message.author.username;
    let channel = await message.channel.fetch();
    if (!BLOCKED.includes(channel.name)) {
        let links = message.content.match(/\bhttps?:\/\/\S+/gi) || [];
        links = links.filter(link => isURL(link));
        if(links) {
            let linkList = new LinkList({
                user: user,
                channel: channel,
                timePosted: Date.now(),
                links: links,
            });
            saveLinks(linkList)
        }
    }
});