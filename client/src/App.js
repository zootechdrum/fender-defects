import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <div>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
