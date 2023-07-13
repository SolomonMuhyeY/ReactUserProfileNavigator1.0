import { useState } from "react";
import "./App.css";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { clinet } from "./assets/ArrayOfImages";
const imgSource = [];
const listOfClients = clinet.map((cl) => {
  // console.log(cl);
  return (
    <div className='client-list'>
      <User key={cl.index} client={cl} />
    </div>
  );
});
function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <div>{listOfClients}</div>
      </div>
    </>
  );
}

export default App;
