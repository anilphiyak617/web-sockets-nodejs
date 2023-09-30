import { createMessageBubble } from "./components/chatMessage.js";

export default (() => {
  function sendMessage(userData, socket) {
    const inputEle = document.getElementById("input-message"); // Define inputEle here

    // console.log(userData);
    const message = {
      type: "message",
      text: inputEle.value,
      id: userData.clientID,
      userName: userData.userName,
      timeStamp: Date.now(),
    };

    if (message.text === "") return;
    // sending message to the server
    socket.send(JSON.stringify(message));

    // resetting input values and focus
    const currentTime = new Date().toLocaleTimeString();
    createNewChat(message.text, false, "You", currentTime); // Pass both arguments
    inputEle.value = "";
    inputEle.focus();
  }

  const createNewChat = (text, isReceived, userName, messageTime = 0) => {
    const messageContainer = document.querySelector(".chat-messages");
    const newChat = createMessageBubble(userName, text, messageTime);
    if (isReceived) {
      newChat.className += " received-message";
    }

    // console.log(newChat.firstChild);
    messageContainer.appendChild(newChat);
  };

  function setUserData(args) {
    Object.assign(this, args);
  }

  return {
    sendMessage,
    createNewChat,
    setUserData,
  };
})();
