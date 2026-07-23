import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;