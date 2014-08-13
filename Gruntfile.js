module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      festival: {
        files: {
          'css/festival.min.css': '_sass/festival/app.scss'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      tribtalk: {
        files: {
          'css/tribtalk.min.css': '_sass/tribtalk/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      festival: {
        files: '_sass/festival/*.s?ss',
        tasks: ['sass:festival']
      },
      tribtalk: {
        files: '_sass/tribtalk/*.s?ss',
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
