
var toggleSwitch = document.getElementById("myToggle");
var toggle_status= "Off";
let web_socket=null;
let ros=null;
toggleSwitch.addEventListener("change", function() {
    
    
    // Check if the toggle switch is checked (ON) or unchecked (OFF)
    
    if (toggleSwitch.checked) {
        var ws=new ROSLIB.Ros({
            url : 'ws://localhost:9090'
        });
        ros=ros_websocket_conenct(ws)
        
        var topic_input = document.getElementById("topic_input").value;
        var msg_input = document.getElementById("msg_input").value;

        var topic_message = new ROSLIB.Topic({
            ros : ros,
            name : topic_input,
            messageType : msg_input
            });

        
        topic_message.subscribe(function(message) {
        console.log('Received message on ' + topic_message.name + ': ' +  message.data);
    
        var a = document.getElementById('textArea');
        a.textContent = new Date() + ' : Received message on ' + topic_message.name + ': ' + message.data;
        });
        // const uri = 'ws://localhost:9090/';
        // ws=new WebSocket(uri);

        // msg=openWebSocket(ws,subscribe)
        // console.log(msg.data)
    
        
        
        
    //     // Perform actions when the switch is ON
    } else {
        ros.close()
     
    //     //console.log("Toggle switch is OFF");
    //     toggle_status= "Off";
    //     ros.close
    //     // closeWebSocket(socket)
    //     // Perform actions when the switch is OFF
    }
    
});
