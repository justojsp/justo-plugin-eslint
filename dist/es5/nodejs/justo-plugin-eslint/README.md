# justo-plugin-eslint

[![NPM version](http://img.shields.io/npm/v/justo-plugin-eslint.svg)](https://www.npmjs.org/package/justo-plugin-eslint)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-eslint.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-eslint)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-eslint.svg)](https://david-dm.org/justojsp/justo-plugin-eslint)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-eslint/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-eslint#info=devDependencies)

Tasks for **ESLint**.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Use

```
const eslint = require("justo-plugin-eslint");
```

To run `eslint`, the task must be called as follows:

```
eslint(title, opts) : number
eslint(jsOpts, opts) : number
```

`opts`:

- `src` (string or string[]). Source files to parse.
- `output` (boolean):
  - `false`. Show nothing.
  - `true`. Show errors and warnings.

Example:

```
eslint("Best practices and grammar", {
  src: ["index.js", "lib/"],
  output: false
});
```
