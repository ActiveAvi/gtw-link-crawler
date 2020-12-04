function Link(linksData, i) {
    return linkObject = {
        _id: linksData.time + `${i}`,
        user: linksData.user,
        timePosted: linksData.time,
        link: linksData.links[i],
        channel: linksData.channel,
    };
}

module.exports = Link;
