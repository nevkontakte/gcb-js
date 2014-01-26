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
        sources: {
            'main_js': [
                '<banner:meta.banner>',
                'src/js/jquery.js',
                'src/js/can.*.js',
                'src/js/bootstrap.js',
                'src/js/gcb.js',
                'src/js/backends.js'
            ],
            'gcache_js': [
                '<banner:meta.banner>',
                'src/js/jquery.js',
                'src/js/can.*.js',
                'src/js/bootstrap.js',
                'src/js/gcb*.js'
            ],
            'main_css': [
                'src/css/bootplus.css',
                'src/css/bootplus-responsive.css',
                'src/css/gcb.css'
            ]
        },
        concat_sourcemap: {
            options: {
                sourceRoot: '../'
            },
            main_js: {
                src: '<%= sources.main_js %>',
                dest : 'assets/<%= pkg.name %>.js'
            },
            gcache_js: {
                src: '<%= sources.gcache_js %>',
                dest : 'gcache.js'
            }
        },
        concat: {
            main_css: {
                src: '<%= sources.main_css %>',
                dest : 'assets/<%= pkg.name %>.css'
            }
        },
        jsmin: {
            main_js: {
                src: '<%= sources.main_js %>',
                dest: 'assets/<%= pkg.name %>.js',
                destMap: 'assets/<%= pkg.name %>.map.js',
                srcRoot: '../'
            },
            gcache_js: {
                src: '<%= sources.gcache_js %>',
                dest: 'gcache.js',
                destMap: 'assets/gcache.map.js',
                srcRoot: '../'
            }
        },
        'jsmin-sourcemap': { // We need this hack to be able to refer properties from templates
            main_js: '<%= jsmin.main_js %>',
            gcache_js: '<%= jsmin.gcache_js %>'
        },
        cssmin: {
            main_css: {
                src: '<%= sources.main_css %>',
                dest: 'assets/<%= pkg.name %>.css'
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js', '**/*.css'],
                tasks: ['debug'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('debug', ['concat_sourcemap', 'concat']);
    grunt.registerTask('production', ['jsmin-sourcemap', 'cssmin']);

};
