import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    location:{ lat: 0, lon: 0 },
    tabId:"all",
};

const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setTabId: (state, action) => {
            state.tabId = action.payload;
        },
    },
});

export const { toggleSidebar, setLocation, setTabId } = interfaceSlice.actions;
export default interfaceSlice.reducer;