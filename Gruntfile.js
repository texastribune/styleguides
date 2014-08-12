module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            festival: {
                files: {
                    'css/festival.min.css': 'festival/sass/app.scss'
                },
                options: {
                    compass: true,
                    bundleExec: true
                }
            },
            tribtalk: {
                files: {
                    'css/tribtalk.min.css': 'tribtalk/sass/app.sass'
                },
                options: {
                    bundleExec: true
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            festival: {
                files: 'festival/sass/*.s?ss',
                tasks: ['sass:festival']
            },
            tribtalk: {
                files: 'tribtalk/sass/*.s?ss',
                tasks: ['sass:tribtalk']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('dev', ['sass', 'cssmin', 'watch']);
    grunt.registerTask('build', ['sass', 'cssmin']);
    grunt.registerTask('default', ['build']);
};
