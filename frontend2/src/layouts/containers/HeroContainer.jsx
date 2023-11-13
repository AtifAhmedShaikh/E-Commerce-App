import React from 'react'

const HeroContainer = () => {
  return (
        <React.Fragment>
            <div className='flex bg-slate-700 h-[92vh] justify-start items-center px-5'>
                <div className='w-1/2'>
                    <h5 className='font-bold text-emerald-500 text-xl'>Up To 75 Off</h5>
                    <h2 className='font-bold text-purple-500 text-3xl mb-4'>Explore the Market we have done !</h2>
                    <h4 className='font-bold text-orange-500 text-2xl'>Now, Today have you start Buying!</h4>
                    <p className='text-gray-100 my-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis magnam vero non perferendis sed, possimus expedita, magni facilis corrupti illum nostrum, minima vitae reprehenderit adipisci eos tenetur. Asperiores, eaque!
                    </p>
                    <button className='bg-orange-700 text-lg px-4 py-1 text-gray-100 rounded-sm '>
                        Explore
                    </button>
                    <button className='bg-green-700 text-lg px-4 py-1 text-gray-100 rounded-sm ml-3'>
                        See Items
                    </button>
                </div>
            </div>
        </React.Fragment>
  )
}

export default HeroContainer