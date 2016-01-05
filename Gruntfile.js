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
      },
      texastribune: {
        files: {
          'css/texastribune.min.css': '_sass/texastribune/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      protosandbox: {
        files: {
          'css/protosandbox.min.css': '_sass/protosandbox/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      newtribune: {
        files: {
          'css/newtribune.min.css': '_sass/newtribune/app.scss'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      },
      styleguide: {
        files: {
          'css/styleguide.min.css': '_sass/styleguide/app.sass'
        },
        options: {
          compass: true,
          bundleExec: true,
          style: 'compressed'
        }
      }
    },
    bgShell: {
      jekyllBuild : {
        cmd: 'bundle exec jekyll build',
        bg: false
      },
      // `jekyllWatch` is not used, but here for reference
      jekyllWatch : {
        cmd: 'bundle exec jekyll build --watch',
        bg: true
      },
      jekyllDev : {
        cmd: "bundle exec jekyll serve --baseurl '' --watch",
        bg: true
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
      },
      texastribune: {
        files: '_sass/texastribune/*.s?ss',
        tasks: ['sass:texastribune']
      },
      protosandbox: {
        files: '_sass/protosandbox/*.s?ss',
        tasks: ['sass:protosandbox']
      },
      newtribune: {
        files: '_sass/newtribune/*.s?ss',
        tasks: ['sass:newtribune']
      },
      styleguide: {
        files: '_sass/styleguide/*.s?ss',
        tasks: ['sass:styleguide']
      },
      jekyll: {
        files: [
          '*.html',
          '_includes/*.html',
          '_layouts/*.html'
        ],
        // just get livereload to trigger
        tasks: []
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-bg-shell');

  grunt.registerTask('dev', ['sass', 'bgShell:jekyllDev', 'watch']);
  grunt.registerTask('build', ['sass', 'bgShell:jekyllBuild']);
  grunt.registerTask('default', ['build']);
};
