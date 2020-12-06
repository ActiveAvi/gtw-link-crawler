require("dotenv").config({ path: "../../.env" });
const DBURL = process.env.DBURL;
const nano = require("nano")(DBURL);
const db = nano.db.use("links");

module.exports = db;
