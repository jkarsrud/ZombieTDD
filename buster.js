var config = module.exports;

config['Server tests'] = {
    env:'node',
    tests:[
        'test/shared/**/*_test.js'
    ]
};

config['Browser tests'] = {
    env:'browser',
    libs:[
        'client_dependencies/**/*.js'
    ],
    sources:[
        'lib/shared/**/*.js',
        'lib/client/**/*.js'
    ],
    tests:[
        'test/shared/**/*_test.js',
        'test/client/**/*_test.js'
    ]
};