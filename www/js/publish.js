
var toggleSwitch_pub = document.getElementById("button-pub");

toggleSwitch_pub.addEventListener("click", function() {
    
    var topic_input_pub = document.getElementById("topic_input_pub").value;
    var msg_input_pub = document.getElementById("msg_input_pub").value;
    var data_input_pub = document.getElementById("data_pub").value;

    var topic_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_input_pub,
        messageType : msg_input_pub
        });

    var string = new ROSLIB.Message({
        data : data_input_pub
        });
    // while (true) {
    // var topic_message_pub = new ROSLIB.Topic({
    //     ros : ros,
    //     name : "/GC_command",
    //     messageType : "engy/msg_GC_command",
    //     });

    // var msg_twist_package = new ROSLIB.Message({
    //     linear_x: 0,
    //     linear_y: 0,
    //     linear_z: 0,
    //     angular_z:0,

    //     });
    // var msg_RC_sw = new ROSLIB.Message({
    //     vr_A: 0,
    //     vr_B: 0,
    //     sw_A: 0,
    //     sw_B:0,
    //     sw_C:0,
    //     sw_D:0

    //     });
    // var string = new ROSLIB.Message({
    //     Depth_setpoint: 0,
    //     lock_X: 0,
    //     lock_Y: 0,
    //     engy_twist:msg_twist_package,
    //     rc_sw:msg_RC_sw



    //     });
        
    // var topic_message_pub = new ROSLIB.Topic({
    //     ros : ros,
    //     name : "/voltage",
    //     messageType : "engy/msg_voltage",
    //     });

    // var string = new ROSLIB.Message({
    //     voltage: 0,
    //     water: 0,
    //     current: 0,
    //     });
        
        topic_message_pub.publish(string)
        console.log("publishing..." + JSON.stringify(string));
    
    //   }

});
