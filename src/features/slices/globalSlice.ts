import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface GlobalState {
    darkMode: boolean,
    isNavigationOpen: boolean,
}

const initialState: GlobalState = {
    darkMode: true,
    isNavigationOpen: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        changeTheme: (state: GlobalState, action: PayloadAction<{ dark: boolean }>) => {
            state.darkMode = action.payload.dark;
        },
        toggleNavigation: (state: GlobalState) => {
            state.isNavigationOpen = !state.isNavigationOpen;
        },
    }
});

const {actions, reducer} = globalSlice;

export const {
    changeTheme,
    toggleNavigation
} = actions;
export default reducer;
