import { Outlet } from "react-router-dom";
import "./App.css";
import Scaffold from "./features/scaffold/scaffold";

function App() {
  return (
    <>
      <Scaffold>
        <Outlet />
      </Scaffold>
    </>
  );
}

export default App;
