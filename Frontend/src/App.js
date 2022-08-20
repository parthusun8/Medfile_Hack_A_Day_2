import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/about";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;