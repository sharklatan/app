 $(document).ready(function() {
    var myStr = navigator.appVersion;
    var i = myStr.indexOf("OS");
    var j = myStr.indexOf("like");
    var versionStr = myStr.substring(i + 3, j);
    var versionNum = versionStr.split("_").join(".");
    var modifiedVersion = versionNum.replace(/ /g,'');
    var device;

    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('iphone') > -1) {
        device = 'iPhone';
    }
    if (ua.indexOf('ipad') > -1) {
        device = 'iPad';
    }
    if (ua.indexOf('ipod') > -1) {
        device = 'iPod';
    }

    $('#maduz').html(device);
    $('#iosversion').html(modifiedVersion);
     
    try {
        var serviceUrl = "https://findmyjailbreak.com/service/?version=" + modifiedVersion + "&iDevice=" +device;
        //alert("|"+serviceUrl+"|");
        $.ajax({
                url:serviceUrl,
                async:false,
                type:'GET',
                cache:false
        }).then(function(data) {
        	data = $.parseJSON(data)
        	var winToolName = data.WinToolName;
            	var macToolName = data.MacToolName;
            	var winToolUrl = data.WinToolUrl;
            	var macToolUrl = data.MacToolUrl;
            	var altToolName = data.AltToolName;
            	var altToolUrl = data.AltToolUrl;
            
            	if(winToolName==="-" && macToolName=="-"){
            		//No proper tools
            		$('#win').html(winToolName);
            		$('#mac').html(macToolName);
            		$('#description').html('No proper tools found for your <strong>'+ device + '</strong> running on <strong>iOS '+ modifiedVersion +'</strong>. Try jailbreak alternative tool for <a class="external" href="' + altToolUrl + '"> iOS '+ modifiedVersion + ' Jailbreak </a>' );
            		$('#alt').html(altToolName + "   <br />  <a class='external' href='" + altToolUrl + "'>" + altToolUrl + "</a>");
            	} else {
            		$('#win').html(winToolName + "   <br />  <a class='external' href='" + winToolUrl + "'>" + winToolUrl + "</a>");
            		$('#mac').html(macToolName + "   <br />  <a class='external' href='" + macToolUrl + "'>" + macToolUrl + "</a>");
            		$('#alternative_tool').hide();

            		$('#description').html('You can use <strong>' + winToolName + ' </strong> on your Windows PC or <strong>' 
                + macToolName + '</strong> on your Mac to jailbreak your ' + device + '. Find My Jailbreak recommondation is to use genuine tool downloaded from above links to jailbreak your ' + device );
            	}
            
        });
    } catch (ex) {
        alert(ex);
    }
    
    
});
