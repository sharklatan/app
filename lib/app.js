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
		url: 'http://app.ignition.fun/category.php?category=jailbreaks',
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


// Init/Create views
var view1 = app.views.create(’#view-1’, {
url: ‘/hem/’
});
var view2 = app.views.create(’#view-2’, {
url: ‘/nyheter/’
});
var view3 = app.views.create(’#view-3’, {
url: ‘/schema/’
});
var view4 = app.views.create(’#view-4’, {
url: ‘/lunch/’
});
var mainView = app.views.create(’.view-main’, {
url: ‘/mer/’,
domCache:true
});
