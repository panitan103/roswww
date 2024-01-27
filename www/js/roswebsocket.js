var toggleSwitch = document.getElementById("myToggle");
var ros;
// Add an event listener to handle the toggle state
toggleSwitch.addEventListener("change", function() {

    
    // Check if the toggle switch is checked (ON) or unchecked (OFF)
    if (toggleSwitch.checked) {
        var websocket_ip = document.getElementById("websocket_ip").value;

        console.log("Connectiong to ROS websocket")
        ros = new ROSLIB.Ros({
            url : websocket_ip
        });
        
        
        // Perform actions when the switch is ON
    } else {
        console.log("Closing ROS websocket");
        ros.close()
        // Perform actions when the switch is OFF
    }

    ros.on('connection', function() {
        // document.getElementById("status").innerHTML = "Connected";
        console.log("Connected");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Close ROS websocket";

        var websocket_status = document.getElementById("websocket_status");
        websocket_status.innerHTML = "ONLINE";
        websocket_status.style.color="green";


    
    });
    
    ros.on('error', function(error) {
        // document.getElementById("status").innerHTML = "Error";
        console.log("Error");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Connect to ROS websocket";

        var websocket_status = document.getElementById("websocket_status");
        websocket_status.innerHTML = "OFFLINE";
        websocket_status.style.color="red";

    });
    
    ros.on('close', function() {
        // document.getElementById("status").innerHTML = "Closed";
        console.log("Closed");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Connect to ROS websocket";

        var websocket_status = document.getElementById("websocket_status");
        websocket_status.innerHTML = "OFFLINE";
        websocket_status.style.color="red";
    });
});

