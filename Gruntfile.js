module.exports = grunt => {
    'use strict';

    var config;

    // Timing for tasks
    // Require it at the top and pass in the grunt instance
    require('time-grunt')(grunt, (stats, done) => {
        // We can log the stats E.g. uploadReport(stats);

        // be sure to let grunt know when to exit
        done();
    });

    // Configuration object literal for load-grunt-confg
    // more info @ http://ericnish.io/blog/how-to-neatly-separate-grunt-files/
    config = {
        // Use jit-grunt instead of the default load-grunt-tasks
        jitGrunt: true,
        // load-grunt-config allows you to define variables in the data object
        // which you can later access by using the <%= foo %> notation.
        data: {
            // Note that you can reference package.json with <%= package %> out of the box.
        }
    };

    // Read destination and source paths for sass files
    grunt.sassFiles = grunt.file.readYAML('sassfiles.yaml');

    // Load configs from files
    require('load-grunt-config')(grunt, config);
};
