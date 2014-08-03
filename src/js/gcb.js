var Gcb = (function (publish) {
    "use strict";

    publish.Form = can.Control({
        /**
         *
         * @param el HTMLObjectElement
         * @param event Event
         */
        'submit': function (el, event) {
            event.preventDefault();
            window.location.hash = can.route.param({'url': this.element.find('input[name=url]').val()});
        },
        'go/:url route': function (data) {
            this.element.find('input[name=url]').val(data['url'])
        }
    });

    publish.BackendManager = can.Control({
        'defaults': {
            'backend': [
                'http://webcache.googleusercontent.com/search?q=cache%3Ahttp%3A%2F%2Fcache.nevkontakte.com%2Fproxy.html'
            ]
        }
    }, {

        /**
         * Redirect user to backend when URL is provided.
         * @param data Object
         */
        'go/:url route': function (data) {
            var backend = this.options.backend[Math.floor(Math.random()*this.options.backend.length)];
            setTimeout(function () { // Trick to prevent "Request cancelled" problem in Chrome.
                window.location.replace(backend + can.route.url(data));
            }, 1)
        }
    });

    publish.Bookmarklet = can.Control({
        init: function () {
            var bookmarklet = function () {
                var loader = document.createElement("script");
                loader.setAttribute("type", "text/javascript");
                loader.setAttribute("src", "http://cache.nevkontakte.com/bookmarklet.js");
                if (document.body != null) {
                    document.body.appendChild(loader);
                } else {
                    document.appendChild(loader);
                }
            };

            this.element.attr("href", "javascript:void(" + encodeURIComponent(bookmarklet.toString()) + "())");
        }
    });

    /**
     * UserVoice.com widget controller.
     * UserVoice Javascript SDK developer documentation:
     * https://www.uservoice.com/o/javascript-sdk
     * @type {Gcb.UserVoice}
     */
    publish.UserVoice = can.Control({
        init: function () {
            // Include the UserVoice JavaScript SDK (only needed once on a page)
            (function () {
                var uv = document.createElement('script');
                uv.type = 'text/javascript';
                uv.async = true;
                uv.src = '//widget.uservoice.com/5qPiGp5jMVO57L4MPuGw.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(uv, s)
            })();

            var uv = window.UserVoice || [];
            uv.push(['set', {
                accent_color: '#448dd6',
                trigger_color: 'white',
                trigger_background_color: '#6aba2e',
                mode: 'contact'
            }]);

            // Make it public back
            window.UserVoice = uv;
        },
        showModal: function() {
            $('[data-contact-trigger]').each(function() {
                window.UserVoice.push(['show', {target: this}]);
            });
        },
        hideModal: function() {
            window.UserVoice.push(['hide']);
        },
        'route': function() {
            this.hideModal();
        },
        ':page route': function(data) {
            if (data['page'] == 'contact') {
                this.showModal();
            } else {
                this.hideModal();
            }
        }
    });

    publish.Modal = can.Control({
        defaults: {
            page: null,
            backdrop: 'static',
            show: false
        }
    }, {
        init: function(el) {
            el.modal(this.options);
        },
        showModal: function() {
            this.element.modal('show');
        },
        hideModal: function() {
            this.element.modal('hide');
        },
        'route': function() {
            this.hideModal();
        },
        ':page route': function(data) {
            if (data['page'] === this.options.page) {
                this.showModal();
            } else {
                this.hideModal();
            }
        }
    });

    publish.Navbar = can.Control({
        init: function (el) {
            el.attr('class', 'navbar navbar-static-top navbar-inverse');
            $('<div class="navbar-inner">\
                <div class="container">\
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                </a>\
                \
                <a class="brand" href="http://cache.nevkontakte.com/">Google Cache Browser</a>\
                <form class="gcb-form navbar-search pull-left">\
                    <div class="input-append">\
                    <input type="text" class="span4" placeholder="Enter web page URL" name="url">\
                    <button type="submit" class="btn">\
                    <i class="icon-long-arrow-right"></i>\
                    </button>\
                    </div>\
                </form>\
            <div class="nav-collapse collapse">\
                <ul class="nav nav-pills pull-right">\
                <li><a href="http://cache.nevkontakte.com/#!about"><i class="icon-info-sign"></i> About</a></li>\
                <li><a href="http://cache.nevkontakte.com/#!faq"><i class="icon-question-sign"></i> F.A.Q.</a></li>\
                <li><a href="http://cache.nevkontakte.com/#!contact" data-contact-trigger><i class="icon-envelope"></i> Contact</a></li>\
                <li><a href="https://github.com/nevkontakte/gcb-js"><i class="icon-github"></i> GitHub</a></li>\
                </ul>\
                </div>\
            </div>').appendTo(el);
            new publish.Form($('.gcb-form', el));
        }
    });

    /**
     * Helper controller which maintains appropriate "active" status of navigation menu.
     * @type {Gcb.Nav}
     */
    publish.Nav = can.Control({
        init: function(el) {
            this.entries = $('.nav li', el);
        },
        updateClass: function(page) {
            this.entries.removeClass('active');
            this.entries.filter('li:has(a[href$="#!' + page + '"])').addClass('active');
        },
        ':page route': function(data) {
            this.updateClass(data['page'])
        },
        'route': function() {
            this.updateClass('');
        }
    });

    publish.Viewport = can.Control({
        init: function (el, options) {
            /**
             * @type {jQuery}
             */
            this.navbar = options.navbar;
            this.initial = window.location.href.split(location.hash || "#")[0];

            this.foreignAlert = $('<div class="alert"><strong>Warning!</strong> You have leaved Google cache and currently viewing some other pages.</div>');
            this.foreignAlert.hide();

            this.view = $('<iframe style="border: none" src="' + this.initial + '">');
            this.view.css('background', '#FFF');
            this.view.css('width', '100%');

            this.view.load($.proxy(function () {
                try {
                    this.view.contents();
                    this.foreignAlert.is(':visible') && this.foreignAlert.slideUp({step: $.proxy(this.resize, this)});
                } catch (e) {
                    this.foreignAlert.is(':visible') || this.foreignAlert.slideDown({step: $.proxy(this.resize, this)});
                }
            }, this));

            this.card = $('<div class="card">');
            this.element.append(this.card.append(this.foreignAlert).append(this.view));
            this.element.addClass('container gcb-viewport');
        },

        'resize': function () {
            this.view.height(
                $(window).height()
                    - this.element.offset().top
                    - (this.card.outerHeight(true) - this.card.height())
                    - (this.foreignAlert.is(':visible') ? this.foreignAlert.outerHeight(true) : 0)
            );
        },

        /**
         * AJAX callback. Replaces current viewport contents with new one passed in data.
         * @param data HTML string of new page.
         * @param watch Set to false to disable witching links.
         */
        replaceContent: function (data, watch) {
            var frame = this.view.get(0);
            var doc = frame.contentDocument;

            // Workaround in case of accidental leaving Google cache context
            // To overcome same origin policy we need to reset iframe to about:blank
            // and retry accessing document.
            // TODO Test in other browsers
            if (doc == null) {
                this.view.attr('src', 'about:blank');
                setTimeout($.proxy(function () {
                    this.replaceContent(data)
                }, this), 0);
                return;
            }

            doc.open("text/html", doc.write(data));

            // Workaround: prevent horizontal scrollbar in iframe cased by Google cache banner.
            $(doc).find('div:first').css('margin', '0').css('padding', '0');

            if (watch !== false) {
                this.watchLinks();
            }
        },

        /**
         * Watch for content loading process and put GCB hook on all links which appear on the page.
         */
        watchLinks: function () {
            var doc = $(this.view.get(0).contentDocument);
            var self = this;
            doc.find('body').on('click', 'a', function () {
                setTimeout($.proxy(function(){
                    var frame = self.view.get(0);

                    if (typeof (window.frames[0].stop) === 'undefined') {
                        frame.contentDocument.execCommand('Stop');
                    } else {
                        frame.contentWindow.stop();
                    }

                    can.route.attr('url', this.href);
                }, this), 0);
                return false;
            });
        },

        errorPage: function(content) {
            return '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
                '<link href="http://cache.nevkontakte.com/assets/gcb-js.css" rel="stylesheet" type="text/css">' +
                '</head><body class="viewport">' +
                content +
                '</body></html>'
        },

        errorNotFound: function(url) {
            return this.errorPage(
                '<div class="hero-unit error">' +
                '<h1>Page is not cached <small>404 :-(</small></h1>' +
                '<p>No cached copy of page <a href="' + url + '" target="_blank">' + url + '</a> was found in Google\'s cache. You may try to open it directly to view recent version of the page.</p>' +
                '</div>'
            );
        },

        errorUnknown: function(url, error) {
            var report = {
                'url': url,
                'location': {
                    'href': document.location.href,
                    'hash': document.location.hash
                },
                'userAgent': window.navigator.userAgent,
                'readyState': error.readyState,
//                'responseText': error.responseText,
                'status': error.status,
                'statusText': error.statusText
            };

            report = LZString.compressToBase64(report.toSource());

            report = [].concat.apply([],
                report.split('').map(function(x,i){ return i%80 ? [] : report.slice(i,i+80) })
            ).join('\n');

            return this.errorPage(
                '<div class="hero-unit error">' +
                '<h1>Ooops, that\'s embarrassing <small>:-[</small></h1>' +
                '<p>Google Cache Browser failed to load cached version of page you requested. You may try to <a href="https://google.com/search?q=cache:' + encodeURIComponent(url) + '" target="_blank">open</a> it directly from Google\'s cache.</p>' +
                    '<p>Please, take a minute to submit us feedback to let us investigate the case quoting following code in your report: </p>' +
                    '<textarea class="input-block-level" rows="7"> ' + report + '</textarea>' +
                '</div>'
            );
        },

        loadError: function(url, error) {
            if (error.status === 404) {
                this.replaceContent(this.errorNotFound(url), false);
            } else {
                this.replaceContent(this.errorUnknown(url, error), false)
            }
        },

        '{window} resize': function () {
            this.resize();
        },

        'go/:url route': function (data) {
            var doc = this.view.get(0).contentDocument;
            if (data['url'] == "") {
                doc.location.replace(this.initial);
            }
            var query = "http://webcache.googleusercontent.com/search?q=" + encodeURIComponent("cache:" + data['url']);

            if (data['url'].match(/^https?:\/\/webcache\.googleusercontent\.com/)) {
                query = data['url'];
            }

            $.ajax(query, {
                "context": this,
                "success": this.replaceContent,
                "error": function(error) {this.loadError(data['url'], error)},
                "dataType": "html"
            });
        }
    });

    publish.Navigator = can.Control({
        init: function (el) {
            $('#greetings').remove();
            $('body *').hide();

            var meta = [
                {'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0'}
            ];

            var head = $('head');
            for (var i = 0; i < meta.length; i++) {
                var tag = $('<meta>');
                tag.attr(meta[i]);
                head.append(tag);
            }

            var navbar = new publish.Navbar($('<div>'));
            el.append(navbar.element);
            var viewport = new publish.Viewport($('<div>'), {navbar: navbar});
            el.append(viewport.element);
            viewport.resize();

            can.route.ready(true)
        }
    });

    return publish;
}(Gcb || {}));