//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const op = require("../../../dist/es5/nodejs/justo-plugin-eslint/lib/op").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";

  suite("Error handling", function() {
    test("op(opts) - without src", function() {
      op.must.raise("src expected.", [{}]);
    });

    test("op({src: []})", function() {
      op.must.raise("src expected.", [{src: []}]);
    });
  });

  test("op({src, output: false}) - valid file", function() {
    op([{
      src: path.join(DATA, "valid.js"),
      output: false
    }]).must.be.eq(0);
  });

  test("op({src, output: false}) - invalid file", function() {
    op([{
      src: path.join(DATA, "invalid.js"),
      output: false
    }]).must.be.eq(1);
  });

  test("op({src, output: false}) - dir", function() {
    op([{
      src: DATA,
      output: false
    }]).must.be.eq(2);
  });

  test("op({src: string[], output: false})", function() {
    op([{
      src: [path.join(DATA, "valid.js"), path.join(DATA, "invalid.js"), path.join(DATA, "invalid2.js")]
    }]).must.be.eq(2);
  });
})();
