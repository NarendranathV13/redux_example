import { takeLatest, call, put } from 'redux-saga/effects';//importing the side effects from the redux saga
import axios from 'axios';
import { updateTitle } from '../Reducers';
export function* fetchDataSaga() {
    try {
        const response = yield call(axios.get, 'https://65002c0e18c34dee0cd46da3.mockapi.io/Formdata/1');// yeild to wait for response
        const data = response.data;
        yield put(updateTitle(data.state));// put to dispatch the action to redux store
        console.log("saga called")
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function* rootSaga() {
    yield takeLatest('FETCH_DATA', fetchDataSaga);// 'Fetch data' is action type takeLatest is to get last action
}

export default rootSaga;
