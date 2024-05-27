import React, { useState } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"; 
import { motion } from "framer-motion"

function Card(refrence) {
  const [desc, setDesc] = useState('');

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  return (
    <>
      
      <motion.div drag dragConstraints={refrence} className=' m-5 cursor-pointer relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>.4mb</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              <LuDownload size="0.7em" color='#fff'/>
            </span>
          </div>
          <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
            <h3 className='text-sm font-semibold'>Download Now</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;
