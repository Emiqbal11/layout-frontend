import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Emission Monitoroing Plan",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Emission Reports",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },

  {
    title: "Role Management",
    path: "/products",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "ICAO Yearly Reporting",
    path: "/products",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
