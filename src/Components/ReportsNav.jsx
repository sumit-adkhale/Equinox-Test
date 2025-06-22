import React from "react";
import { NavLink, Outlet } from "react-router";
import Routers from "./AllRouters";
import AllRouters from "./AllRouters";

function ReportsNav() {
  return (
    <>
      <div className=" flex justify-between px-10 mb-10 w-[70%] text-gray-400">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          Sites
        </NavLink>
        <NavLink
          to="/Orders"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          Orders
        </NavLink>
        <NavLink
          to="/VRs"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          VRs
        </NavLink>
        <NavLink
          to="/Reports"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          Reports
        </NavLink>
        <NavLink
          to="/Invoices"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          Invoices
        </NavLink>
        <NavLink
          to="/pi"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "",
            textUnderlineOffset: isActive ? "10px" : "0",
            textDecoration: isActive ? "underline" : "none",
            textDecorationColor: isActive ? "#2690CC" : "transparent",
            textDecorationThickness: isActive ? "5px" : "0",
            textDecorationStyle: isActive ? "round" : "none",
          })}
        >
          PI
        </NavLink>
      </div>
    </>
  );
}

export default ReportsNav;
