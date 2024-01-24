
var GC_command_button_pub = document.getElementById("GC_command_button_pub");

GC_command_button_pub.addEventListener("click", function() {
    
    var topic_GC_command_input_pub = document.getElementById("topic_GC_command_input_pub").value;
    var msg_GC_command_input_pub = document.getElementById("msg_GC_command_input_pub").value;

    var data_GC_command_pub_Depth_setpoint = document.getElementById("data_GC_command_pub_Depth_setpoint").value;
    var data_GC_command_pub_lock_X = document.getElementById("data_GC_command_pub_lock_X").value;
    var data_GC_command_pub_lock_Y = document.getElementById("data_GC_command_pub_lock_Y").value;

    var data_GC_command_pub_linear_x = document.getElementById("data_GC_command_pub_linear_x").value;
    var data_GC_command_pub_linear_y = document.getElementById("data_GC_command_pub_linear_y").value;
    var data_GC_command_pub_linear_z = document.getElementById("data_GC_command_pub_linear_z").value;
    var data_GC_command_pub_angular_z = document.getElementById("data_GC_command_pub_angular_z").value;

    var data_GC_command_pub_vr_A = document.getElementById("data_GC_command_pub_vr_A").value;
    var data_GC_command_pub_vr_B = document.getElementById("data_GC_command_pub_vr_B").value;
    var data_GC_command_pub_sw_A = document.getElementById("data_GC_command_pub_sw_A").value;
    var data_GC_command_pub_sw_B = document.getElementById("data_GC_command_pub_sw_B").value;
    var data_GC_command_pub_sw_C = document.getElementById("data_GC_command_pub_sw_C").value;
    var data_GC_command_pub_sw_D = document.getElementById("data_GC_command_pub_sw_D").value;

    data_GC_command_pub_Depth_setpoint=parseInt(data_GC_command_pub_Depth_setpoint)
    data_GC_command_pub_lock_X=parseInt(data_GC_command_pub_lock_X)
    data_GC_command_pub_lock_Y=parseInt(data_GC_command_pub_lock_Y)

    data_GC_command_pub_linear_x=parseInt(data_GC_command_pub_linear_x)
    data_GC_command_pub_linear_y=parseInt(data_GC_command_pub_linear_y)
    data_GC_command_pub_linear_z=parseInt(data_GC_command_pub_linear_z)
    data_GC_command_pub_angular_z=parseInt(data_GC_command_pub_angular_z)


    data_GC_command_pub_vr_A=parseInt(data_GC_command_pub_vr_A)
    data_GC_command_pub_vr_B=parseInt(data_GC_command_pub_vr_B)
    data_GC_command_pub_sw_A=parseInt(data_GC_command_pub_sw_A)
    data_GC_command_pub_sw_B=parseInt(data_GC_command_pub_sw_B)
    data_GC_command_pub_sw_C=parseInt(data_GC_command_pub_sw_C)
    data_GC_command_pub_sw_D=parseInt(data_GC_command_pub_sw_D)

    var topic_GC_command_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_GC_command_input_pub,
        messageType : msg_GC_command_input_pub,
        });

    var msg_twist_package = new ROSLIB.Message({
        linear_x: data_GC_command_pub_linear_x,
        linear_y: data_GC_command_pub_linear_y,
        linear_z: data_GC_command_pub_linear_z,
        angular_z: data_GC_command_pub_angular_z,

        });
    var msg_RC_sw = new ROSLIB.Message({
        vr_A: data_GC_command_pub_vr_A,
        vr_B: data_GC_command_pub_vr_B,
        sw_A: data_GC_command_pub_sw_A,
        sw_B: data_GC_command_pub_sw_B,
        sw_C: data_GC_command_pub_sw_C,
        sw_D: data_GC_command_pub_sw_D

        });
    var GC_command = new ROSLIB.Message({
        Depth_setpoint: data_GC_command_pub_Depth_setpoint,
        lock_X: data_GC_command_pub_lock_X,
        lock_Y: data_GC_command_pub_lock_Y,
        engy_twist:msg_twist_package,
        rc_sw:msg_RC_sw



        });
        topic_GC_command_message_pub.publish(GC_command)
        console.log("publishing..." + JSON.stringify(GC_command));
    
    //   }

});


