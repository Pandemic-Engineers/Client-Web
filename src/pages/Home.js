import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="">
      Home page
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/register"}>Register</Link>
      </p>
      <p>
        <Link to={"/sites"}>Sites</Link>
      </p>
      <p>
        <Link to={"/assets"}>Assets</Link>
      </p>
    </div>
  );
}

export default Home;
