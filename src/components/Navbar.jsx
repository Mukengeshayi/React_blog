import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaInstagram, FaTwitter,FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [isMenuOpen, setIsMenuopen]= useState(false);

    const toggleMenu = () => {
        setIsMenuopen(!isMenuOpen);
    }
    const navItems=[
        {path:'/', link:"Home"},
        {path:'/services', link:"Services"},
        {path:'/about', link:"About"},
        {path:'/blogs', link:"Blogs"},
        {path:'/contact', link:"Contact"},
    ]
  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0'>
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
            <a href='/' className=" text-xl font-bold text-white">Shay<span className=" text-orange-500">Tech</span></a>

            {/* item for lg-devices */}
            <ul className="md:flex gap-12 text-lg hidden ">
                {                
                    navItems.map(({path,link})=><li className=" text-white" key={path}>
                    <NavLink to={path}
                        className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }
                    >
                        {link}  
                    </NavLink>
                    </li>)
                }
            </ul>

            {/* menu Icons */}
            <div className="text-white lg:flex gap-4 items-center hidden">
                <a href='' className=" hover:text-orange-500"><FaFacebook /></a>
                <a href='' className=" hover:text-orange-500"><FaInstagram /></a>
                <a href='' className=" hover:text-orange-500"><FaTwitter /></a>
                <button className=" bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">Log in</button>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className=" cursor-pointer">
                    {
                        isMenuOpen ? <FaTimes className='text-white h-5 w-5' /> : <FaBars className=' text-white h-5 w-5'/>

                    }
                </button>
            </div>
        </nav>
        {/* menu item only fot mobile */}
        <div className="">
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150": " hidden"}`}>
                    {                
                        navItems.map(({path,link})=><li className=" text-black" key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
    </header>
  )
}

export default Navbar