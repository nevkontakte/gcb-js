var gcb = new function () {
	var self = this;

	var loadJQuery = function (callback) {
		// Load jQuery from Google CDN
		var jqLoad = document.createElement("script");
		jqLoad.setAttribute("type", "text/javascript");
		jqLoad.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
		document.head.appendChild(jqLoad);

		// Wait until jQuery is loaded. Check it every 200 ms.
		var timer = null;
		var wait = function () {
			var silence = true;
			try {
				if (jQuery != undefined) {
					silence = false;
					callback();
					return;
				}
			}
			catch (e) {
				if (!silence) {
					throw e;
				}
			}
			timer = setTimeout(wait, 200);
		};

		timer = setTimeout(wait, 200);
	};

	this.go = function (url) {
		var query = "http://webcache.googleusercontent.com/search?q="+encodeURIComponent("cache:"+url);
		alert(query);
		$(".viewport").attr('src', query);
		$(".url input").val(url);
	}

	this.init = function () {
		$("div").hide();
		var toolbar = $("<div class='toolbar'></div>");

		var logo = $("<div class='logo'><p class='darkblue'><span class='google'>" +
				"<span class='blue'>G</span>" +
				"<span class='red'>o</span>" +
				"<span class='yellow'>o</span>" +
				"<span class='blue'>g</span>" +
				"<span class='green'>l</span>" +
				"<span class='red'>e</span>" +
				"</span>&#153; cache browser" +
				"</p></div>");
		logo.appendTo(toolbar);

		var urlBar = $("<div class='url'><input type='text' id='url'><div class='go'>&rarr;</div></div>");
		var go = $(".go", urlBar);
		var url = $("input", urlBar);
		urlBar.appendTo(toolbar);

		go.click(function(){
			self.go(url.val());
		});

		toolbar.appendTo(document.body);

		var view = $("<div class='view'><iframe class='viewport' src='http://example.com/'></iframe></div> ");
		view.css('margin-top', toolbar.height() + 2 + "px");

		var resizer = function () {
			// Resize iframe
			view.height($(window).height() - toolbar.outerHeight() - 2);

			// Resize url bar
			var width = toolbar.width();
			width -= logo.outerWidth(true);
			width -= urlBar.outerWidth(true) - urlBar.width();
			urlBar.width(width);

			// Resize url input
			width = urlBar.width();
			width -= go.outerWidth(true);
			width -= url.outerWidth(true) - url.width();
			url.width(width);
		};

		resizer();
		$(window).resize(resizer);

		view.appendTo(document.body);

	};

	loadJQuery(this.init);
}