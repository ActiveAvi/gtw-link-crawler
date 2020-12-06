const fetch = require("node-fetch");

let fetchHtml = async function () {
    let link = this.link;
    console.log('Fetching: ' + link);
    try {
        let res = await fetch(link);
        res = await res.text();
        return res;
    } catch (err) {
        console.error(err);
    }
}

module.exports = fetchHtml;

