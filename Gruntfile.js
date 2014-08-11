module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            festival: {
                files: {
                    '_site/css/festival.css': 'festival/sass/app.scss'
                },
                options: {
                    compass: true,
                    bundleExec: true
                }
            },
            tribtalk: {
                files: {
                    '_site/css/tribtalk.css': 'tribtalk/sass/app.sass'
                },
                options: {
                    bundleExec: true
                }
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

    grunt.registerTask('dev', ['sass', 'watch']);
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build']);
};
