module.exports = grunt => {
    'use strict';

    return {
        options: {
            spawn: false,
            livereload: true
        },
        styles: {
            files: Object.keys(grunt.sassFiles).map(key => grunt.sassFiles[key]),
            tasks: [
                'sass',
                'postcss'
            ]
        }
    }

};
