import './App.css';
import Title from './components/Title';
import Count from './components/Count';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/Reducers';
import store from './redux/store';
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  if (count === 5) {//thunk dispatch
    import('./redux/Reducers').then((module) => {
      store.replaceReducer(module.default);
      dispatch(fetchData());
    });
  }
  if (count === 7) {
    dispatch({ type: 'FETCH_DATA' })// dispatching the action type and it triggers saga
  }
  return (
    <div className="App">
      <Title />
      <hr></hr>
      <Count />
    </div>
  );
}

export default App;
