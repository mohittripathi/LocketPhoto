$(document).ready(function(){     
        $("#camera").click(function(){        	
	        var appId = null,
	            appControlReplyCallback = null,
	            appControl = null;
	 
	        appId = 'tizen.camera'; 
	        appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/create_content", null, "image/jpeg", null);
	 
	        appControlReplyCallback =
	        {
	            onsuccess: function(data)
	            {
	                var picLink = "";

	                if ($.mobile.popup.active)
	                {
	                    $.mobile.popup.active.close();
	                }
	 
	                if (data.key === "http://tizen.org/appcontrol/data/selected")
	                {
	                    picLink = data.value[0];
	                    console.log("selected image := "+picLink);
	                }
	            },
	            onfailure: function()
	            {
	                //console.log('The launch application control failed');
	            }
	        };
	 
	        function onSuccess()
	        {
	            //console.log("launch application control succeed");
	        }
	 
	        function onError(err)
	        {
	            alert(err.message);
	        }
	 
	        tizen.application.launchAppControl(appControl, appId, onSuccess, onError, appControlReplyCallback);
});
        
        
    });