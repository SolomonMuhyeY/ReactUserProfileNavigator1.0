import { useState } from "react";
import "./App.css";
import User from "./components/User";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <User />
      </div>
    </>
  );
}

export default App;
