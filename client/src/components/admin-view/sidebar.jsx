// import { LayoutDashboard } from "lucide";
import { Pointer } from "lucide";
import {
  BadgeCheck,
  ChartNoAxesCombined,
  LayoutDashboard,
  ShoppingBasket,
  ShoppingBasketIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

function MenuItems({setOpen}) {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col mt-8 gap2">
      <div
        className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-black"
        onClick={() => {navigate("/admin/dashboard")
setOpen? setOpen(false):null}
        }
      >
        <LayoutDashboard />
        <span>Dashboard</span>
      </div>
      <div
        className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-black"
        onClick={() => {navigate("/admin/products")
          setOpen? setOpen(false):null
        }}
      >
        <ShoppingBasketIcon />
        <span>Products</span>
      </div>
      <div
        className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer text-gray-500 hover:bg-gray-200 hover:text-black"
        onClick={() => {navigate("/admin/orders")
          setOpen? setOpen(false):null
        }}
      >
        <BadgeCheck />
        <span>Orders</span>
      </div>
    </nav>
  );
}

function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className={"w-64"}>
          <div className="flex flex-col h-full">
            <SheetHeader className={"border-b"}>
              <SheetTitle className={"flex gap-2 mt-5"}>
                <ChartNoAxesCombined />
                <h1 className="font-extrabold text-xl">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col lg:flex bg-background p-6">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <ChartNoAxesCombined />
          <h1 className="font-extrabold text-xl">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  );
}

export default AdminSidebar;
