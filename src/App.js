import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MianPage from "./Screens/Mianpage";
import Lower from "./components/lower/lower";
import Search from "./components/search/search";
import ResetPassword from "./components/resetPassword/resetPassword";
import Questionier from "./Screens/Questionier";
import Results from "./Screens/Results";
import Servise from "./components/servise/Service";
import Signup from "./components/Signup/Signup"

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
            <Route path="/questiontest" element={<Questionier />} />
            <Route path="/results" element={<Results/>} />
            <Route path="/serviseagreement" element={<Servise />} />
            <Route path="/join" element={<Signup />} />
            <Route path="/results" element={<Results/>} />
            
          </Routes>

          <Lower />
        </div>
      </div>
    </Router>
  );
}

export default App;
