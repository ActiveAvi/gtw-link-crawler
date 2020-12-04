require("dotenv").config();
const saveLinks = require("./db/insert.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const BLOCKED =
    process.env.CHANNELS == "" ? process.env.CHANNELS.split(",") : "";
const { isURL } = require("validator");

bot.login(TOKEN);

// On message, check for links and trigger save func
bot.on("message", async (message) => {
    let channel = await message.channel.fetch();
    if (!BLOCKED.includes(channel.name)) {
        let links = message.content.match(/\bhttps?:\/\/\S+/gi) || null;
        let validatedLinks = links.filter((link) => isURL(link));
        if (!Array.isArray(validatedLinks) || validatedLinks.length > 0) {
            let linksData = {
                user: message.author.username,
                links: validatedLinks,
                time: Date.now(),
                channel: channel.name,
            };
            saveLinks(linksData);
        }
    }
});
