import React from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const HeroContainer = () => {
    const navigate=useNavigate();
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
                    <Button className="bg-orange-500 text-lg px-4 py-1 text-gray-100 rounded-md " onClick={()=>navigate('/products')}>Explore </Button>
                    <Button className="bg-green-500 text-lg px-4 py-1 text-gray-100 rounded-md ml-3 " onClick={()=>navigate('/products')}>See Items </Button>
                </div>
            </div>
        </React.Fragment>
  )
}

export default HeroContainer