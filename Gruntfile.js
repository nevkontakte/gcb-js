/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    var gh_options = {
        user: 'Antisocial Bot',
        email: 'bot@cache.nevkontakte.com',
        push: process.env.TRAVIS_PULL_REQUEST != false,
        repo: 'git@github.com:nevkontakte/gcb-js.git'
    };

    if (process.env.TRAVIS_BUILD_NUMBER && process.env.TRAVIS_COMMIT_RANGE) {
        gh_options['message'] = 'Deploying commits ' + process.env.TRAVIS_COMMIT_RANGE + ' by Travis. Build ' + process.env.TRAVIS_BUILD_NUMBER + '.';
    }

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
                'src/js/html5.js',
                'src/js/jquery.js',
                'src/js/can.*.js',
                'src/js/bootstrap.js',
                'src/js/lz-string.js',
                'src/js/gcb.js',
                'src/js/backends.js',
                'src/js/metrika.js'
            ],
            'gcache_js': [
                '<banner:meta.banner>',
                'src/js/html5.js',
                'src/js/jquery.js',
                'src/js/can.*.js',
                'src/js/bootstrap.js',
                'src/js/lz-string.js',
                'src/js/gcb*.js',
                'src/js/metrika.js'
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
            },
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
        },
        'gh-pages': {
            options: gh_options,
            src: [
                'index.html',
                'proxy.html',
                'gcache.css',
                'gcache.js',
                'bookmarklet.js',
                'assets/*.js',
                'assets/*.css',
                '.nojekyll',
                'CNAME'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-gh-pages');

    // Default task.
    grunt.registerTask('debug', ['concat_sourcemap']);
    grunt.registerTask('production', ['jsmin-sourcemap', 'cssmin']);
    grunt.registerTask('deploy', ['production', 'gh-pages']);

};
