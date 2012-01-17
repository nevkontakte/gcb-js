var gcb = new function() {
	var self = this;

	var loadJQuery = function(callback){
		// Load jQuery from Google CDN
		var jqLoad = document.createElement("script");
		jqLoad.setAttribute("type","text/javascript");
		jqLoad.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
		document.head.appendChild(jqLoad);

		// Wait until jQuery is loaded. Check it every 200 ms.
		var timer = null;
		var wait = function() {
			var silence = true;
			try {
				if(jQuery != undefined) {
					silence = false;
					callback();
					return;
				}
			}
			catch(e){
				if(!silence) {
					throw e;
				}
			}
			timer = setTimeout(wait, 200);
		};

		timer = setTimeout(wait, 200);
	};

	this.init = function() {
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

		toolbar.appendTo(document.body);

		var view = $("<div class='view'><iframe class='viewport' src='http://example.com/'></iframe></div> ");
		view.css('margin-top', toolbar.height()+2+"px");
		view.height($(window).height()-toolbar.height()-2);
		$(window).resize(function(){
			view.height($(window).height()-toolbar.height()-2);
		});

		view.appendTo(document.body);

	};

	loadJQuery(this.init);
}