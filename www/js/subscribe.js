
var toggleSwitch_sub = document.getElementById("button-sub");

toggleSwitch_sub.addEventListener("click", function() {
    var topic_input_sub = document.getElementById("topic_input_sub").value;
    var msg_input_sub = document.getElementById("msg_input_sub").value;

    var topic_message_sub = new ROSLIB.Topic({
        ros : ros,
        name : topic_input_sub,
        messageType : msg_input_sub
        });


    topic_message_sub.subscribe(function(message) {
    console.log('Received message on ' + topic_message_sub.name + ': ' +  message.data);

    var a = document.getElementById('textArea');
    a.textContent = new Date() + ' : Received message on ' + topic_message_sub.name + ': ' + JSON.stringify(message);
    })
});
