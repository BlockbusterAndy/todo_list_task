import React from 'react'
import { Star } from 'lucide-react';

const TaskList = (props) => {
    const {tasks} = props;
  return (
    <>
        <li className='flex justify-between items-center gap-4 px-4 py-2'>
        <div className='flex items-center gap-4'>
            <input type="checkbox" className="scale-[175%] outline-2 dark:bg-transparent" />
            <p className='text-xl font-normal text-primaryBG-dark dark:text-primaryBG-light'>{tasks.task}</p>
        </div>
        <div className='flex items-center text-green-700 dark:text-primaryBG-light'>
            {tasks.isImportant ? <Star size={28} fill='green'/> : <Star size={24}/>}
        </div>
        </li>
        <hr className='border-primaryBG-dark/20 dark:bg-primaryBG-light/20'/>
    </>
  )
}

export default TaskList