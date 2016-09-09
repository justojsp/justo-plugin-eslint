"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default =





op;var _eslint = require("eslint");function op(params, console) {
  var opts, cli, rpt;


  if (params.length >= 1) {
    opts = Object.assign({}, params[0]);
  }

  if (!opts) opts = { src: [] };
  if (!opts.ext) opts.ext = [".js"];
  if (typeof opts.ext == "string") opts.ext = [opts.ext];
  if (typeof opts.src == "string") opts.src = [opts.src];
  if (!opts.src || opts.src.length === 0) throw new Error("src expected.");


  cli = new _eslint.CLIEngine({
    extensions: opts.ext });

  rpt = cli.executeOnFiles(opts.src);


  if (opts.output && (rpt.errorCount > 0 || rpt.warningCount > 0)) {
    console.log(cli.getFormatter()(rpt.results));
  }


  return rpt.errorCount;
}