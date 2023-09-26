import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = { //setting initial state
    title: 'from new reducer',
    count: 0,
};

const newReducer = createSlice({
    name: 'newReducer2',// name of the slice
    initialState,
    reducers: {
        updateTitle: (state, action) => {
            console.log("2nd title")
            state.title = action.payload;
        },
        updateCount: (state) => {
            console.log("2nd count")
            state.count +=1 ;
        },
    },
});
export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://65002c0e18c34dee0cd46da3.mockapi.io/Formdata/1'); 
            const data = response.data;
            dispatch(updateTitle(data.name));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
};


export const { updateTitle, updateCount } = newReducer.actions; 
export default newReducer.reducer;
