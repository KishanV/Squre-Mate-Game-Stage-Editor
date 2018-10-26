import {Dashboard} from "./Dashboard/dashboard";
import ReactDOM = require("react-dom");
import React = require("react");
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({
    selectedMenu:(state = 1, action:any) => {
        return action.selectedMenu || state;
    },
    selectedStage:(state = 1, action:any) => {
        return (action.selectedStage === undefined ? state : action.selectedStage);
    }
});

const store = createStore(reducer);
store.dispatch({
    selectedMenu: 2,
    type: 'OKAY'
});

ReactDOM.render(
    <Provider store={store}>
       <Dashboard/>
    </Provider>,
    document.body.getElementsByClassName('App')[0]
);


