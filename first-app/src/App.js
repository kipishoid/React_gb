import { useState, useEffect } from "react";
import "./App.sass";
import { Message } from "./components/Message/index.js";
import { Form } from "./components/Form";

function App() {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (txt) => {
    const newMessage = {
      txt,
      author: "user",
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === "user") {
      const newMessage = {
        txt: "Hello, i'm bot",
        author: "bot",
      };
      setTimeout(() => {
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="App">
      <div className="App__content">
        {messageList.map((message) => (
          <Message txt={message.txt} author={message.author} />
        ))}
      </div>
      <Form onSubmit={sendMessage} name="Send"></Form>
    </div>
  );
}

export default App;
