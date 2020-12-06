function LinksList(linksData) {
    return {
        user: linksData.user,
        timePosted: Date.now(),
        links: linksData.links,
        channel: linksData.channel
    }
}

module.exports = LinksList