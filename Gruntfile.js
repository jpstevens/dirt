module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*-spec.js']
      }
    },
    jshint: {
      lib: ['lib/**/*.js'],
      tests: ['test/**/*.js']
    },
    watch: {
      files: ['*.js', '<%= jshint.lib %>', '<%= jshint.tests %>'],
      tasks: ['test'],
    },
    clean: ['test/fixtures/test-dir/']
  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'mochaTest']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['lint', 'test']);

};
