export function createMessageBubble(userName, messageContent, messageTime) {
  // Create a message container element
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-bubble");

  // Create the user information container
  const userInfoContainer = document.createElement("div");
  userInfoContainer.classList.add("user-info");

  // Create the user name element
  const userNameElement = document.createElement("span");
  userNameElement.classList.add("user-name");
  userNameElement.textContent = userName;

  // Create the message time element
  //   messageTime = messageTime.slice(0, -3);
  //   console.log(messageTime.substr(0, 4));
  messageTime = messageTime.substr(0, messageTime.length - 6) + " PM"; // Removes the last 3 characters

  const messageTimeElement = document.createElement("span");
  messageTimeElement.classList.add("message-time");
  messageTimeElement.textContent = messageTime;

  // Append the user name and message time to the user information container
  userInfoContainer.appendChild(userNameElement);
  userInfoContainer.appendChild(messageTimeElement);

  // Create the message content
  const messageContentElement = document.createElement("div");
  messageContentElement.classList.add("message-content");
  messageContentElement.textContent = messageContent;

  // Append the user information container and message content to the message container
  messageContainer.appendChild(userInfoContainer);
  messageContainer.appendChild(messageContentElement);

  return messageContainer;
}
