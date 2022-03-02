import { List, ListItem } from "@mui/material";

const chats = [
  { name: "chat1", id: "0" },
  { name: "chat2", id: "1" },
  { name: "chat3", id: "2" },
];

export const ChatList = () => (
  <List>
    {chats.map((chat) => (
      <ListItem key={chat.id}>{chat.name}</ListItem>
    ))}
  </List>
);
