import {createSlice} from '@reduxjs/toolkit';
import {IHomePageState} from './type';

const initialState: IHomePageState = {
    topCars: [],
}

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        setTopCars: (state, action) => {
            state.topCars = action.payload;
        },
    },
});

export const {setTopCars} = homepageSlice.actions;
export default homepageSlice.reducer;