import { List, ListItemButton } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const chats = [
  { name: "chat-1", id: "0" },
  { name: "chat-2", id: "1" },
  { name: "chat-3", id: "2" },
];

export const ChatList = () => (
  <>
    <List>
      {chats.map((chat) => (
        <ListItemButton component="a" href="#simple-list" key={chat.id}>
          <Link className="chat__link" to={`/chats/${chat.id}`}>
            {chat.name}
          </Link>
        </ListItemButton>
      ))}
    </List>
    <Outlet />
  </>
);
