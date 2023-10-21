import net from 'node:net'
import dotenv from "dotenv"
import readline from 'readline-sync'
import { saveMessage } from './utils/saveMessage.js'
dotenv.config()

const port = process.env.PORT || 3000
const serverTCP = net.createServer();

const sendMessage = (client) => {
    const serverMessage = readline.question("Server: ");
    client.write(serverMessage);
    saveMessage(serverMessage,"Server")
}

serverTCP.on("connection",(socket)=>{
    socket.on("data", (clientData)=>{
        const clientMessage = clientData.toString();
        console.log("Client: " + clientMessage);
        sendMessage(socket)       
    })
    socket.on("close", ()=>{
        console.log("Connection closed");
    })
    socket.on("error", ()=>{        
        console.log("Client error");
    })
})

serverTCP.listen(port, ()=>{
    console.log("Server is running on port: "+ port);
})