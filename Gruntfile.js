SASS_OPTIONS = {
    compass: true
};

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
            }
        },

        watch: {
            compass: {
                files: ['sass/*.{scss, sass}'],
                tasks: ['compass:dev']
            }
        },
    }),

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch', 'sass']);
};
