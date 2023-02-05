import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MianPage from "./Screens/Mianpage";
import Lower from "./components/lower/lower";
import Search from "./components/search/search";
import ResetPassword from "./components/resetPassword/resetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          
          <Routes>
            <Route path="/" element={<MianPage />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/search/:query" element={<Search />} />
          </Routes>

          <Lower />
        </div>
      </div>
    </Router>
  );
}

export default App;
