import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight} from 'react-icons/fa6'

const Banner = () => {
  return (
    <div className=' bg-black mx-auto px-4 py-32 '>
        <div className="text-white text-center">
            <h1 className=" text-5xl lg:text-5xl leading-snug font-bold mb-5">Welcome  to our blog</h1>
            <p className=" text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">Start your blog and join community of programmers who are passionate about sharing their codes. we offer every thing you need started,from helpful tips and tutorials</p>
            <div className="">
                <Link to="/" className=' font-medium hover:text-orange-500 inline-flex items-center'>Learn more <FaArrowRight className='mt-1 ml-2'/> </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner