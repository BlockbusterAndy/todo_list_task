import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice';
import interfaceReducer from './slices/interfaceSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        todos: todoReducer,
        interface: interfaceReducer,
    },
});