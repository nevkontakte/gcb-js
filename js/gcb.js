(function() {
    "use strict";

    var GcbForm = can.Control({
        /**
         *
         * @param el HTMLObjectElement
         * @param event Event
         */
        'submit': function(el, event) {
            event.preventDefault();
            can.route.attr('url', this.element.find('input[name=url]').val())
        }
    });

    var GcbBackendManager = can.Control({
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

    var GcbBookmarklet = can.Control({
        init: function(el) {
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

    $(function() {
        new GcbBackendManager();
        new GcbForm("#gcb-form");
        new GcbBookmarklet('.gcb-bookmarklet')
    });
}());