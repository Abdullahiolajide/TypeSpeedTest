import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const path = location.pathname

    return (
        <div className='p-4 md:p-8 mx-auto max-w-4xl'>
            <nav className='flex justify-between'>
                <div className='text-white grid md:text-3xl text-2xl text-right'>
                    <span>Centerville</span>
                    <span className='text-xs text-[#2A9F77] font-semibold'>Type Testing</span>
                </div>

                <ul className='flex h-[5.3vh]'>
                    <Link to='/settings'>
                    <li className={`text-[#646B68] font-semibold text-sm mx-2 px-4 py-2 rounded-3xl hover:cursor-pointer
                        ${path == '/settings' ? 'active' :'' }
                        `}>Settings</li>
                    </Link>

                    <Link to='/'>
                    <li className={`text-sm whitespace-nowrap font-semibold flex activ rounded-3xl pl-1 pr-4 hover:cursor-pointer
                        ${path == '/' ? 'active' :'' }
                        `}>
                       <span className='w-6/12 p-2'> <img src={`https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=${path == '/' ? '2A9F77' :'2B3733' }`} 
                        alt=""
                        width={20} 
                        /></span>
                        <span className='w-6/12 mt-2'>Home</span>
                    </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;