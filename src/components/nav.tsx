import { Link } from 'react-router-dom'

const Nav = ({ sidebarFlag }: any) => {
    return (
        <nav className={`opacity-0 invisible xl:opacity-100 xl:visible z-10 ${sidebarFlag ? 'sidebar-open' : ''} `}>
            <Link to="/" title='Art' className='text-twineLightGreen relative text-[28px] lg:text-[40px] px-5  py-2 xl:py-[40px]'>art</Link>
            <Link to="/" title='Collab' className='text-twineLightGreen relative text-[28px] lg:text-[40px] px-5  py-2 xl:py-[40px]'>collab</Link>
            <Link to="/" title='Create' className='text-twineLightGreen relative text-[28px] lg:text-[40px] px-5  py-2 xl:py-[40px]'>create</Link>
        </nav>
    )
}

export default Nav