import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" key="home" element={<Home />} />
        <Route path="/event" key="event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
