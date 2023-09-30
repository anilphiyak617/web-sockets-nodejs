import WebSocket from "ws";
import { MessageInterface } from "./types";
const { v4: uuidv4 } = require("uuid");
const PORT = 5001;
const server = new WebSocket.Server({ port: PORT });
console.log("Socket Listening on port 5001");

// collection of all active sockets
const clientsSet = new Set<WebSocket>();

// ** server connection
server.on("connection", (socket) => {
  console.log("-------------Connection-Opened---------------");

  const data: MessageInterface = {
    type: "client-id",
    clientID: getUniqueId(),
    timeStamp: new Date(),
  };

  socket.send(JSON.stringify(data));

  clientsSet.add(socket);

  socket.on("message", (message) => {
    const parsedMessage: MessageInterface = JSON.parse(message.toString());
    // sending message to all clients except himself
    clientsSet.forEach((client) => {
      if (client === socket) return;
      client.send(JSON.stringify(parsedMessage));
    });
  });

  socket.on("close", () => {
    "Connection closed";
  });
});

// generates unique id for each client
function getUniqueId(): string {
  let id: string = uuidv4(); //=> "V1StGXR8_Z5jdHi6B-myT"
  return id;
}
