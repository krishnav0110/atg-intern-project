import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  // const { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<><Login /><Home /></>} />
        <Route exact path="/signup" element={<><Signup /><Home /></>} />
      </Routes>
    </Router>
  );
}

export default App;
