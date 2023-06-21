import { Link } from 'react-router-dom'
import logo from "./images/TwineLogo.png"
import profile from './images/ProfilePicture.png'
import notification from './images/bell.svg'
import { useState } from 'react'
import Hamburger from './components/hamburger'
import Search from './components/search'
import Nav from './components/nav'

const Navbar = () => {
    const [sidebarFlag, setSidebarFlag] = useState(false)

    return (
        <header className="bg-twineBlack px-2 lg:px-5 py-3 sm:pb-3 z-20 sticky pb-[50px]">
            <div className="container-fluid">
                <div className='flex items-center justify-between'>
                    <div className="flex items-center ">
                        <Hamburger setSidebarFlag={setSidebarFlag} sidebarFlag={sidebarFlag} />
                        <Link to="/">
                            <img src={logo} alt="" className="max-w-[120px] sm:max-w-[180px] lg:max-w-[300px]" />
                        </Link>
                    </div>
                    <Nav sidebarFlag={sidebarFlag}></Nav>
                    <div className='flex items-center'>
                        <Search />
                        <div className='relative pr-[30px]'>
                            <img src={profile} alt="" className='w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] rounded-full' />
                            <button className='bg-twineLightPurple absolute top-[50%] -translate-y-[50%] flex items-center right-0 lg:py-1 px-2 rounded-[20px]'>
                                <img src={notification} alt="" className='w-4 lg:w-[24px]' />
                                <span className='mx-1 mt-1 text-twineDarkPurple text-[14px] sm:text-[20px] font-normal'>0</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar