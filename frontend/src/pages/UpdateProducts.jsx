import React from "react";
import FormInput from "../components/FormInput";
import Header from "../layouts/Header"
const UpdateProducts = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="isolate bg-white px-6 py-5 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add New Product{" "}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form action="" method="POST" className="mx-auto mt-5 max-w-xl sm:mt-5">
          <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
            <FormInput />
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="resize-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-light text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UpdateProducts;
