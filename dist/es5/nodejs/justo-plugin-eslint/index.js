"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugin";


module.exports = (0, _justo.simple)({ ns: NS, name: "eslint" }, require("./lib/op").default);