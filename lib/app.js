

var app = new Framework7({
	root: '#app',
	name: 'SharkLatan',
	id: 'com.sharklatan.app',
	theme: 'ios',
  // App routes
  routes: routes,
});

var $$ = Dom7;



$$(window).on('load', function () {
	var formData = app.form.convertToData('#shark-theme');
	if (formData['switch'] == 'yes') {
		$$('body').removeClass('theme-dark');
	} else if (formData['switch'] == '') {
		$$('body').addClass('theme-dark');
	}
});
$$('#toggle-theme').on('click', function () {
	$$('body').toggleClass('theme-dark');
});

var mainView = app.views.create('.view-main');

app.onPageInit('*', function(page) {
	$$(page.container).find('script').each(function (el) {
	    if ($$(this).attr('src')) {
	        var s = document.createElement('script');
	        s.src = $$(this).attr('src');
	        $$('head').append(s);
	    } else {
	        eval($$(this).text());
	    }
	});
});

app.onPageReinit('*', function(page) {
	$$(page.container).find('script').each(function (el) {
	    if ($$(this).attr('src')) {
	        var s = document.createElement('script');
	        s.src = $$(this).attr('src');
	        $$('head').append(s);
	    } else {
	        eval($$(this).text());
	    }
	});
});

$$(document).on("page:init", ".page", function(e) {
	console.log(e);
	(adsbygoogle = window.adsbygoogle || []).push({});
});

var script = document.createElement('script');
script.async = "async";
script.src = "api/main-.js";
document.getElementsByTagName("head")[0].appendChild( script );

app.preloader.show();

// Perform Ajax request
app.request.get('*', function (data) {
  // Hide preloader when Ajax request completed
  app.preloader.hide();
});

domCache:true



