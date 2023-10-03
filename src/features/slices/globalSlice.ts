import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CustomError} from '../../types/custom-error';

interface GlobalState {
    darkMode: boolean,
    isNavigationOpen: boolean,
    middlewareError: CustomError | null
}

const initialState: GlobalState = {
    darkMode: true,
    isNavigationOpen: false,
    middlewareError: null
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
        setMiddlewareError: (state: GlobalState, action: PayloadAction<CustomError>) => {
            state.middlewareError = action.payload;
        }
    }
});

const {actions, reducer} = globalSlice;

export const {
    changeTheme,
    toggleNavigation,
    setMiddlewareError
} = actions;
export default reducer;
