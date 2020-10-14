import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  //Run code based on  a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("I have a token :point >>", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
