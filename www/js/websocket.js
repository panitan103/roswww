// Create WebSocket connection.

let socket = null
function openWebSocket(input_socket,operation_function) {
    socket = input_socket
    // Wait for the WebSocket connection to open
    socket.addEventListener('open', () => {
        console.log('WebSocket connection opened');
        operation_function(socket)
    });

    // Example: Listen for the WebSocket connection to close
    socket.addEventListener('close', (event) => {
        console.log('WebSocket connection closed:', event);


    });

    // Example: Listen for errors
    socket.addEventListener('error', (event) => {
        console.error('WebSocket error:', event);
    });

    socket.addEventListener('message', (event) => {
        const message = event.data;

        try {
            // Parse the JSON message into a JavaScript object
            const messageObject = JSON.parse(message);
            console.log('Received message as object:', messageObject);
            return messageObject;
        } catch (error) {
            console.error('Error decoding JSON:', error);
        }
    });
    
}
function subscribe(input_socket){
    socket_sub = input_socket
    const subscribe_message = {
        "op": "subscribe",
        "topic": "/chatter",
        "type": "std_msgs/String" 
    }
    socket_sub.send(JSON.stringify(subscribe_message))

}
function publish(input_socket){
    socket_pub = input_socket
    const subscribe_message = {
        "op": "subscribe",
        "topic": "/chatter",
        "type": "std_msgs/String" 
    }
    socket_pub.send(JSON.stringify(subscribe_message))

}

function closeWebSocket(input_socket) {
    socket = input_socket
    
    if (socket) {
        socket.close();
        socket = null;

        
    }
    
}



