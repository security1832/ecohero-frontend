// src/screens/ChatScreen.jsx
import React, { useState, useEffect } from 'react';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000/ws/chat/');
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };
    setWs(socket);
    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (ws && message) {
      ws.send(JSON.stringify({ message }));
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">EcoHero Chat</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <p key={index} className="text-gray-800">{msg.message}</p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;