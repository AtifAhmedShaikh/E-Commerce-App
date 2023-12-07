import React from "react";
import Button from "../Button";
import ProductsListSearchBar from "../../layouts/TopBars/ProductsListSearchBar";
import ProductRow from "./rows/ProductRow";

const ProductsListTable = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-x-hidden overflow-y-scroll  sm:rounded-lg h-[55vh] w-[85%] mt-10 mb-10 border">
        <ProductsListSearchBar />
        <div className="flex justify-end">
          <Button className="bg-blue-500 rounded-md py-1 px-2 text-gray-100 mr-5 hover:bg-blue-700">
            Add New Product
          </Button>
        </div>
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase border-b dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Stocks
              </th>
              <th scope="col" className="px-6 py-3">
                Sold
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
            <ProductRow/>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ProductsListTable;
