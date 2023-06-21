import { useState } from 'react';
import search from '../images/search.svg'

const Search = () => {
    const [showInput, setShowInput] = useState(false);
    const handleChange = (event: any) => {
        if (event.target.value.trim().length !== 0) {
            setShowInput(true)
        } else {
            setShowInput(false)
        }
    };
    return (
        <div className='sm:relative sm:mr-5 sm:w-[200px] sm:bottom-0 sm:right-0 group flex justify-end absolute w-full right-3 mr-0 bottom-2'>
            <input type="text" className={`h-[35px] sm:h-[45px] p-3 bg-twineLightGreen rounded-[25px] outline-none transition-all duration-300 group-hover:pr-[45px] w-[calc(100%_-_20px)] sm:group-hover:w-[200px]  ${showInput ? 'sm:w-[200px] pr-[45px]' : 'sm:w-[45px]'} `} onChange={(e) => handleChange(e)} />
            <button className='absolute right-0 top-0 h-[35px] w-[35px] p-2 sm:h-[45px] sm:w-[45px] rounded-full flex items-center justify-center bg-twineLightGreen '>
                <img src={search} alt="" />
            </button>
        </div>
    )
}

export default Search