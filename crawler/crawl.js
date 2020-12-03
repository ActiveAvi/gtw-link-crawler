const pageCrawler = require("./crawler.js");

async function crawl(link) {
    console.log(link);
    try {
        let crawled = await pageCrawler.queue([link.url]);
        console.log(crawled);
    } catch (err) {
        console.error(err);
    }
}

module.exports = crawl;
