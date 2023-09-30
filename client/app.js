const socket = new WebSocket('ws://localhost:5001')

const createChatAndAppend = (text,isRecieved) => {
  // console.log("Received message : ", message)
  const messageContainer = document.querySelector(".chat-messages");
  const receivedChat = document.createElement("div");
    receivedChat.className = "message-bubble";
    if (isRecieved === true) { 
        receivedChat.className += " received-message";
    }
    receivedChat.innerText = text;
    messageContainer.appendChild(receivedChat);
}


socket.addEventListener('message', (message) => { 
    createChatAndAppend(message.data,true)
})

// Connection opened fired when connection to the websocket is open
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});

const inputEle = document.getElementById("input-message");
const sendMessage = () => {
    const message = {
        type: "message",
        text: inputEle.value,
        // id: clientID,
        date: Date.now(),
    };
    
    if (message.text === "") return;
    // sending messge to the server
    socket.send(JSON.stringify(message))
    // ressetting input values and focus
    createChatAndAppend(message.text)
    inputEle.value = ""
    inputEle.focus();
}

const chatField = document.getElementById('input-message').addEventListener('keydown', (e) => { 
    if (e.key === 'Enter') sendMessage();
})

const sendButton = document.getElementsByClassName('send-button')[0].addEventListener('click', sendMessage)
