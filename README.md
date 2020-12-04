# Discord Link Collector
### Description
This discord bot is for finding and storing links posted to a discord server.

### Installation
#### Requirments
A couchdb installation, nodejs, and a discord bot token with these permissions **68608** (View Channels, Send & Read Msgs) added to your server.
#### Set-Up
1. Download the files to your working directory.
2. Create a .env file in the root directory (same dir as main.js)
3. Add your discord bot token and database url to your .env file:
```
TOKEN=YOUR.DISCORD.TOKEN
DBURL=http://your.pouchdb.installation.url:port
```
4. Now, to that same file, add the name of any discord text channels you'd like the bot to ignore, seperated by commas:
```
CHANNELS=channel1,channel2,channel3
```
5. Run `npm install` in your terminal from the root directory to install the dependencies. 
5. Finally, run `node main.js` in your terminal from the root directory to start the bot.
