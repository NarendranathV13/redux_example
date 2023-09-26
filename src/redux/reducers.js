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

const initialState = { //setting initial state
    title: 'REDUX TITLE COMPONENT',
    count: 0,
};

const newReducer = createSlice({
    name: 'newReducer',// name of the slice
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

export const { updateTitle, updateCount } = newReducer.actions; //
export default newReducer.reducer;
