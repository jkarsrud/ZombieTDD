var config = module.exports;

config["Browser tests"] = {
    env: "browser",
    sources: [
        "client_dependencies/*.js",
        "lib/*.js",
        "test/test_helpers.js"
    ],
    tests: [
        "test/*_test.js"
    ]
};