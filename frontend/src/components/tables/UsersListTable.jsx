import React from "react";
import UserRow from "./rows/UserRow";
import UserListSearchBar from "../../layouts/TopBars/UserListSearchBar";

const UsersListTable = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-x-hidden overflow-y-scroll sm:rounded-lg mt-10 mb-10 w-[85%] h-[55vh] border">
        <UserListSearchBar />
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Orders Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Orders
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default UsersListTable;
