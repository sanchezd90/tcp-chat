import { readFileSync, writeFileSync } from 'node:fs'
import { randomUUID } from "node:crypto";
import dotenv from "dotenv"
dotenv.config()
const filePath = process.env.PATH_DB_FILE

export const saveMessage = (message,user) => {
    const jsonData = readFileSync(filePath);
    const messages = JSON.parse(jsonData);    
    const newMessage = {
        id: randomUUID(),
        user,
        message,
        date: new Date().toLocaleDateString(),
    }
    const newMessages = [...messages, newMessage];
    const jsonMessages = JSON.stringify(newMessages);
    writeFileSync(filePath,jsonMessages);
}