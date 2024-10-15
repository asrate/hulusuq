import { ChartNoAxesCombined } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  return (
    <>
      <aside className="hidden w-64 flex-col lg:flex bg-background p-6">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ChartNoAxesCombined />
          <h1 className="font-extrabold text-xl">Admin Panel</h1>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;
