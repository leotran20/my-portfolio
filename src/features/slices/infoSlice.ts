import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DataType} from '../../types/personal-info';


interface InfoState {
    data: DataType
}

const initialState: InfoState = {
    data: {}
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setData: (state: InfoState, action: PayloadAction<DataType>) => {
            state.data = action.payload;
        }
    }
});

const {actions, reducer} = infoSlice;

export const {
    setData
} = actions;
export default reducer;
