import React from 'react'

function Logout() {
  return (
    
    <div className='flex flex-col justify-end w-[2%]  bg-black text-white'>
    <button class="w-auto flex items-center p-2 rounded-lg hover:bg-gray-600 duration-300">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-10 w-16 opacity-70">

    <path
      fill-rule="evenodd"
      d="M6 1a1 1 0 0 1 1-1h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v2h3V2H7v2a1 1 0 1 1-2 0V1ZM3.854 10.854a.5.5 0 0 1-.708-.708L6.293 7l-3.147-3.146a.5.5 0 1 1 .708-.708L7.707 7l-3.853 3.854Z"
      clip-rule="evenodd"/>
  </svg>
</button>

    </div>
  
  )
}

export default Logout
