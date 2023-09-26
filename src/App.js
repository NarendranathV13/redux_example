import './App.css';
import store from './redux/store';
import Title from './components/Title';
import Count from './components/Count';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, updateTitle } from './redux/newreducer';
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  if (count === 5) {
    import('./redux/newreducer').then((module) => {
      store.replaceReducer(module.default);
      dispatch(fetchData());
    });
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
