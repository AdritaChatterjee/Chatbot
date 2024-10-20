import React from 'react'

function ChatUser() {
    return (
        <>
           <div className="pl-5 pb-5 pt-5 h-[14vh] flex space-x-4 bg-gray-700 hover:bg-gray-400 duration-300">
           <div>
                <div class="avatar online">
                    <div class="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-xl">Adrita Chatterjee</h1>
                <span className="text-sm">Online</span>
            </div>
           </div>
        </>
    )
}

export default ChatUser
