require("dotenv").config();
const saveLinks = require("./db/save-links.js");
const Discord = require("discord.js");
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on("message", async (message) => {
    let links = message.content.match(/\bhttps?:\/\/\S+/gi) || null;
    if (links) {
        let linksToSave = {
            user: message.author.username,
            links: links,
            time: Date.now(),
        };
        await saveLinks(linksToSave);
    }
});
