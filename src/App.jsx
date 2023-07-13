import "./App.css";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { clinet } from "./components/UserInfo";
const listOfClients = clinet.map((cl) => {
  // console.log(cl);
  return (
    <div key={cl.index}>
      <User key={cl.index} client={cl} />
    </div>
  );
});
function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <div className='client-container'>{listOfClients}</div>
      </div>
    </>
  );
}

export default App;
