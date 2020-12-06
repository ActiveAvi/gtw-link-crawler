const fetchHtml = require("../fetch/fetch-html");

function Link({ timePosted, user, links, channel }, i) {
    return linkObject = {
        _id: timePosted + `${i}`,
        user: user,
        timePosted: timePosted,
        link: links[i],
        channel: channel,
        html: fetchHtml,
    };
}

module.exports = Link;