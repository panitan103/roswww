
var btn_GC_command_sub = document.getElementById("btn_GC_command_sub");

btn_GC_command_sub.addEventListener("click", function() {
    var topic_GC_command_input_sub = document.getElementById("topic_GC_command_input_sub").value;
    var msg_GC_command_input_sub = document.getElementById("msg_GC_command_input_sub").value;

    var topic_GC_command_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_GC_command_input_sub,
        messageType : msg_GC_command_input_sub
        });


        topic_GC_command_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_GC_command_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_GC_command');
    a.textContent = new Date() + ' : Received message on ' + topic_GC_command_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_voltage_sub = document.getElementById("btn_voltage_sub");

btn_voltage_sub.addEventListener("click", function() {
    var topic_voltage_input_sub = document.getElementById("topic_voltage_input_sub").value;
    var msg_voltage_input_sub = document.getElementById("msg_voltage_input_sub").value;

    var topic_voltage_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_voltage_input_sub,
        messageType : msg_voltage_input_sub
        });


        topic_voltage_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_voltage_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_voltage');
    a.textContent = new Date() + ' : Received message on ' + topic_voltage_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_Target_point_sub = document.getElementById("btn_Target_point_sub");

btn_Target_point_sub.addEventListener("click", function() {
    var topic_Target_point_input_sub = document.getElementById("topic_Target_point_input_sub").value;
    var msg_Target_point_input_sub = document.getElementById("msg_Target_point_input_sub").value;

    var topic_Target_point_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_Target_point_input_sub,
        messageType : msg_Target_point_input_sub
        });


        topic_Target_point_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_Target_point_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_Target_point');
    a.textContent = new Date() + ' : Received message on ' + topic_Target_point_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_nav_command_sub = document.getElementById("btn_nav_command_sub");

btn_nav_command_sub.addEventListener("click", function() {
    var topic_nav_command_input_sub = document.getElementById("topic_nav_command_input_sub").value;
    var msg_nav_command_input_sub = document.getElementById("msg_nav_command_input_sub").value;

    var topic_nav_command_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_nav_command_input_sub,
        messageType : msg_nav_command_input_sub
        });


        topic_nav_command_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_nav_command_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_nav_command');
    a.textContent = new Date() + ' : Received message on ' + topic_nav_command_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_robot_Depth_sub = document.getElementById("btn_robot_Depth_sub");

btn_robot_Depth_sub.addEventListener("click", function() {
    var topic_robot_Depth_input_sub = document.getElementById("topic_robot_Depth_input_sub").value;
    var msg_robot_Depth_input_sub = document.getElementById("msg_robot_Depth_input_sub").value;

    var topic_robot_Depth_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_robot_Depth_input_sub,
        messageType : msg_robot_Depth_input_sub
        });


        topic_robot_Depth_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_robot_Depth_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_robot_Depth');
    a.textContent = new Date() + ' : Received message on ' + topic_robot_Depth_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_ahrs_sub = document.getElementById("btn_ahrs_sub");

btn_ahrs_sub.addEventListener("click", function() {
    var topic_ahrs_input_sub = document.getElementById("topic_ahrs_input_sub").value;
    var msg_ahrs_input_sub = document.getElementById("msg_ahrs_input_sub").value;

    var topic_ahrs_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_ahrs_input_sub,
        messageType : msg_ahrs_input_sub
        });


        topic_ahrs_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_ahrs_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_ahrs');
    a.textContent = new Date() + ' : Received message on ' + topic_ahrs_message_sub.name + ': ' + JSON.stringify(message);
    })
});


var btn_dvl_data_sub = document.getElementById("btn_dvl_data_sub");

btn_dvl_data_sub.addEventListener("click", function() {
    var topic_dvl_data_input_sub = document.getElementById("topic_dvl_data_input_sub").value;
    var msg_dvl_data_input_sub = document.getElementById("msg_dvl_data_input_sub").value;

    var topic_dvl_data_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_dvl_data_input_sub,
        messageType : msg_dvl_data_input_sub
        });


        topic_dvl_data_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_dvl_data_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_dvl_data');
    a.textContent = new Date() + ' : Received message on ' + topic_dvl_data_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_dvl_dead_reckoging_data_sub = document.getElementById("btn_dvl_dead_reckoging_data_sub");

btn_dvl_dead_reckoging_data_sub.addEventListener("click", function() {
    var topic_dvl_dead_reckoging_data_input_sub = document.getElementById("topic_dvl_dead_reckoging_data_input_sub").value;
    var msg_dvl_dead_reckoging_data_input_sub = document.getElementById("msg_dvl_dead_reckoging_data_input_sub").value;

    var topic_dvl_dead_reckoging_data_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_dvl_dead_reckoging_data_input_sub,
        messageType : msg_dvl_dead_reckoging_data_input_sub
        });


        topic_dvl_dead_reckoging_data_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_dvl_dead_reckoging_data_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_dvl_dead_reckoging_data');
    a.textContent = new Date() + ' : Received message on ' + topic_dvl_dead_reckoging_data_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_TaskStatus_sub = document.getElementById("btn_TaskStatus_sub");

btn_TaskStatus_sub.addEventListener("click", function() {
    var topic_TaskStatus_input_sub = document.getElementById("topic_TaskStatus_input_sub").value;
    var msg_TaskStatus_input_sub = document.getElementById("msg_TaskStatus_input_sub").value;

    var topic_TaskStatus_data_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_TaskStatus_input_sub,
        messageType : msg_TaskStatus_input_sub
        });


        topic_TaskStatus_data_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_TaskStatus_data_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_TaskStatus');
    a.textContent = new Date() + ' : Received message on ' + topic_TaskStatus_data_message_sub.name + ': ' + JSON.stringify(message);
    })
});

var btn_Xsens_sub = document.getElementById("btn_Xsens_sub");

btn_Xsens_sub.addEventListener("click", function() {
    var topic_Xsens_input_sub = document.getElementById("topic_Xsens_input_sub").value;
    var msg_Xsens_input_sub = document.getElementById("msg_Xsens_input_sub").value;

    var topic_Xsens_data_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_Xsens_input_sub,
        messageType : msg_Xsens_input_sub
        });


        topic_Xsens_data_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_Xsens_data_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea_Xsens');
    a.textContent = new Date() + ' : Received message on ' + topic_Xsens_data_message_sub.name + ': ' + JSON.stringify(message);
    })
});