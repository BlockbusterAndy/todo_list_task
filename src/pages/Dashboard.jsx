import { useState } from "react";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { ChevronDown, ChevronUp, ArrowDownUp } from "lucide-react";
import WeatherCard from "../components/WeatherCard";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  
  const allTasks = useSelector((state) => state.todos.tasks);
  const tabId = useSelector((state) => state.interface.tabId);
  const user = useSelector((state) => state.auth.user);
  const isSidebarOpen = useSelector((state) => state.interface.isSidebarOpen);
  
  const token = localStorage.getItem("token");

  let filteredTasks = allTasks;
  if (tabId === "completed") {
    filteredTasks = allTasks.filter((task) => task.isCompleted);
  }

  const userTasks = filteredTasks.filter(task => task.userId === token);

  const sortedTasks = [...userTasks].sort((a, b) => {
    //sort by completion status
    if (a.isCompleted !== b.isCompleted) {
      return a.isCompleted ? 1 : -1;
    }
    
    //sort by priority for tasks with same completion status
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    if (sortOrder === 'asc') {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  const handleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const renderTaskList = () => {
    if (sortedTasks.length === 0) {
      return (
        <p className="text-center text-lg text-primaryBG-dark dark:text-primaryBG-light">
          No tasks to show
        </p>
      );
    }

    const activeTasks = sortedTasks.filter(task => !task.isCompleted);
    const completedTasks = sortedTasks.filter(task => task.isCompleted);

    return (
      <>
        {/* Active Tasks */}
        {activeTasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
        
        {/* Completed Tasks Section */}
        {completedTasks.length > 0 && (
          <>
            <div className="mt-6 mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed Tasks
              </p>
              <hr className="border-primaryBG-dark/10 dark:border-primaryBG-light/10" />
            </div>
            {completedTasks.map((task) => (
              <TaskList key={task.id} task={task} />
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <section className="flex gap-12 bg-primaryBG-light dark:bg-primaryBG-dark">
      <SideBar username={user?.username} hidden={isSidebarOpen}/>
      <section className='w-full h-full min-h-screen p-6 bg-primaryBG-light dark:bg-primaryBG-dark'>
        <div>
          <div className="flex justify-between items-center">
            <p 
              className="flex items-center gap-2 font-medium text-lg text-green-700 cursor-pointer select-none" 
              onClick={() => setCollapsed(!collapsed)}
            >
              To Do {collapsed ? <ChevronDown/> : <ChevronUp/>}
            </p>
            <ArrowDownUp
              xlinkTitle="Sort by priority"
              size={24} 
              className="text-primaryBG-dark dark:text-primaryBG-light cursor-pointer"
              onClick={handleSort}
            />
          </div>
          <hr className="border-2 mt-4 border-secondaryBG-dark dark:border-secondaryBG-light opacity-20"/>
        </div>
        
        {!collapsed && <AddTask />}
        
        <div>
          <ul className="flex flex-col gap-4 mt-4">
            {renderTaskList()}
          </ul>
        </div>
        
        <div className="flex justify-center items-center mt-4 md:hidden">
          <WeatherCard/>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;