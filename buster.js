exports["Browser tests"] = {
    environment: "browser",
    libs: ["external/cull.js", "external/dome.js", "external/jquery.js", "external/creator.js"],
    sources: ["lib/*.js"],
    tests: ["test/*.js"],
    extensions: [require("buster-lint")],
    "buster-lint": require("./autolint")
};
