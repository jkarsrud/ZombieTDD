var config = module.exports;

config['Integration tests'] = {
    env:'browser',
    libs:[ 'client_dependencies/**/jquery.js'],
    testLibs :[ 'test/integration/test-helper.js'],
    tests:[ 'test/integration/**/*-test.js' ],
    resources: [{ path: "app", backend: "http://localhost:3000/" }]
};