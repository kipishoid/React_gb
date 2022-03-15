import { useState, useEffect, useRef } from "react";
import "../../App.sass";
import { ChatList } from "../ChatList/index";
import { MessageList } from "../MessageList/index";
import { Form } from "../Form/index";
import { useParams, Navigate } from "react-router";

export function Chat() {
  const { chatId } = useParams();
  const [messageList, setMessageList] = useState({
    0: [],
    1: [],
    2: [],
  });

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
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMessage],
    }));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === "user"
    ) {
      timeout = setTimeout(() => {
        sendMessage("Hello, i'm bot", "bot");
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <ChatList />
      <div className="App__content">
        <MessageList messages={messageList[chatId]} />
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}
