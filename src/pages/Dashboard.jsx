import { useState } from "react";
import SideBar from "../components/SideBar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Task 1",
      isImportant: true,
      isCompleted: false,
      priority: "medium",
      date: "2022-01-01",
    },
    {
      id: 2,
      task: "Task 2",
      isImportant: false,
      isCompleted: false,
      priority: "low",
      date: "2022-01-02",
    },
    {
      id: 3,
      task: "Task 3",
      isImportant: true,
      isCompleted: true,
      priority: "high",
      date: "2022-01-03",
    },
  ]);

  return (
    <>
    <section className="flex gap-12 bg-primaryBG-light dark:bg-primaryBG-dark">
      <SideBar />
      <section className='w-full h-screen bg-primaryBG-light dark:bg-primaryBG-dark'>
        <div>
          <p className="flex items-center gap-2 font-medium text-lg text-green-700 cursor-pointer select-none" onClick={()=>{setCollapsed(!collapsed)}}>To Do { collapsed ? <ChevronDown/> : <ChevronUp/>}</p>
          <hr className="border-2 mt-4 border-secondaryBG-dark dark:border-secondaryBG-light opacity-20"/>
        </div>
        { !collapsed && <AddTask/> }
        <div>
          <ul className="flex flex-col gap-4 mt-4">
            {tasks.map((task) => (
              <TaskList key={task.id} tasks={task} />
            ))}
          </ul>
        </div>
      </section>
    </section>
    </>
  )
}

export default Dashboard