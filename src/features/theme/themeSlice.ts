import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
    dark: boolean
}

const initialState: ThemeState = {dark: true};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state: ThemeState, action: PayloadAction<ThemeState>) => {
            state.dark = action.payload.dark;
        }
    }
});

const { actions, reducer } = themeSlice;

export const { changeTheme } = actions;
export default reducer;
