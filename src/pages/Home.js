import React from "react";
import Hero from "../components/Hero";

import FenderLogo from "../images/Fender_logo.png";

function Home() {
  return (
    <div>
      <Hero>
        <img src={FenderLogo} alt="Fender Logo" />
      </Hero>
    </div>
  );
}

export default Home;
