import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import Messages from "./pages/Messages/Messages";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key="home" element={<Home />} />
        <Route path="/event" key="event" element={<Event />} />
        <Route path="/inbox" key="messages" element={<Messages />} />
        <Route path="/user-profile" key="user-profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
