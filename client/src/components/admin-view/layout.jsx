import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

function AdminLayout() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    
    <div className="flex min-h-screen w-full">
      <AdminSidebar open={openMenu} setOpen={setOpenMenu}/>
      <div className="flex flex-1 flex-col">
        <AdminHeader setOpen={setOpenMenu} />
        <main className="flex-1 flex bg-gray-100 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