var voltage_button_pub = document.getElementById("voltage_button_pub");

voltage_button_pub.addEventListener("click", function() {
    
    var topic_voltage_input_pub = document.getElementById("topic_voltage_input_pub").value;
    var msg_voltage_input_pub = document.getElementById("msg_voltage_input_pub").value;

    var data_voltage_voltage = document.getElementById("data_voltage_voltage").value;
    var data_voltage_water = document.getElementById("data_voltage_water").value;
    var data_voltage_current = document.getElementById("data_voltage_current").value;

    data_voltage_voltage=parseInt(data_voltage_voltage)
    data_voltage_water=parseInt(data_voltage_water)
    data_voltage_current=parseInt(data_voltage_current)

    var topic_voltage_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_voltage_input_pub,
        messageType : msg_voltage_input_pub,
        });

    var voltage_data = new ROSLIB.Message({
        voltage: data_voltage_voltage,
        water: data_voltage_water,
        current: data_voltage_current,




        });
        
        topic_voltage_message_pub.publish(voltage_data)
        console.log("publishing..." + JSON.stringify(voltage_data));
    
    //   }

});

var Target_point_button_pub = document.getElementById("Target_point_button_pub");

Target_point_button_pub.addEventListener("click", function() {
    
    var topic_Target_point_input_pub = document.getElementById("topic_Target_point_input_pub").value;
    var msg_Target_point_input_pub = document.getElementById("msg_Target_point_input_pub").value;

    var data_Target_linear_x = document.getElementById("data_Target_linear_x").value;
    var data_Target_linear_y = document.getElementById("data_Target_linear_y").value;
    var data_Target_angular_z = document.getElementById("data_Target_angular_z").value;

    data_Target_linear_x=parseInt(data_Target_linear_x)
    data_Target_linear_y=parseInt(data_Target_linear_y)
    data_Target_angular_z=parseInt(data_Target_angular_z)

    var topic_Target_point_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_Target_point_input_pub,
        messageType : msg_Target_point_input_pub,
        });

    var linear_data = new ROSLIB.Message({
        x: data_Target_linear_x,
        y: data_Target_linear_y,
        });

    var angular_data = new ROSLIB.Message({
        z: data_Target_angular_z,
        });
                
    var Target_point_data = new ROSLIB.Message({
        linear: linear_data,
        angular: angular_data,
        });
        
        topic_Target_point_data_message_pub.publish(Target_point_data)
        console.log("publishing..." + JSON.stringify(Target_point_data));
    
    //   }

});

var nav_command_button_pub = document.getElementById("nav_command_button_pub");

nav_command_button_pub.addEventListener("click", function() {
    
    var topic_nav_command_input_pub = document.getElementById("topic_nav_command_input_pub").value;
    var msg_nav_command_input_pub = document.getElementById("msg_nav_command_input_pub").value;

    var data_nav_command = document.getElementById("data_nav_command").value;

    data_nav_command=parseInt(data_nav_command)

    var topic_nav_command_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_nav_command_input_pub,
        messageType : msg_nav_command_input_pub,
        });
                
    var nav_command_data = new ROSLIB.Message({
        data: data_nav_command,
        });
        
        topic_nav_command_data_message_pub.publish(nav_command_data)
        console.log("publishing..." + JSON.stringify(nav_command_data));
    
    //   }

});

var robot_Depth_pub = document.getElementById("robot_Depth_pub");

robot_Depth_pub.addEventListener("click", function() {
    
    var topic_robot_Depth_input_pub = document.getElementById("topic_robot_Depth_input_pub").value;
    var msg_robot_Depth_input_pub = document.getElementById("msg_robot_Depth_input_pub").value;

    var data_robot_Depth = document.getElementById("data_robot_Depth").value;

    data_robot_Depth=parseInt(data_robot_Depth)

    var topic_robot_Depth_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_robot_Depth_input_pub,
        messageType : msg_robot_Depth_input_pub,
        });
                
    var robot_Depth_data = new ROSLIB.Message({
        data: data_robot_Depth,
        });
        
        topic_robot_Depth_data_message_pub.publish(robot_Depth_data)
        console.log("publishing..." + JSON.stringify(robot_Depth_data));
    
    //   }

});

