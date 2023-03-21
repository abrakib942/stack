import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className=" col-span-2 h-screen sticky border border-r-2 pl-4">
      <div className="p-6">
        <img src="/assets/logo.png" alt="" />
      </div>
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <h4 className="text-sm text-[#A7AFBC] ml-3">PAGES</h4>

        <li>
          <Link
            className="hover:bg-[#F0F5FA] text-[#A7AFBC]  transition-all w-full block py-2 px-3 rounded-lg"
            to="/dashboard"
          >
            <p className="flex items-center gap-2">
              <RxDashboard /> <span className="">Dashboard</span>
            </p>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-[#F0F5FA] text-[#A7AFBC]  transition-all w-full block py-2 px-3 rounded-lg"
            to="users"
          >
            <p className="flex items-center gap-2">
              <FaRegUser /> <span className="">Users</span>
            </p>
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-[#F0F5FA] text-[#A7AFBC]  transition-all w-full block py-2 px-3 rounded-lg"
            to="sales"
          >
            <p className="flex items-center gap-2">
              <RiFileList3Line /> <span className="">Sales</span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
