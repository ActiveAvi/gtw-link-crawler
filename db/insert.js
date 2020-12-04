const db = require("./connect.js");
const sort = require("../sorter/sort.js");
const crawl = require("../crawler/crawl.js");
const Link = require("../models/Link.js");

// Takes links object from main.js and saves it to db
async function instert(linksData) {
    linksData.links.map(async function (link, i) {
        try {
            let docsFound = await db.find({ selector: { url: link } });
            if (docsFound.docs.length == 0) {
                let linkDoc = new Link(linksData, i);
                // Crawl the page and append the html to the linkDoc
                // let crawledLink = crawl(linkDoc);
                let res = await db.insert(linkDoc);
                if (res.ok == true) {
                    console.log(`Link inserted: ${linkDoc.url}`);
                }
            } else {
                console.log("Link is already in the database");
            }
        } catch (err) {
            console.error(err);
        }
    });
}

module.exports = instert;
