module.exports = {
  "paths": [
    "test/**/*.js",
    "lib/**/*.js"
  ],
  "linterOptions": {
    indent: 2,
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
      "document"
    ]
  },
  "excludes": ["external"]
};
