import { Menu } from "lucide";
import { LogOut, MenuIcon } from "lucide-react";
import React from "react";

function AdminHeader() {
  return (
    <head className="flex items-center justify-between px-4 py-4">
      <button className="lg:hidden sm:block bg-black text-white px-2 py-2 rounded-lg">
        <MenuIcon />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <div className="flex flex-1 justify-end ">
        <button className="bg-black text-white flex w-28 p-2 rounded-lg">
          <LogOut />
          LogOut
        </button>
      </div>
    </head>
  );
}

export default AdminHeader;
