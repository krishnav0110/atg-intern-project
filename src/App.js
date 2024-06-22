import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "./context/Context";
import Home from "./pages/Home/Home";

function App() {
  // const { user } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
