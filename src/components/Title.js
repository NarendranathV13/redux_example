import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitle } from '../redux/Reducers';//import { updateTitle } from '../redux/action'(old version)

const Title = () => {
    const title = useSelector((state) => state.title);
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();// dispatch to access action

    const handleButtonClick = () => {
        dispatch(updateTitle("Changed Title"));//value is updated to the action 
    };

    return (
        <div class="bg-warning p-3 m-5 rounded-4 ">
            <h1 class="text-warning text-bg-primary p-3 rounded-3 m-3">Title component</h1>
            <h1>{title}</h1>
            <h3 class="d-flex justify-content-center  ">Count:<h2 class="text-danger d-flex mx-1 "> {count}</h2></h3>
            <button class="btn btn-danger  mx-2" onClick={handleButtonClick}>Change Title</button>
        </div>
    );
};

export default Title;
