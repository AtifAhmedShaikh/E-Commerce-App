import React from 'react'
import SelectTag from '../../components/SelectTag'
import Button from '../../components/Button'
import { HightToLowIcon, LowToHight, SearchIcon, SortIcon } from '../../components/icons/HeroIcons'

const UserListSearchBar = () => {
  return (
    <React.Fragment>
                <div className="w-100 py-2  flex justify-between items-center">
          <div className="ml-2 flex items-center">
            <SortIcon />
            <SelectTag />
            <Button className="p-1 rounded-md border ml-2">
              <HightToLowIcon />
            </Button>
            <Button className="p-1 rounded-md border ml-2">
              <LowToHight />
            </Button>
          </div>
          <div className="relative w-1/3 mr-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search users..."
              required
            />
          </div>
        </div>

    </React.Fragment>
  )
}

export default UserListSearchBar