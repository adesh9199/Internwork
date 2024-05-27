import React, { useRef } from 'react'
import Card from './Card'
import CreateForm from './CreateForm'

function Foreground() {
    const ref= useRef(null);
    return (
        <>
            <div  ref={ref} className='fixed flex flex-wrap  top-0 left-0 z-[3] w-full h-full overflow-hidden'>
                <Card refrence={ref}/>
                <Card refrence={ref}/>
                <Card refrence={ref}/>
               
                <CreateForm />
              
            </div>
        </>
    )
}

export default Foreground
