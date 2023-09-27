// const initialState = {
//     title: 'REDUX TITLE COMPONENT',
//     count: 0,
// };

// const Reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_TITLE':
//             return {
//                 ...state,
//                 title: action.payload,
//             };
//         case 'UPDATE_COUNT':
//             return {
//                 ...state,
//                 count: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default Reducer;

//updated version
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


const initialState = { //setting initial state
    title: 'REDUX TITLE COMPONENT',
    count: 0,
};

const Reducer = createSlice({
    name: 'Reducer',// name of the slice
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
// thunk action creator
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
export const { updateTitle, updateCount } = Reducer.actions; //
export default Reducer.reducer;
