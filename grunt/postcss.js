module.exports = grunt => {
    'use strict';

    var autoprefixer = require('autoprefixer')();

    return {
        options: {
            processors: [autoprefixer]
        },
        main: {
            src: Object.keys(grunt.sassFiles)
        }
    };

};
