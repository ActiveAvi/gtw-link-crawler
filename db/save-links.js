const nano = require("nano")("http://admin:32u90a@localhost:5984");
const db = nano.db.use("links");
const sortLink = require("../sorter/sort.js");
const crawl = require("../crawler/crawl.js")

async function saveLinks(linksData) {
    let links = linksData.links;
    links.map(async function (link, i) {
        try {
            let dbSelector = { selector: { url: link }}
            let found = await db.find(dbSelector);
            if (found.docs.length == 0) {
                let linkObject = {
                    _id: linksData.time + `${i}`,
                    user: linksData.user,
                    timePosted: linksData.time,
                    url: link,
                };
                let crawledLink = crawl(linkObject);
                let sortedLink = sortLink(crawledLink);
                let res = await db.insert(linkObject);
            } else {
                console.log("Link is already in the database");
            }
        } catch (err) {
            console.error(err);
        }
    });
}

module.exports = saveLinks;
