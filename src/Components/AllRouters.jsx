import { Route, Routes } from "react-router";
import Sides from "./Sides";
import Orders from "./Orders";
import VRs from "./VRs";
import Reports from "./Reports";
import Invoices from "./Invoices";
import PI from "./PI";
import React from "react";
import App from "../App";

function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Sides />} />
        <Route path="Sides" element={<Sides />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="VRs" element={<VRs />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="Invoices" element={<Invoices />} />
        <Route path="pi" element={<PI />} />
      </Route>
    </Routes>
  );
}

export default AllRouters;
