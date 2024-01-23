
function ros_websocket_conenct(ws){
    var ros = ws

    ros.on('connection', function() {
        // document.getElementById("status").innerHTML = "Connected";
        console.log("Connected");

    });

    ros.on('error', function(error) {
        // document.getElementById("status").innerHTML = "Error";
        console.log("Error");
    });

    ros.on('close', function() {
        // document.getElementById("status").innerHTML = "Closed";
        console.log("Closed");
    });
    return ros
}
