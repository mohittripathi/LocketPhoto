var startTime;
var checkTime;

//Initialize function
var init = function() {
    // TODO:: Do your initialization job
    console.log("init() called");

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName == "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (error) {
                console.error("getCurrentApplication(): " + error.message);
            }
        }
    });
};
// window.onload can work without <body onload="">
window.onload = init;

/*function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}
*/

function momo() {


    $('#slideit').css('background-image', 'url(image1.png)');
    $('#x').css('background-image', $('#y').css('background-image'));

}

$(document).ready(function() {
    $("#camera").click(function() {
        var appId = null,
            appControlReplyCallback = null,
            appControl = null;

        appId = 'tizen.camera';
        appControl = new tizen.ApplicationControl("http://tizen.org/appcontrol/operation/create_content", null, "image/jpeg", null);

        appControlReplyCallback = {
            onsuccess: function(data) {
                var picLink = "";

                if ($.mobile.popup.active) {
                    $.mobile.popup.active.close();
                }

                if (data.key === "http://tizen.org/appcontrol/data/selected") {
                    picLink = data.value[0];
                    console.log("selected image := " + picLink);
                }
            },
            onfailure: function() {
                //console.log('The launch application control failed');
            }
        };

        function onSuccess() {
        	 	
            //console.log("launch application control succeed");
        }

        function onError(err) {
            alert(err.message);
        }

        tizen.application.launchAppControl(appControl, appId, onSuccess, onError, appControlReplyCallback);
    });


    $("#mohitku").click(function() {
        window.open("index11.html");
    });

    document.getElementById('im1').addEventListener("click", function() {
        try {
            var appControl = new tizen.ApplicationControl(
                "http://tizen.org/appcontrol/operation/pick",
                null,
                "image/*",
                null, [new tizen.ApplicationControlData("http://tizen.org/appcontrol/data/selection_mode", ["single"])]);

            var appControlReplyCallback = {
                onsuccess: function(reply) {
                    var path = reply[1].value[0];
                    path = "file://" + path;

                    document.getElementById('im1').setAttribute("src", path);

                    sessionStorage.setItem("mohit", path); //saves to the database, key/value
                },
                onfailure: function() {
                    console.log("The launch application control failed");
                }
            };

            tizen.application.launchAppControl(
                appControl,
                null,
                function() {
                    console.log("launch application control succeed");
                },
                function(e) {
                    console.log("launch application control failed. reason: " + e.message);
                },
                appControlReplyCallback
            );
        } catch (e) {
            alert("Error " + e.name + " : " + e.message);
        }

    });

    //************************************************************************


    document.getElementById('im2').addEventListener("click", function() {
        try {
            var appControl = new tizen.ApplicationControl(
                "http://tizen.org/appcontrol/operation/pick",
                null,
                "image/*",
                null, [new tizen.ApplicationControlData("http://tizen.org/appcontrol/data/selection_mode", ["single"])]);

            var appControlReplyCallback = {
                onsuccess: function(reply) {
                    var path = reply[1].value[0];
                    path = "file://" + path;

                    document.getElementById('im2').setAttribute("src", path);
                },
                onfailure: function() {
                    console.log("The launch application control failed");
                }
            };

            tizen.application.launchAppControl(
                appControl,
                null,
                function() {
                    console.log("launch application control succeed");
                },
                function(e) {
                    console.log("launch application control failed. reason: " + e.message);
                },
                appControlReplyCallback
            );
        } catch (e) {
            alert("Error " + e.name + " : " + e.message);
        }
    });

    $("#im3").click(function() {

        window.open("frmcenter.html");

    });
});

//************************************************************