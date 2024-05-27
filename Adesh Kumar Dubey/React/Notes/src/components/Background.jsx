import React from 'react'

function Background() {
  return (
    <>
    <dir className='fixed z-[2] w-full h-screen'>
    <div className=' absolute top-[2%] w-full py-10 flex justify-center  text-zinc-500 font-semibold text-2xl tracking-wider'>Notes</div>
       <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </dir>
    
    </>
  )
}

export default Background
