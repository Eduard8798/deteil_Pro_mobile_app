import {createSlice} from "@reduxjs/toolkit";

type ThemeSlice = {
    mode: boolean
};

const initialState: ThemeSlice = {
    mode: true,
};

const themeSlice = createSlice({
    name: 'theme',

    initialState,

    reducers: {

        setThemeMode: (state, action) => {
            state.mode = action.payload;
        }
    }
})

export const {setThemeMode} = themeSlice.actions;
export default themeSlice.reducer;