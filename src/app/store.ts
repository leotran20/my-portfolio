import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "../features/slices/globalSlice";
import infoSlice from '../features/slices/infoSlice';


export const store = configureStore({
    reducer: {
        global: globalReducer,
        info: infoSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
