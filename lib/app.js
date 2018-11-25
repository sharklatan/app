

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
		path: '/ignition/',
		url: 'ignition.html',
	}, {
		path: '/ignition1/',
		url: 'ignition1.html',
	}, ]
});

var $$ = Dom7;


myApp.onPageInit('*', function(page) {
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

myApp.onPageReinit('*', function(page) {
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

app.preloader.show();

// Perform Ajax request
app.request.get('index.html', function (data) {
  // Hide preloader when Ajax request completed
  app.preloader.hide();
});

domCache:true



