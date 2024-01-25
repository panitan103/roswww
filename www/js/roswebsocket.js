var toggleSwitch = document.getElementById("myToggle");
var ros;
// Add an event listener to handle the toggle state
toggleSwitch.addEventListener("change", function() {
    
    // Check if the toggle switch is checked (ON) or unchecked (OFF)
    if (toggleSwitch.checked) {
        console.log("Connectiong to ROS websocket")
        ros = new ROSLIB.Ros({
            url : 'ws://127.0.0.1:9090'
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
        statusLight.classList.remove("off");
        statusLight.classList.add("on");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Close ROS websocket";


    
    });
    
    ros.on('error', function(error) {
        // document.getElementById("status").innerHTML = "Error";
        console.log("Error");
        statusLight.classList.remove("on");
        statusLight.classList.add("off");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Connect to ROS websocket";
    });
    
    ros.on('close', function() {
        // document.getElementById("status").innerHTML = "Closed";
        console.log("Closed");
        statusLight.classList.remove("on");
        statusLight.classList.add("off");
        var connect_button = document.getElementById("connect_button");
        connect_button.innerHTML = "Connect to ROS websocket";
    });
});

