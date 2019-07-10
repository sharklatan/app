function installApp() {

	var ua = window.navigator.userAgent.toLowerCase();
	var device;
    if (ua.indexOf('iphone') > -1) {
        device = 'iPhone';
    }
    if (ua.indexOf('ipad') > -1) {
        device = 'iPad';
    }
    if (ua.indexOf('ipod') > -1) {
        device = 'iPod';
    }

    if( device =='iPhone' || device =='iPad' || device =='iPod') {
    	//alert('iDevice');
    	var isSafari = getBrowser();
        if(isSafari==true) {
        	//alert('iDevice Safari');
          location.replace("http://findmyjailbreak.com/install/FindJailbreakS.mobileconfig");
        } else {
        	//alert('iDevice not Safari');
        	//location.replace("http://findmyjailbreak.com/mobile/FindMyJailbreakSigned.mobileconfig");
          alert('Please visit http://findmyjailbreak.com/ using safari browser of your '+ device);
        }

    } else {
    	location.href = 'http://findmyjailbreak.com';
    }
}