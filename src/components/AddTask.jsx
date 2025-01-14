import { Bell, Repeat, Calendar } from 'lucide-react'

const AddTask = () => {
  return (
    <div id="addTask" className="bg-gradient-to-b from-[#D0FFD21A] to-[#3579371A] dark:bg-[#496E4B33]/20 p-8">
        <input type="text" placeholder="Add a task..." className=" font-medium w-full px-4 py-2 bg-transparent focus:outline-none rounded-lg text-primaryBG-dark dark:text-primaryBG-light "/>
        <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-4 mt-4">
                <button className="text-primaryBG-dark dark:text-primaryBG-light">
                <Bell size={28} />
                </button>
                <button className="text-primaryBG-dark dark:text-primaryBG-light">
                <Repeat size={28} />
                </button>
                <button className="text-primaryBG-dark dark:text-primaryBG-light">
                <Calendar size={28} />
                </button>
            </div>
            <button className="bg-[#35793729] dark:bg-[#357937E0] text-green-700 dark:text-primaryBG-light font-medium px-4 py-2 rounded-md">ADD TASK</button>
        </div>
    </div>
  )
}

export default AddTask