import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  return messages.map((message) => (
    <div key={message.id} className="message">
      <Message txt={message.txt} author={message.author} />
    </div>
  ));
};
