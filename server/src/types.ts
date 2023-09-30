export interface MessageInterface {
  type: "private-message" | "client-id";
  clientID: string;
  textContent?: string;
  timeStamp: Date;
  userName?: string;
}
