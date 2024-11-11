import { Menu } from "lucide";
import { LogOut, MenuIcon } from "lucide-react";
import React from "react";

function AdminHeader({setOpen}) {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <button className="lg:hidden sm:block bg-black text-white px-2 py-2 rounded-lg" onClick={()=>setOpen(true)}>
        <MenuIcon />
        <span className="sr-only">Toggle Menu</span>
      </button>
      <div className="flex flex-1 justify-end ">
        <button className="bg-black text-white flex w-28 p-2 rounded-lg">
          <LogOut />
          LogOut
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
