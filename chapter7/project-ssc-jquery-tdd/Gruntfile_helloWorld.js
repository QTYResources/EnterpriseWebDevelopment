// Generated by CoffeeScript 1.6.1

module.exports = function(grunt) {
  "use strict";  grunt.registerTask("hello", "say hello", function() {
    return grunt.log.writeln("Hello from grunt");
  });
  return grunt.registerTask('default', 'hello');
};
