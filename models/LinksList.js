function LinkList(links) {
    let linksList = {
        user: links.user,
        links: links.links,
        time: Date.now(),
        channel: links.channel,
    };
    return linksList;
}

module.exports = LinkList;