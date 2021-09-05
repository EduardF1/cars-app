import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import homepageReducer from './containers/homepage/slice';
import reduxLogger from 'redux-logger';

export const store = configureStore({
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger)),
    reducer: {
        homepage: homepageReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
