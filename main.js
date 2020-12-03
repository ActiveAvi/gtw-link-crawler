require("dotenv").config();
const saveLinks = require("./db/insert.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const channelsAllowed = ["general"];

bot.login(TOKEN);

// On message, check for links and trigger save func
bot.on("message", async (message) => {
    let channel = await message.channel.fetch();
    if (channelsAllowed.includes(channel.name)) {
        let links = message.content.match(/\bhttps?:\/\/\S+/gi) || null;
        if (links) {
            let linksToSave = {
                user: message.author.username,
                links: links,
                time: Date.now(),
            };
            saveLinks(linksToSave);
        }
    }
});
