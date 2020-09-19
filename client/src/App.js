import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Router>
          <Route exact path="/" component={Home} />;
        </Router>
      </div>
    </div>
  );
}

export default App;
