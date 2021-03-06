module.exports = function(grunt) {
  
  ////////////////////////////////////////////////////
  // grunt and plugin configuration
  ////////////////////////////////////////////////////
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: { separator: ';' },
      
      js: {
        src: ['js/perfmatters.js'],
        dest: 'dist/js/perfmatters.js'
      } 
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        mangle: false
      },
      js: {
        files: {
          'dist/js/perfmatters.min.js': ['dist/js/perfmatters.js']
        }
      }
    },

    cssmin: {
      target: {
        files: { 'dist/css/style.min.css': ['css/style.css'] }
      }
    },
  });
  
  ////////////////////////////////////////////////////
  // Load all necessary grunt plugins
  ////////////////////////////////////////////////////

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('build', [
    'concat',
    'uglify',
    'cssmin'
  ]);
  
};