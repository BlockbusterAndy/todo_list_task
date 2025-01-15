import { createSlice, nanoid } from '@reduxjs/toolkit';

// Helper to load tasks from localStorage
const loadTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
};

// Helper to save tasks to localStorage
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = {
    tasks: loadTasksFromLocalStorage(),
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                userId: action.payload.userId,
                task: action.payload.task,
                isCompleted: false,
                priority: action.payload.priority || 'medium',
                date: Date.now().toLocaleString(),
            };
            state.tasks.push(newTask);
            saveTasksToLocalStorage(state.tasks);
        },
        updateTask: (state, action) => {
            const { id, updatedFields } = action.payload;
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = {
                    ...state.tasks[taskIndex],
                    ...updatedFields,
                };
                saveTasksToLocalStorage(state.tasks);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
            saveTasksToLocalStorage(state.tasks);
        },
        toggleComplete: (state, action) => {
            const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex].isCompleted = !state.tasks[taskIndex].isCompleted;
                saveTasksToLocalStorage(state.tasks);
            }
        },
    },
});

export const { addTask, updateTask, deleteTask, toggleComplete, toggleImportant } = todoSlice.actions;

export default todoSlice.reducer;