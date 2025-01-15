import { useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { toggleComplete, deleteTask } from "../redux/slices/todoSlice";
import PropTypes from 'prop-types';


const TaskList = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleComplete({ id: task.id }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <>
      <li className="flex justify-between items-center gap-4 px-4 py-2">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={handleToggleComplete}
            className="scale-[175%] outline-2 dark:bg-transparent"
          />
          <p
            className={`text-xl font-normal text-primaryBG-dark dark:text-primaryBG-light ${
              task.isCompleted ? "line-through opacity-50" : ""
            }`}
          >
            {task.task}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              task.priority === "high"
                ? "bg-red-200 text-red-700"
                : task.priority === "medium"
                ? "bg-yellow-200 text-yellow-700"
                : "bg-green-200 text-green-700"
            }`}
          >
            {task.priority}
          </span>
          <button
            onClick={handleDeleteTask}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={24} />
          </button>
        </div>
      </li>
      <hr className="border-primaryBG-dark/20 dark:border-primaryBG-light/20" />
    </>
  );
};

export default TaskList;

TaskList.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    priority: PropTypes.oneOf(['high', 'medium', 'low']).isRequired,
  }).isRequired,
};