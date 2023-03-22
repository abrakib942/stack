import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedOut } from "../../app/features/auth/authSlice";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();

    // navigate("/login");
  };

  return (
    <div className="sticky top-0 z-30">
      <div className="navbar bg-base-100 px-8 mt-2 ">
        <div className="flex-1">
          <div className="form-control">
            <label className="relative block">
              <span className="absolute top-[14px] right-0 flex items-center pr-3">
                <BsSearch className="text-gray-400 h-5 w-5" />
              </span>
              <input
                placeholder="Search"
                className="input input-bordered w-[400px]"
              />
            </label>
          </div>
        </div>
        <div>
          <GrNotification className="text-gray-400  mr-6 w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/assets/profile.png" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 menu menu-compact dropdown-content hover:bg-[#F0F5FA] "
            >
              <li className="cursor-pointer" onClick={logout}>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
