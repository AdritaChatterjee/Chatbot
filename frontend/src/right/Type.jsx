import React from 'react'

function Type() {
    return (
        <>
            <div className='flex items-center space-x-3 h-[10vh] text-center'>
                <div className='w-[100%]'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full grow outline-none text-white bg-slate-900" />


                </div>
                <button className="button btn-primary mr-2 btn glass">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-upload"
                        width="24px"
                        height="24px"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 10 12 5 7 10" />
                        <line x1="12" y1="5" x2="12" y2="15" />
                    </svg>


                    Send
                </button>
            </div>
        </>
    )
}

export default Type
