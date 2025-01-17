import React, { useState } from "react";
import {
  FaBars,
  FaTruck,
  FaUserTie,
  FaTree,
  FaFlask,
  FaSignOutAlt,
  FaBalanceScale,
} from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";
import Logo from "../../assets/Bone Logo.png";

const AdminSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex">
      <div
        className={`flex flex-col ${
          isExpanded ? "w-52" : "w-16"
        } bg-[#2d444e] text-white h-screen transition-width duration-300 absolute`}
      >
        <div className="bg-white flex items-center justify-evenly w-full py-3 border-r-4 border-cyan-900">
          <button onClick={toggleSidebar} className="hover:bg-gray-300 p-2 rounded-full">
            <FaBars className="text-3xl text-cyan-900" />
          </button>
          <div className={` ${isExpanded ? "block" : "hidden"}`}>
            <img src={Logo} alt="B One Rubbers" className={`p-1 w-28`} />
          </div>
        </div>
        <div className="flex flex-col justify-between my-10 h-full">
          <div className="flex flex-col w-full">
            <SidebarItem
              icon={<FaUserTie />}
              label="Suppliers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaTruck />}
              label="Drivers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaTree />}
              label="Tapers"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaFlask />}
              label="Latex"
              isExpanded={isExpanded}
            />
            <SidebarItem
              icon={<FaBalanceScale />}
              label="DRC"
              isExpanded={isExpanded}
              onClick={() => console.log("NRC clicked")}
            />
          </div>
          <div className="">
            <SidebarItem
              icon={<FaSignOutAlt />}
              label="Logout"
              isExpanded={isExpanded}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen">
        {/* <div className="w-full bg-cyan-900 h-16"></div> */}
        <div className=" w-full h-full flex justify-center items-center">
          <div className="bg-logo2 bg-no-repeat bg-contain bg-opacity-100 h-3/4 w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
