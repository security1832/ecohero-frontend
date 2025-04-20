import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { io } from "socket.io-client";
import { socket } from "../utils/socket";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState("global");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { room, text: input, user: "EcoUser", time: new Date().toLocaleTimeString() };
      socket.emit("message", message);
      setMessages((prev) => [...prev, message]);
      setInput("");
    }
  };

  const changeRoom = (newRoom) => {
    socket.emit("leave", room);
    socket.emit("join", newRoom);
    setRoom(newRoom);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Eco Chat
        </h2>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => changeRoom("global")}
            className={`px-4 py-2 rounded ${room === "global" ? "bg-green-600 text-white" : "bg-gray-300"}`}
          >
            Global
          </button>
          <button
            onClick={() => changeRoom("eco-warriors")}
            className={`px-4 py-2 rounded ${room === "eco-warriors" ? "bg-green-600 text-white" : "bg-gray-300"}`}
          >
            Eco Warriors
          </button>
        </div>
        <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg h-96 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-bubble mb-2 ${msg.user === "EcoUser" ? "bg-green-100 dark:bg-green-700 ml-auto" : "bg-gray-100 dark:bg-gray-700"}`}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {msg.user} at {msg.time}
              </p>
              <p className="dark:text-white">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 rounded-l-lg border dark:bg-gray-800 dark:text-white"
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;