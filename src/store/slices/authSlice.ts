import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AuthStatus =
    | 'loading'
    | 'authenticated'
    | 'unauthenticated';

interface AuthState {
    status: AuthStatus;
}

const initialState: AuthState = {
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {
        setAuthenticated: (state) => {
            state.status = 'authenticated';
        },

        setUnauthenticated: (state) => {
            state.status = 'unauthenticated';
        },

        logout: (state) => {
            state.status = 'unauthenticated';
        },
    },
});

export const {
    setAuthenticated,
    setUnauthenticated,
    logout,
} = authSlice.actions;

export default authSlice.reducer;