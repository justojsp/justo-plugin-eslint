//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin";

//api
module.exports = simple({ns: NS, name: "eslint"}, require("./lib/op").default);
