import "./App.css";
import { useEffect } from "react";
import io from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:4000");
  const sendMessage = () => {
    socket.emit("send_message", { message: "hello" });
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div className="app">
      <div>
        <input placeholder="Write a message" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
