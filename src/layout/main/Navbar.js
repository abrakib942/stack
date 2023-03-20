import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-12">
        <div className="navbar-start">
          <div className="">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="navbar-end">
          <div className="">
            <select className="select select-bordered text-gray-500 w-full max-w-xs">
              <option selected>English (UK)</option>
              <option>Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