var ahrs_pub = document.getElementById("ahrs_pub");

ahrs_pub.addEventListener("click", function() {
    
    var topic_ahrs_input_pub = document.getElementById("topic_ahrs_input_pub").value;
    var msg_ahrs_input_pub = document.getElementById("msg_ahrs_input_pub").value;

    var data_ahrs_x = document.getElementById("data_ahrs_x").value;
    var data_ahrs_y = document.getElementById("data_ahrs_y").value;
    var data_ahrs_z = document.getElementById("data_ahrs_z").value;


    data_ahrs_x=parseFloat(data_ahrs_x)
    data_ahrs_y=parseFloat(data_ahrs_y)
    data_ahrs_z=parseFloat(data_ahrs_z)

    var topic_ahrs_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_ahrs_input_pub,
        messageType : msg_ahrs_input_pub,
        });
                
    var ahrs_data = new ROSLIB.Message({
        x: data_ahrs_x,
        y: data_ahrs_y,
        z: data_ahrs_z,
        });
        
        topic_ahrs_data_message_pub.publish(ahrs_data)
        console.log("publishing..." + JSON.stringify(ahrs_data));
    
    //   }

});

var dvl_data_pub = document.getElementById("dvl_data_pub");

dvl_data_pub.addEventListener("click", function() {
    
    var topic_dvl_data_input_pub = document.getElementById("topic_dvl_data_input_pub").value;
    var msg_dvl_data_input_pub = document.getElementById("msg_dvl_data_input_pub").value;

    var dvl_data_velocity_x = document.getElementById("dvl_data_velocity_x").value;
    var dvl_data_velocity_y = document.getElementById("dvl_data_velocity_y").value;
    var dvl_data_velocity_z = document.getElementById("dvl_data_velocity_z").value;

    dvl_data_velocity_x=parseFloat(dvl_data_velocity_x)
    dvl_data_velocity_y=parseFloat(dvl_data_velocity_y)
    dvl_data_velocity_z=parseFloat(dvl_data_velocity_z)

    var topic_dvl_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_dvl_data_input_pub,
        messageType : msg_dvl_data_input_pub,
        });
                
    var dvl_data_velocity = new ROSLIB.Message({
        x: dvl_data_velocity_x,
        y: dvl_data_velocity_y,
        z: dvl_data_velocity_z,
        });
    var dvl_data = new ROSLIB.Message({
        velocity: dvl_data_velocity,

        });
                
        topic_dvl_data_message_pub.publish(dvl_data)
        console.log("publishing..." + JSON.stringify(dvl_data));
    

});

var dvl_dead_reckoging_data_pub = document.getElementById("dvl_dead_reckoging_data_pub");

