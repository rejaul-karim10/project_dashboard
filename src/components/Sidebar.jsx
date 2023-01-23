import React from "react";

import { SiShopware } from "react-icons/si";
import { MdOutlineChanel } from "react-icons/md";

import { links } from "../data/dummy";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
