function Link(linksData, i) {
    return linkObject = {
        _id: linksData.timePosted + `${i}`,
        user: linksData.user,
        timePosted: linksData.timePosted,
        link: linksData.links[i],
        channel: linksData.channel,
    };
}

module.exports = Link;
