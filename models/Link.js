function Link(linksData, i) {
    let linkObject = {
        _id: linksData.time + `${i}`,
        user: linksData.user,
        timePosted: linksData.time,
        url: linksData.links[i],
        channel: linksData.channel,
    };
    return linkObject;
}

module.exports = Link;
