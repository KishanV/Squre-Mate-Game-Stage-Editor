"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = require("./Dashboard/dashboard");
const ReactDOM = require("react-dom");
const React = require("react");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const reducer = redux_1.combineReducers({
    selectedMenu: (state = 1, action) => {
        return action.selectedMenu || state;
    },
    selectedStage: (state = 1, action) => {
        return (action.selectedStage === undefined ? state : action.selectedStage);
    }
});
const store = redux_1.createStore(reducer);
store.dispatch({
    selectedMenu: 2,
    type: 'OKAY'
});
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(dashboard_1.Dashboard, null)), document.body.getElementsByClassName('App')[0]);
//# sourceMappingURL=index.js.map