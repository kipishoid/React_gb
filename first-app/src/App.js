import { useState, useEffect, useRef } from "react";
import "./App.sass";
import { Form } from "./components/Form";
import { ChatList } from "./components/ChatList";
import { MessageList } from "./components/MessageList";

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (txt) => {
    sendMessage(txt, "user");
  };
  const sendMessage = (txt, author) => {
    const newMessage = {
      txt,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeout;
    if (messageList[messageList.length - 1]?.author === "user") {
      timeout = setTimeout(() => {
        sendMessage("Hello, i'm bot", "bot");
      }, 1500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <div className="App">
      <ChatList />
      <div className="App__content">
        <MessageList messages={messageList} />
        <div ref={messagesEnd} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
