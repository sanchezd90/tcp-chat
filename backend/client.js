import net from "node:net";
import dotenv from "dotenv";
import readline from "readline-sync";
import { saveMessage } from './utils/saveMessage.js'
dotenv.config();

const OPTIONS = {
  port: process.env.PORT,
  host: process.env.HOST,
};

const clientTCP = net.connect(OPTIONS);


const sendMessage = () => {
  const clientMessage = readline.question("Client: ");
  if (clientMessage !== "--close") {
      clientTCP.write(clientMessage);
      saveMessage(clientMessage,process.argv[2])
    }else {
      clientTCP.end();
  }
};

clientTCP.on("connect", () => {
  console.log("Connection successful.");
  sendMessage();
});

clientTCP.on("data", (serverData) => {
  const serverMessage = serverData.toString();
  console.log("Server: " + serverMessage);
  sendMessage();
});
