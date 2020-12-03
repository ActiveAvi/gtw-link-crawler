const Crawler = require("crawler");

const pageCrawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        if (error) {
            console.error(error);
        } else {
            let $ = res.$;
            return $;
            console.log($(".entry").html());
        }
    },
});

module.exports = pageCrawler;
