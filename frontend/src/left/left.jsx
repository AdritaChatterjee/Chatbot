import React from 'react'
import Search from './Search';
import User from './User';
function left(){
    return( <div className='w-[30%] border-8 border-black bg-black text-white'>
            <h1 className='font-bold text-3xl px-4 pt-1'>Chats</h1>
            <Search></Search>
            <hr className='p-2'></hr>
            <User></User>
            
            
            </div>
    );
}

export default left;