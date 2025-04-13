import React from 'react';

function StatsBox(props){
    return (
        <div className='text-white'>
            <div className='w-[100vw] h-[100vh] bg-black opacity-60 fixed top-0 left-0'></div>
            <div className='w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center'>
                <div className='bg-black border h-[36vh] mt-28 w-100 rounded-lg p-3'>
                    <p className='text-2xl'>STATS</p>
                    <div className='mt-1 text-center'>
                        <p>Time Taken</p>
                        <small>{props.timeTaken}s</small>
                        <p>Accuracy</p>
                        <small>{props.accuracy}%</small>
                        <p>Word per minute</p>
                        <small>{props.wpm} WPM</small> <br />
                    <button className='bg-black p-2 mx-auto mt-2 hover:cursor-pointer rounded border ' onClick={props.set}>CLOSE</button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default StatsBox;