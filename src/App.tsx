import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import Messages from "./pages/Messages/Messages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key="home" element={<Home />} />
        <Route path="/event" key="event" element={<Event />} />
        <Route path="/inbox" key="messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
