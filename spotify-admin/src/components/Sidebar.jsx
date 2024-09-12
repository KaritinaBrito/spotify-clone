import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-[#003a10] min-h-screen pl-[4vw]'>
        <img src={assets.logo} className='mt-5 w-[max(10vw,100px)] hidden  sm:block' alt="logo" />
        <img src={assets.logo_small} className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block' alt="logo spotify" />

        <div className='flex flex-col gap-5 mt-10'>
            <NavLink to='/add-song' className='flex justify-center sm:justify-start   items-center gap-2.5 text-gray-800 bg-white boder border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium rounded-l-md'>
                <img src={assets.add_song} alt="add song" className='w-5'/>
                <p className='hidden sm:block'>Add Song</p>
            </NavLink>

            <NavLink to='/list-song' className='flex justify-center sm:justify-start items-center gap-2.5 text-gray-800 bg-white boder border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium rounded-l-md'>
                <img src={assets.song_icon} alt="song icon" className='w-5'/>
                <p className='hidden sm:block'>List Song</p>
            </NavLink>

            <NavLink to='/add-album' className='flex justify-center sm:justify-start items-center gap-2.5 text-gray-800 bg-white boder border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium rounded-l-md'>
                <img src={assets.add_album} alt="add album" className='w-5'/>
                <p className='hidden sm:block'>Add Album</p>
            </NavLink>

            <NavLink to='/list-album' className='flex justify-center sm:justify-start items-center gap-2.5 text-gray-800 bg-white boder border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium rounded-l-md'>
                <img src={assets.album_icon} alt="Album" className='w-5'/>
                <p className='hidden sm:block'>List Album</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar