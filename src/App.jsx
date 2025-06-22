import { useState } from "react";
import "./App.css";
import AllDetails from "./Components/AllDetails";
import ReportsNav from "./Components/ReportsNav";
import { Outlet, Router } from "react-router";
import AllRouters from "./Components/AllRouters";
import PreviousTrack from "./Components/PreviousTrack";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllDetails />
      <div className="flex m-4">
        <div className="w-[60%] mt-5  overflow-x-auto">
          <ReportsNav />
          <Outlet />
        </div>
        <div className="w-[37%] ml-10">
          <PreviousTrack date={"11 Oct 23"}/>
          <PreviousTrack date={"7 Oct 23"}/>
        </div>
      </div>
    </>
  );
}

export default App;
