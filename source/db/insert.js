const db = require("./connect.js");
const Link = require("../models/Link.js");

// Takes links object from main.js and saves it to db
async function insert(linksData) {
    linksData.links.map(async function (link, i) {
        try {
            let docsFound = await db.find({ selector: { link: link } });
            if (docsFound.docs.length == 0) {
                let linkDoc = new Link(linksData, i);
                let res = await db.insert(linkDoc);
                if (res.ok == true) {
                    console.log(`Link inserted: ${linkDoc.link}`);
                }
            } else {
                console.log("Link exists");
            }
        } catch (err) {
            console.error(err);
        }
    });
}

module.exports = insert;
