// import { createStore } from 'redux';
// import Reducer from './reducers';

// const store = createStore(Reducer);

// export default store;

//updated version
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import newReducer, { updateTitle } from './reducers';
import thunk from 'redux-thunk';

const middleware1 = (store) => (next) => (action) => {
    const previous = store.getState();
    if (action.type === 'newReducer/updateCount' && previous.count === 3) {
        store.dispatch(updateTitle("new title"));
    }
    console.log("1st", previous);

    return next(action);
}
const store = configureStore({
    reducer: newReducer,
    middleware: [middleware1, thunk],
});

let unsubscribe = store.subscribe(() => {
    const currentState = store.getState();
    console.log("hello")

    if (currentState.count === 3) {
        unsubscribe(); // Unsubscribe when count reaches 10
    }
});

export default store;