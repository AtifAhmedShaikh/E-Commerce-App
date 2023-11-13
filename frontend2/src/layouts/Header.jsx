import React from 'react'

const Header = () => {
    const isAuth=false;
  return (
    <React.Fragment>
        <div className='w-full h-12 bg-gray-800 flex justify-between item-center px-5'>
            <div className='flex items-center'>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
            </div>
            <div className='flex gap-3 items-center text-white'>
                <span className='text-orange-600 hover:border-b hover:border-orange-600'>Home</span>
                <span className='hover:text-orange-600 hover:border-b hover:border-orange-600'>Dashboard</span>
                <span className='hover:text-orange-600 hover:border-b hover:border-orange-600'>Cart</span>
                <span className='hover:text-orange-600 hover:border-b hover:border-orange-600'>Wish List</span>
            <div className='flex gap-3 items-center ml-5'>
                {isAuth?<div>
                    <button className='bg-blue-600 rounded-sm text-gray-100 px-4 py-1'>Sign In</button>
                    <button className='bg-blue-600 rounded-sm text-gray-100 px-4 py-1 ml-2'>Sign Up</button>
                </div>:<div>
                    <img className='w-8 h-8 rounded-full' src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>}
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header