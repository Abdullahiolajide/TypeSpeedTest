import React, { useState } from 'react';
import Nav from './Nav';

function Settings (){
    const [difficulty, setDifficulty] = useState([{level:'Easy'}, {level:'Medium'}, {level:'Hard'}])
    const [levelCheck, setLevelCheck] = useState(localStorage.getItem('difficulty') || 0) 
    function setLevel(i) {
        localStorage.setItem('difficulty', i)
        setLevelCheck(localStorage.getItem('difficulty'))
    }
    return (
        <div>

                <div className='text-white text-center text-xl'>Choose your difficulty level below</div>
            <main className='flex justify-center items-center h-100'>
                <div className='text-white text-center'>
                    {
                        difficulty.map((item, i)=>(
                            <div onClick={()=> setLevel(i)} key={i} 
                            className={`hover:cursor-pointer py-3 px-18 my-5 border ${levelCheck == i ? 'bg-gray-700' :''}`}
                            >{item.level}</div>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}

export default Settings;