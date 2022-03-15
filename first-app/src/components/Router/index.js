import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";
import "./Router.sass";

const Home = () => <span> Home </span>;

export const Router = () => {
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <div className="Nav">
          <NavLink to="/" className="Nav_link">
            Home
          </NavLink>
          <NavLink to="/chats" className="Nav_link">
            Chats
          </NavLink>
          <NavLink to="/profile" className="link">
            Profile
          </NavLink>
        </div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
