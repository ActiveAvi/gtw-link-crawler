function Link(link, linkMeta, i) {
    let linkObject = {
        _id: linkMeta.time + `${i}`,
        user: linkMeta.user,
        timePosted: linkMeta.time,
        url: link,
    };
    return linkObject;
}

module.exports = Link;
