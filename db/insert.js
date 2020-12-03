const nano = require("nano")("http://admin:32u90a@localhost:5984");
const db = nano.db.use("links");
const sortLink = require("../sorter/sort.js");
const crawl = require("../crawler/crawl.js");
const Link = require("../models/Link.js");

// Takes links object from main.js and saves it to db
async function saveLinks(linksData) {
    let links = linksData.links;
    links.map(async function (link, i) {
        try {
            let found = await db.find({ selector: { url: link } });
            if (found.docs.length == 0) {
                let linkDoc = new Link(link, linksData, i);
                // let crawledLink = crawl(linkDoc);
                // let sortedLink = sortLink(crawledLink);
                let res = await db.insert(linkDoc);
            } else {
                console.log("Link is already in the database");
            }
        } catch (err) {
            console.error(err);
        }
    });
}

module.exports = saveLinks;
