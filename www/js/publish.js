
var toggleSwitch_pub = document.getElementById("button-pub");

toggleSwitch_pub.addEventListener("click", function() {
    
    var topic_input_pub = document.getElementById("topic_input_pub").value;
    var msg_input_pub = document.getElementById("msg_input_pub").value;

    var data_pub = document.getElementById("data_pub").value;

        
    var topic_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_input_pub,
        messageType : msg_input_pub,
        });

    var string = new ROSLIB.Message({
        data: data_pub,
        });
        
        topic_message_pub.publish(string)
        console.log("publishing..." + JSON.stringify(string));
    

});
