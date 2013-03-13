module.exports = {
  "paths": [
    "test/**/*.js",
    "lib/**/*.js"
  ],
  "linterOptions": {
    indent: 2,
    "browser": true,
    "vars": true,
    "nomen": true,
    "sloppy": true,
    "plusplus": true,
    "predef": [
      "GLOBAL",
      "assert",
      "refute",
      "buster",
      "cull",
      "dome",
      "console",
      "jQuery",
      "document"
    ]
  },
  "excludes": ["external"]
};
