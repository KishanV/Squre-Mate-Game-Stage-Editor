import {Dashboard} from "./Dashboard/dashboard";
import ReactDOM = require("react-dom");
import React = require("react");
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'

const todos:any = (state = [], action:any) => {
    return {
        stage:'yo..'
    }
}

const reducer =  combineReducers({
    todos
})

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Dashboard/>
    </Provider>,
    document.body.getElementsByClassName('App')[0]
)