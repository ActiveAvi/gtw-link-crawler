require("dotenv").config();
const insert = require("./db/insert.js");
const LinksList = require("./models/LinksList.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const BLOCKED =
    process.env.CHANNELS == "" ? process.env.CHANNELS.split(",") : "";
const { isURL } = require("validator");

bot.login(TOKEN)
    .then(() => console.log("Login successful"))
    .catch((err) => console.error(err));

// On message, check for links and trigger save func
bot.on("message", async (message) => {
    let user = message.author.username;
    let channel = (await message.channel.fetch()).name;
    if (!BLOCKED.includes(channel)) {
        let links = (message.content.match(/\bhttps?:\/\/\S+/gi) || [])
            .filter((link) => isURL(link))
            .map(link => link.replace(/^http:\/\//i, "https://"));
        if (links) {
            let linkList = new LinksList({ user, channel, links });
            insert(linkList);
        }
    }
});
