

var app = new Framework7({
	root: '#app',
	name: 'SharkLatan',
	id: 'com.sharklatan.app',
	theme: 'ios',
	routes: [{
		path: '/ota/',
		url: 'page.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/apps/',
		url: 'apps.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/appstore/',
		url: 'appstore.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
			
			function appTemplate(app) {
  return `
    <li class="${app.TBAppName}">
    <a href="${app.TBAppLink}~SharkApp~" class="item-link item-content external">
    <div class="item-media"><img src="${app.TBAppIcon}" class="app-icon" width="70"></div>
    <div class="item-inner">
    <div class="item-title-row">
<div class="item-title">${app.TBAppName}</div>
<div class="item-after"><span class="badge" style="font-size: 15px; background-color: #645cff;">GET</span></div>
</div>
<div class="item-subtitle">${app.TBAppVersion}</div>
<div class="item-text">${app.TBAppDescription}</div>
</div>
</a>
</li>
  `;
}

document.getElementById("ipas").innerHTML = `
  <h1 class="app-title">APPS (${appsData.length} results)</h1>
  ${appsData.map(appTemplate).join("")}
  <p class="footer">Signed apps ${appsData.length}. Check back soon for updates.</p>
`;
};
			
			
			
			
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/tweakbox/',
		url: 'tweakbox.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/tweaked/',
		url: 'tweaked.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/games/',
		url: 'games.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/store1/',
		url: 'store1.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/store2/',
		url: 'store2.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition1/',
		url: 'ignition1.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition2/',
		url: 'ignition2.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition3/',
		url: 'ignition3.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition4/',
		url: 'ignition4.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition5/',
		url: 'ignition5.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition6/',
		url: 'ignition6.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition7/',
		url: 'ignition7.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition8/',
		url: 'ignition8.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
	}, {
		path: '/ignition9/',
		url: 'ignition9.html',
		on: { 
		pageInit: function (event, page) {
                //Aquí la página se ha iniciado, es donde deberías agregar
                //el código de adsense.
		console.log();
		(adsbygoogle = window.adsbygoogle || []).push({});
	},
		pageBeforeRemove: function (event, page) { 
               //Aquí la página se ha CERRADO
	}
	}
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

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

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
	console.log();
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


