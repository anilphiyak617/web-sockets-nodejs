import utils from "./utils.js";
const URL = "wss://web-socket-backend-service.onrender.com";
// USER-DATA
export const userData = {
  clientID: null,
  userName: "no-name",
};
// DOM elements Selection
const chatField = document
  .getElementById("input-message")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") utils.sendMessage(userData, socket);
  });

const sendButton = document
  .getElementById("send-button")
  .addEventListener("click", () => {
    utils.sendMessage(userData, socket);
  });

// Connection opened fired when connection to the websocket is open
const socket = new WebSocket(URL);
socket.addEventListener("open", (event) => {
  // console.log("connection opened -----  socket");
});

// **** main socket handling
socket.addEventListener("message", ({ data }) => {
  data = JSON.parse(data);
  // console.log(data);
  if (data.type === "client-id") {
    Object.assign(userData, { clientID: data.clientID });
    return;
  }

  // console.log("from server", data);
  const time = new Date(data.timeStamp).toLocaleTimeString();
  console.log(time);
  utils.createNewChat(data.text, true, data.userName, time);
});
