import { Outlet } from "react-router-dom";
import "./App.css";
import Scaffold from "./components/scaffold";

function App() {
  return (
    <>
      <Scaffold>
        <p>Test</p>
        <Outlet />
      </Scaffold>
    </>
  );
}

export default App;
