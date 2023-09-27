// import { createStore } from 'redux';
// import Reducer from './reducers';

// const store = createStore(Reducer);

// export default store;

//updated version
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import Reducers,{updateTitle} from './Reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from './ReduxSaga/Saga';

const sagaMiddleware = createSagaMiddleware();// initialize saga middleware
const middleware1 = (store) => (next) => (action) => {
    const previous = store.getState();
    if (action.type === 'Reducer/updateCount' && previous.count === 3) {
        store.dispatch(updateTitle("new title"));
    }
    console.log("1st", previous);

    return next(action);
}
const store = configureStore({
    reducer: Reducers,
    middleware: [middleware1, sagaMiddleware, thunk],
});
sagaMiddleware.run(rootSaga); // starts the redux saga 

let unsubscribe = store.subscribe(() => {
    const currentState = store.getState();
    console.log("hello")

    if (currentState.count === 3) {
        unsubscribe(); // Unsubscribe when count reaches 10
    }
});

export default store;