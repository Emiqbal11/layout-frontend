import React from "react";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="p-0">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  background: isActive ? "rgba(230, 247, 255, 1)" : null,
                  color: isActive ? "rgba(24, 144, 255, 1)" : null,
                })}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
