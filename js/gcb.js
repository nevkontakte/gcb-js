var Gcb = (function(publish) {
    "use strict";

    publish.Form = can.Control({
        /**
         *
         * @param el HTMLObjectElement
         * @param event Event
         */
        'submit': function(el, event) {
            event.preventDefault();
            can.route.attr('url', this.element.find('input[name=url]').val())
        },
        'go/:url route': function(data) {
            this.element.find('input[name=url]').val(data['url'])
        }
    });

    publish.BackendManager = can.Control({
        'defaults': {
            'backend' : 'http://webcache.googleusercontent.com/search?q=cache%3Ahttp%3A%2F%2Fcache.nevkontakte.com%2Fproxy.html'
        }
    }, {

        /**
         * Redirect user to backend when URL is provided.
         * @param data Object
         */
        'go/:url route': function(data) {
            document.location.href = this.options.backend + can.route.url(data);
        }
    });

    publish.Bookmarklet = can.Control({
        init: function() {
            var bookmarklet = function() {
                var loader = document.createElement("script");
                loader.setAttribute("type", "text/javascript");
                loader.setAttribute("src", "http://cache.nevkontakte.com/bookmarklet.js");
                if(document.head != null) {
                    document.head.appendChild(loader);
                } else if(document.body != null) {
                    document.body.appendChild(loader);
                } else {
                    document.appendChild(loader);
                }
            };

            this.element.attr("href","javascript:void("+encodeURIComponent(bookmarklet.toString())+"())");
        }
    });

    publish.Navbar = can.Control({
        init: function(el) {
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
                    <input type="text" class="span5" placeholder="Enter web page URL" name="url">\
                    <button type="submit" class="btn">\
                    <i class="icon-long-arrow-right"></i>\
                    </button>\
                    </div>\
                </form>\
            <div class="nav-collapse collapse">\
                <ul class="nav nav-pills pull-right">\
                <li><a href="#!about"><i class="icon-info-sign"></i> About</a></li>\
                <li><a href="#!contact"><i class="icon-envelope"></i> Contact</a></li>\
                <li><a href="https://github.com/nevkontakte/gcb-js"><i class="icon-github"></i> GitHub</a></li>\
                </ul>\
                </div>\
            </div>').appendTo(el);
            new publish.Form($('.gcb-form', el));
        }
    });

    publish.Viewport = can.Control({
        init: function(el, options) {
            /**
             * @type {jQuery}
             */
            this.navbar = options.navbar;

            this.view = $('<iframe frameborder="0">');
            this.view.css('background', '#FFF');
            this.view.css('width', '100%');

            this.card = $('<div class="card">');
            this.element.append(this.card.append(this.view));
            this.element.addClass('container gcb-viewport');

            this.view.load(function(){
                var frame = this;
                $("a", frame.contentDocument).each(function(){
                    $(this).click(function(e){
                        e.preventDefault();
                        can.route.attr('url', this.href);
                        console.log(this.href);
                        return false;
                    });
                });
                alert('Done');

            });
        },

        'resize': function() {
            this.view.height(
                $(window).height()
                - this.element.offset().top
                - (this.card.outerHeight(true) - this.card.height())

            );
        },

        '{window} resize': function() {
            this.resize();
        },

        'go/:url route': function(data) {
            var query = "http://webcache.googleusercontent.com/search?q=" + encodeURIComponent("cache:" + data['url']);
            if(data['url'] == "") {
                query = "about:blank";
            }
            this.view.get(0).contentDocument.location.replace(query);
            
            var cd = this.view.get(0).contentDocument;
            $(cd).ready(function(){
                alert(cd.location.href);
            });
        }
    });

    publish.Navigator = can.Control({
        init: function(el) {
            $('#greetings').remove();
            $('body *').hide();

            var meta = [
                {'name':'viewport', 'content':'width=device-width, initial-scale=1.0'}
            ];

            var head = $('head');
            for(var i = 0; i < meta.length; i++) {
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