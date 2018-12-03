

var app = new Framework7({
	root: '#app',
	name: 'SharkLatan',
	id: 'com.sharklatan.app',
	theme: 'ios',
	routes: [{
		path: '/ota/',
		url: 'page.html',
	}, {
		path: '/apps/',
		url: 'apps.html',
	}, {
		path: '/appstore/',
		url: 'appstore.html',
	}, {
		path: '/tweakbox/',
		url: 'tweakbox.html',
	}, {
		path: '/tweaked/',
		url: 'tweaked.html',
	}, {
		path: '/games/',
		url: 'games.html',
	}, {
		path: '/store1/',
		url: 'store1.html',
	}, {
		path: '/store2/',
		url: 'store2.html',
	}, {
		path: '/ignition1/',
		url: 'ignition1.html',
	}, {
		path: '/ignition2/',
		url: 'ignition2.html',
	}, {
		path: '/ignition3/',
		url: 'ignition3.html',
	}, {
		path: '/ignition4/',
		url: 'ignition4.html',
	}, {
		path: '/ignition5/',
		url: 'ignition5.html',
	}, {
		path: '/ignition6/',
		url: 'ignition6.html',
	}, {
		path: '/ignition7/',
		url: 'ignition7.html',
	}, {
		path: '/ignition8/',
		url: 'ignition8.html',
	}, {
		path: '/ignition9/',
		url: 'ignition9.html',
	}, ]
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



