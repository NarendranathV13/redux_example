// import { createStore } from 'redux';
// import Reducer from './reducers';

// const store = createStore(Reducer);

// export default store;

//updated version
import { configureStore} from '@reduxjs/toolkit';
import newReducer, { updateTitle } from './reducers';

const middleware1 = (store) => (next) => (action) => {
    const previous = store.getState()// to get the current state 
    if (action.type === 'newreducer/updateCount' && previous.count === 2) //action.type is which action is triggered
    {
        store.dispatch(updateTitle("new title"));// modifying the title
    }
    console.log("1st",previous)
    return next(action);//passing the action
}
const store = configureStore({
    reducer: newReducer,//newReducer is wrapped to the store to make it global
    middleware: [ middleware1]
});

export default store;

