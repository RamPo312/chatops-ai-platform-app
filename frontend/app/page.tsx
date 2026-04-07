"use client";

import { useState } from "react";

type ChatMessage = {
  sender: "user" | "bot";
  text: string;
};

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Unable to reach backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          ChatOps AI Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Starter chatbot application for DevOps and platform engineering project
        </p>

        <div className="border rounded-xl p-4 h-[400px] overflow-y-auto bg-gray-50 mb-4">
          {messages.length === 0 ? (
            <p className="text-gray-500">Start the conversation...</p>
          ) : (
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-blue-600 text-white"
                      : "mr-auto bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="mr-auto bg-gray-200 text-gray-900 p-3 rounded-lg max-w-[80%]">
                  Thinking...
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-3 text-gray-900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
