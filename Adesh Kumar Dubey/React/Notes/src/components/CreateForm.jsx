import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";


function CreateForm() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [desc, setDesc] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [unit, setUnit] = useState('Kb');
  const [cards, setCards] = useState([]);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      desc,
      fileSize,
      unit,
    };
    setCards([...cards, newCard]);
    setFormVisible(false);
    setDesc('');
    setFileSize('');
    setUnit('Kb');
  };

  const deleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <>
      <div> 
        {!isFormVisible && (
          <button
            onClick={toggleFormVisibility}
            className='absolute top-10 right-10 w-fit text-blue-100/60 text-xl font-semibold h-[8vh] flex bg-zinc-900 rounded-2xl items-center p-6 justify-between hover:bg-zinc-700 hover:scale-105 hover:text-blue-200/60'
          >
            Create Notes &nbsp; <CiCirclePlus size="1.3em" />
          </button>
        )}
        {isFormVisible && (
          <div className='absolute top-5 right-[2.5rem] w-[20vw] h-[55vh] rounded-2xl bg-slate-400 opacity-85 p-5'>
            <form className="max-w-sm mx-auto" onSubmit={handleFormSubmit}>
              <div className="mb-5">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Notes</label>
                <textarea
                  placeholder='Write Your Notes Here..'
                  required
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 resize-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Size</label>
                <input
                  type="number"
                  placeholder='Enter File Size..'
                  id="base-input"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={fileSize}
                  onChange={(e) => setFileSize(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="units" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Units</label>
                <select
                  id="units"
                  name="units"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="Kb">Kb</option>
                  <option value="mb">mb</option>
                  <option value="gb">gb</option>
                  <option value="Tb">Tb</option>
                </select>
              </div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-9 py-2.5 text-center mb-2 m-4 ml-[30%]"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={toggleFormVisibility}
                className="absolute top-2 right-2 text-white bg-black rounded-full p-2 hover:bg-red-700"
              >
                <RxCross2 />
              </button>
            </form>
          </div>
        )}
      </div>

      <div className='m-5'>
        {cards.map((card, index) => (
          <div key={index} className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden mb-6'>
            <button
              className='absolute top-5 right-5 text-white bg-black rounded-full p-2 hover:bg-red-700'
              onClick={() => deleteCard(index)}
            >
              <RiDeleteBin6Line />
            </button>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{card.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
              <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{card.fileSize} {card.unit}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                  <LuDownload size="0.7em" color='#fff'/>
                </span>
              </div>
              <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CreateForm;
