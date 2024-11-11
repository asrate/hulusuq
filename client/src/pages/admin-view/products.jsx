import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import ProductImageUpload from "./imageUpload";
const initialFormData = {
  title: "",
  discription: "",
  brand: "",
  price: 0,
  salePrice: 0,
  category: "",
  totalStock: 0,
};
function AdminProducts() {
  const [formData, setFormData] = useState(initialFormData);
  const [checkSalePrice, setCheckSalePrice] = useState(false);
  const [openProductDialog, setOpenProductDialog] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [imageFile, setImageFile] = useState(null)
  const [uploadImageUrl, setUploadImageUrl] = useState('');
  const handleOnSubmit = () => {
    //add new product to database here
  };

  return (
    <>
      <div className="flex justify-end w-full mb-auto">
        <button
          className="bg-slate-900 text-white py-2 px-3 rounded-lg"
          onClick={() => setOpenProductDialog(true)}
        >
          Add New Product
        </button>
      </div>
      <div>
        <Sheet open={openProductDialog} onOpenChange={setOpenProductDialog}>
          <SheetContent side="right" className={"overflow-auto"}>
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadImageUrl={uploadImageUrl} setUploadImageUrl={setUploadImageUrl}/>
            <div className="mt-5 flex flex-col gap-2 ">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="title" className="font-medium text-gray-700">
                  Title
                </label>
                <input
                  id="title"
                  className="p-1 border border-gray-300 rounded-lg focus:outline-none "
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                  placeholder="Enter Product title"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="description"
                  className="font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="p-1 border border-gray-300 rounded-lg focus:outline-none "
                  type="text"
                  name="description"
                  value={formData.discription}
                  onChange={handleOnChange}
                  placeholder="Enter Product Description"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="category" className="font-medium text-gray-700">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleOnChange}
                  className="p-1 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="electronics">Electronics</option>
                  <option value="mens-clothes">Men's Clothes</option>
                  <option value="womens-clothes">Women's Clothes</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="brand" className="font-medium text-gray-700">
                  Brand
                </label>
                <select
                  name="brand"
                  id="brans"
                  value={formData.brand}
                  onChange={handleOnChange}
                  className="p-1 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
                >
                  <option value="" disabled>
                    Select a Brand
                  </option>
                  <option value="sony">Sony</option>
                  <option value="nike">Nike</option>
                  <option value="jordan">Jordan</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="price" className="font-medium text-gray-700">
                  Price
                </label>
                <input
                  id="price"
                  className="p-1 border border-gray-300 rounded-lg focus:outline-none "
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleOnChange}
                  placeholder="Enter Product Price"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => setCheckSalePrice(true)}
                />
              </div>

              <div
                className={`flex flex-col gap-2 w-full ${
                  !checkSalePrice ? "hidden" : ""
                }`}
              >
                <label htmlFor="title" className="font-bold text-gray-700">
                  Sale Price
                </label>
                <input
                  id="salePrice"
                  className="p-1 border border-gray-300 rounded-lg focus:outline-none "
                  type="text"
                  name="salePrice"
                  value={formData.salePrice}
                  onChange={handleOnChange}
                  placeholder="Enter Product Sale Price"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="title" className="font-bold text-gray-700">
                  Total Stock
                </label>
                <input
                  id="totalStock"
                  className="p-1 border border-gray-300 rounded-lg focus:outline-none "
                  type="text"
                  name="totalStock"
                  value={formData.totalStock}
                  onChange={handleOnChange}
                  placeholder="Enter Total Stock"
                />
              </div>
              <div className="w-full justify-between flex">
                <button
                  className="bg-green-500 text-white py-2 px-3 rounded-lg w-1/2"
                  onClick={handleOnSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white py-2 px-3 rounded-lg ml-2 w-1/2"
                  onClick={() => setOpenProductDialog(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default AdminProducts;
