import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.loading = true;
            const { username, password } = action.payload;
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            const user = existingUsers.find(user => user.username === username && user.password === password);
            if (!user) {
                state.error = 'Invalid credentials';
                state.loading = false;
                return;
            }

            // Save user and token to localStorage
            state.user = user;
            state.token = user.id;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', user.id);

            state.error = null;
            state.loading = false;
        },
        logoutUser: (state) => {
            state.loading = true;
            state.user = null;
            state.token = null;

            // Clear localStorage
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            state.loading = false;
        },
        registerUser: (state, action) => {
            state.loading = true;
            const { username, password } = action.payload;
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            const userExists = existingUsers.some(user => user.username === username);
            if (userExists) {
                state.error = 'User already exists';
                state.loading = false;
                return;
            }

            const newUser = { id: nanoid(), username, password };
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            // Save user and token to localStorage
            state.user = { username };
            state.token = newUser.id;
            localStorage.setItem('user', JSON.stringify({ username }));
            localStorage.setItem('token', newUser.id);

            state.error = null;
            state.loading = false;
        },
    },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;

export default authSlice.reducer;
