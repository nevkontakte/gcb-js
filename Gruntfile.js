/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },
        concat: {
            main_js: {
                src: ['<banner:meta.banner>', 'src/js/jquery.js', 'src/js/can.*.js', 'src/js/bootstrap.js', 'src/js/gcb.js'],
                dest : 'assets/<%= pkg.name %>.js'
            },
            gcache_js: {
                src: ['<banner:meta.banner>', 'src/js/jquery.js', 'src/js/can.*.js', 'src/js/bootstrap.js', 'src/js/gcb*.js'],
                dest : 'assets/gcb-browser.js'
            },
            main_css: {
                src: ['src/css/bootplus.css', 'src/css/bootplus-responsive.css', 'src/css/gcb.css'],
                dest : 'assets/<%= pkg.name %>.css'
            }
        },
        uglify: {
            main_js: {
                src: ['<%= concat.main_js.dest %>'],
                dest: 'assets/<%= pkg.name %>.min.js'
            },
            gcache_js: {
                src: ['<%= concat.gcache_js.dest %>'],
                dest: 'gcache.js'
            }
        },
        cssmin: {
            main_css: {
                src: ['<%= concat.main_css.dest %>'],
                dest: 'assets/<%= pkg.name %>.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
