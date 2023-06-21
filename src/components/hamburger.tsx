
const Hamburger = ({setSidebarFlag, sidebarFlag}:any) => {
    
    return (
        <button className="p-1 sm:p-2 h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] z-10 flex flex-col justify-center rounded-[3px] xl:hidden" onClick={() => setSidebarFlag(!sidebarFlag)}>
            <span className={`w-full h-[3px] bg-twineLightGreen inline-block transition-all duration-300  ${sidebarFlag ? 'rotate-45 -mb-[2px] sm:-mb-[2px]' : 'mb-1 sm:mb-2'}`}></span>
            <span className={`w-full h-[3px] bg-twineLightGreen inline-block transition-all duration-300 mb-1 sm:mb-2 ${sidebarFlag ? 'hidden' : ''}`}></span>
            <span className={`w-full h-[3px] bg-twineLightGreen inline-block transition-all duration-300 ${sidebarFlag ? '-rotate-45' : ''}`}></span>
        </button>
    )
}

export default Hamburger