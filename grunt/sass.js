module.exports = grunt => {
    'use strict';

    return {
        all: {
            options: {
                // [ nested / expanded / compact / compressed ]
                outputStyle: 'expanded',
                sourceMap: false
            },
            files: grunt.sassFiles
        }
    };

};
