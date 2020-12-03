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
    console.log("Current channel: " + channel.name);
    if (!BLOCKED.includes(channel.name)) {
        console.log("Channel acceptable");
        let links = message.content.match(/\bhttps?:\/\/\S+/gi) || null;
        let validatedLinks = links ? links.filter((link) => isURL(link)) : null;
        if (validatedLinks.length > 0) {
            console.log("Links valid, saving to database.");
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
