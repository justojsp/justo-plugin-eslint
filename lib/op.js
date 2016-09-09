//imports
import {CLIEngine} from "eslint";

/**
 * Task operation.
 */
export default function op(params, console) {
  var opts, cli, rpt;

  //(1) arguments
  if (params.length >= 1) {
    opts = Object.assign({}, params[0]);
  }

  if (!opts) opts = {src: []};
  if (!opts.ext) opts.ext = [".js"];
  if (typeof(opts.ext) == "string") opts.ext = [opts.ext];
  if (typeof(opts.src) == "string") opts.src = [opts.src];
  if (!opts.src || opts.src.length === 0) throw new Error("src expected.");

  //(2) parse
  cli = new CLIEngine({
    extensions: opts.ext
  });
  rpt = cli.executeOnFiles(opts.src);

  //(3) display
  if (opts.output && (rpt.errorCount > 0 || rpt.warningCount > 0)) {
    console.log(cli.getFormatter()(rpt.results));
  }

  //(4) return
  return rpt.errorCount;
}
