import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import "./main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          {/* pas accessible par url */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
