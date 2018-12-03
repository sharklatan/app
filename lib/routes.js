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
     on: { 
           pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
console.log(e);
	(adsbygoogle = window.adsbygoogle || []).push({});
           },
          pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
          }
     }
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
	},
];