import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/messages');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages: ', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="App">
      <div className="MessagesContainer">
        <h1>TCP Chat App</h1>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`MessageContainer ${message.user === 'Server' ? 'ServerMessage' : 'ClientMessage'}`}
          >
            <p className="User">{message.user}</p>
            <p className="Message">{message.message}</p>
            <p className="Date">{message.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
