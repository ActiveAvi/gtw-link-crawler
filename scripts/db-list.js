const db = require('../db/connect.js');

db.list()
    .then(body => body.rows.forEach(doc => {
        console.log(doc)
    }))