dvl_dead_reckoging_data_pub.addEventListener("click", function() {
    
    var topic_dvl_dead_reckoging_data_input_pub = document.getElementById("topic_dvl_dead_reckoging_data_input_pub").value;
    var msg_dvl_dead_reckoging_data_input_pub = document.getElementById("msg_dvl_dead_reckoging_data_input_pub").value;

    var dvl_dead_reckoging_data_position_x = document.getElementById("dvl_dead_reckoging_data_position_x").value;
    var dvl_dead_reckoging_data_position_y = document.getElementById("dvl_dead_reckoging_data_position_y").value;
    var dvl_dead_reckoging_data_position_z = document.getElementById("dvl_dead_reckoging_data_position_z").value;

    var dvl_dead_reckoging_data_orientation_x = document.getElementById("dvl_dead_reckoging_data_orientation_x").value;
    var dvl_dead_reckoging_data_orientation_y = document.getElementById("dvl_dead_reckoging_data_orientation_y").value;
    var dvl_dead_reckoging_data_orientation_z = document.getElementById("dvl_dead_reckoging_data_orientation_z").value;

    dvl_dead_reckoging_data_position_x=parseFloat(dvl_dead_reckoging_data_position_x)
    dvl_dead_reckoging_data_position_y=parseFloat(dvl_dead_reckoging_data_position_y)
    dvl_dead_reckoging_data_position_z=parseFloat(dvl_dead_reckoging_data_position_z)

    dvl_dead_reckoging_data_orientation_x=parseFloat(dvl_dead_reckoging_data_orientation_x)
    dvl_dead_reckoging_data_orientation_y=parseFloat(dvl_dead_reckoging_data_orientation_y)
    dvl_dead_reckoging_data_orientation_z=parseFloat(dvl_dead_reckoging_data_orientation_z)


    var topic_dvl_dead_reckoging_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_dvl_dead_reckoging_data_input_pub,
        messageType : msg_dvl_dead_reckoging_data_input_pub,
        });
                
    var dvl_dead_reckoging_position_data = new ROSLIB.Message({
        x: dvl_dead_reckoging_data_position_x,
        y: dvl_dead_reckoging_data_position_y,
        z: dvl_dead_reckoging_data_position_z,
        });
    var dvl_dead_reckoging_orientation_data = new ROSLIB.Message({
        x: dvl_dead_reckoging_data_orientation_x,
        y: dvl_dead_reckoging_data_orientation_y,
        z: dvl_dead_reckoging_data_orientation_z,
        });
    var dvl_dead_reckoging_data = new ROSLIB.Message({
        position: dvl_dead_reckoging_position_data,
        orientation: dvl_dead_reckoging_orientation_data,

        });
                
        topic_dvl_dead_reckoging_data_message_pub.publish(dvl_dead_reckoging_data)
        console.log("publishing..." + JSON.stringify(dvl_dead_reckoging_data));
    

});

var TaskStatus_pub = document.getElementById("TaskStatus_pub");

TaskStatus_pub.addEventListener("click", function() {
    
    var topic_TaskStatus_input_pub = document.getElementById("topic_TaskStatus_input_pub").value;
    var msg_TaskStatus_input_pub = document.getElementById("msg_TaskStatus_input_pub").value;

    var data_TaskStatus = document.getElementById("data_TaskStatus").value;

    data_TaskStatus=parseInt(data_TaskStatus)

    var topic_TaskStatus_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_TaskStatus_input_pub,
        messageType : msg_TaskStatus_input_pub,
        });
                
    var TaskStatus_data = new ROSLIB.Message({
        data: data_TaskStatus,
        });
        
        topic_TaskStatus_message_pub.publish(TaskStatus_data)
        console.log("publishing..." + JSON.stringify(TaskStatus_data));
    
    //   }

});

var Xsens_data_pub = document.getElementById("Xsens_data_pub");

Xsens_data_pub.addEventListener("click", function() {
    
    var topic_Xsens_input_pub = document.getElementById("topic_Xsens_input_pub").value;
    var msg_Xsens_input_pub = document.getElementById("msg_Xsens_input_pub").value;

    var Xsens_data_orientation_roll = document.getElementById("Xsens_data_orientation_roll").value;
    var Xsens_data_orientation_pitch = document.getElementById("Xsens_data_orientation_pitch").value;
    var Xsens_data_orientation_yaw = document.getElementById("Xsens_data_orientation_yaw").value;

    Xsens_data_orientation_roll=parseFloat(Xsens_data_orientation_roll)
    Xsens_data_orientation_pitch=parseFloat(Xsens_data_orientation_pitch)
    Xsens_data_orientation_yaw=parseFloat(Xsens_data_orientation_yaw)


    var Xsens_data_message_pub = new ROSLIB.Topic({
        ros : ros,
        name : topic_Xsens_input_pub,
        messageType : msg_Xsens_input_pub,
        });

    var Xsens_data = new ROSLIB.Message({
        roll: Xsens_data_orientation_roll,
        pitch: Xsens_data_orientation_pitch,
        yaw: Xsens_data_orientation_yaw,


        });
                
        Xsens_data_message_pub.publish(Xsens_data)
        console.log("publishing..." + JSON.stringify(Xsens_data));
    

});
