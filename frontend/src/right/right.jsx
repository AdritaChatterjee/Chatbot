import React from 'react'
import ChatUser from './ChatUser';
import Message from './Message';
import Type from './Type';
function right() {
    return (
    <div className='w-[70%] border-8 border-slate-700 bg-slate-700 text-white'>
        <ChatUser></ChatUser>
        <div style={{maxHeight:"calc(84vh - 10vh)"}} className='overflow-y-auto flex-anything'>
        <Message></Message>
        </div>
        <Type></Type>
    </div>);
}
export default right;