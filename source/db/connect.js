const path = require("path");
require("dotenv").config({ path: path.join(__dirname, '.env') });
const DBURL = process.env.DBURL;
const nano = require("nano")(DBURL);
const db = nano.db.use("links");

module.exports = db;
