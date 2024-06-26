import React,{useEffect, useState} from 'react'

function MousePosition() {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const currPosition = (e) => {
        console.log("hi");
        setX(e.clientX);
        setY(e.clientY);
      };
    
      useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', currPosition);
        return () => {
          window.removeEventListener('mousemove', currPosition);


          return()=>{
            window.removeEventListener('mousemove', currPosition)
          }
        };
      }, []);
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex items-center justify-center w-full max-w-md">
    <h3 className="text-center text-lg font-medium">Mouse Position: [{x}, {y}]</h3>
  </div>
  )
}

export default MousePosition