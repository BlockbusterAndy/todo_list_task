import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowUpZA } from "lucide-react";
import { addTask } from "../redux/slices/todoSlice";

const AddTask = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    task: "",
    priority: "high"
  });
  const [error, setError] = useState("");

  const handleTaskChange = (e) => {
    setFormData(prev => ({
      ...prev,
      task: e.target.value
    }));
    setError("");
  };

  const handlePriorityChange = (e) => {
    setFormData(prev => ({
      ...prev,
      priority: e.target.value
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    
    // Validate task input
    if (!formData.task.trim()) {
      setError("Please enter a task");
      return;
    }

    try {
      // Dispatch the action
      dispatch(
        addTask({
          userId: token,
          task: formData.task.trim(),
          isCompleted: false,
          priority: formData.priority,
        })
      );

      setFormData(prev => ({
        ...prev,
        task: ""
      }));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to add task. Please try again.");
    }
  };
  
  return (
    <form 
      onSubmit={handleAddTask}
      id="addTask"
      className="bg-gradient-to-b from-[#D0FFD21A] to-[#3579371A] dark:bg-[#496E4B33]/20 p-8"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Add a task..."
          value={formData.task}
          className={`font-medium w-full px-4 py-2 bg-transparent focus:outline-none rounded-lg 
            text-primaryBG-dark dark:text-primaryBG-light 
            ${error ? 'border border-red-500' : ''}`}
          onChange={handleTaskChange}
          aria-label="Task input"
        />
        {error && (
          <p className="absolute -bottom-6 left-0 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-md text-green-700 dark:text-green-400 font-semibold pb-2">
              Priority
            </p>
            <div className="flex items-center gap-2">
              <ArrowUpZA className="text-green-700 dark:text-primaryBG-light" />
              <select 
                value={formData.priority}
                className="bg-transparent outline-none text-primaryBG-dark dark:text-primaryBG-light cursor-pointer"
                onChange={handlePriorityChange}
                aria-label="Priority selection"
              >
                <option value="high" className="text-primaryBG-dark">High</option>
                <option value="medium" className="text-primaryBG-dark">Medium</option>
                <option value="low" className="text-primaryBG-dark">Low</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="bg-[#35793729] dark:bg-[#357937E0] text-green-700 
            dark:text-primaryBG-light font-medium px-4 py-2 rounded-md
            hover:bg-[#35793740] dark:hover:bg-[#357937F0] transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!formData.task.trim()}
        >
          ADD TASK
        </button>
      </div>
    </form>
  );
};

export default AddTask;