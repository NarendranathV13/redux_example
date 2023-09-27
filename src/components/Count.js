import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCount, updateTitle } from '../redux/Reducers';//import { updateCount,updateTitle } from '../redux/action';(old method)


const Count = () => {
  const count = useSelector((state) => state.count); //useSelector to select the state
  const title = useSelector((state) => state.title);  // Get the title from Redux store
  const dispatch = useDispatch();

  const handleButtonClick = () => {

    dispatch(updateCount());
  };
  const handleButtonClick2 = () => {
    dispatch(updateTitle("Changed from count component"));
  };

  return (
    <div class="p-4 bg-secondary rounded-4 m-5">
      <h1 class="bg-success p-3 rounded-3 mx-2 mt-2 mb-2">Count component</h1>
      <h2 class="text-warning ">Count: {count}</h2>
      <h2 class="d-flex justify-content-center  ">Title: <h3 class="text-info d-flex justify-content-center mx-1 mt-1 ">{title}</h3></h2>  {/* Display the title here */}
      <button class="btn btn-success  mx-2" onClick={handleButtonClick}>Increase Count</button>
      <button class="btn btn-primary mx-2" onClick={handleButtonClick2}>Title change in count</button>
    </div>
  );
};

export default Count;
